<template>
  <div ref="containerRef" class="scene-container">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';

const containerRef = ref<HTMLDivElement | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fogFragment = `
uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uColor;
uniform float uDensity;
uniform float uDriftOffset;
uniform float uDriftVelocity;

varying vec2 vUv;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

float fbm(vec3 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 5; i++) {
    value += amplitude * snoise(p);
    p *= 2.0;
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  vec2 uv = vUv;
  vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
  float time = uTime * 0.03;

  float zDepth = uDriftOffset * 1.2;
  float velocity = uDriftVelocity;
  vec2 centerOffset = -(uv - 0.5) * velocity * 0.6;

  float scale = 1.0 - velocity * 0.15;
  vec2 scaledUv = (uv - 0.5) * scale + 0.5;

  vec3 p1 = vec3((scaledUv + centerOffset * 0.5) * aspect * 1.5, time * 0.3 + zDepth * 0.3);
  float fog1 = fbm(p1);

  vec3 p2 = vec3((scaledUv + centerOffset * 0.8) * aspect * 3.0 + vec2(50.0, 0.0), time * 0.5 + zDepth * 0.5);
  float fog2 = fbm(p2);

  vec3 p3 = vec3((scaledUv + centerOffset * 1.2) * aspect * 5.0 + vec2(0.0, 100.0), time * 0.7 + zDepth * 0.8);
  float fog3 = fbm(p3);

  float bottomGradient = 1.0 - smoothstep(0.0, 0.7, uv.y);
  vec3 p4 = vec3((scaledUv + centerOffset * 0.6) * aspect * 2.0, time * 0.2 + zDepth * 0.4 + uv.y * 0.5);
  float fog4 = fbm(p4) * bottomGradient;

  float fogAmount = fog1 * 0.3 + fog2 * 0.25 + fog3 * 0.15 + fog4 * 0.5;

  fogAmount = (fogAmount + 1.0) * 0.5;
  fogAmount = smoothstep(0.15, 0.75, fogAmount);
  fogAmount *= uDensity;

  fogAmount *= 1.0 - velocity * 0.25;

  float vignetteStrength = 1.0 + velocity * 0.5;
  float vignette = 1.0 - length((uv - 0.5) * vignetteStrength);
  vignette = smoothstep(0.0, 0.8, vignette);

  vec3 fogColor = uColor * (0.85 + fog2 * 0.3);

  float alpha = fogAmount * vignette;
  alpha = clamp(alpha, 0.0, 0.85);

  gl_FragColor = vec4(fogColor, alpha);
}
`;

let scene: THREE.Scene, camera: THREE.OrthographicCamera, renderer: THREE.WebGLRenderer, material: THREE.ShaderMaterial, geometry: THREE.PlaneGeometry, mesh: THREE.Mesh;
let animationId: number;

const init = () => {
  if (!containerRef.value || !canvasRef.value) return;

  scene = new THREE.Scene();
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
  camera.position.z = 1;

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    canvas: canvasRef.value
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 1);

  const uniforms = {
    uColor: { value: new THREE.Vector3(0.8, 0.8, 0.8) },
    uDensity: { value: 0.9 },
    uDriftOffset: { value: 0 },
    uDriftVelocity: { value: 0 },
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    uTime: { value: 0 }
  };

  material = new THREE.ShaderMaterial({
    depthTest: false,
    depthWrite: false,
    fragmentShader: fogFragment,
    side: THREE.DoubleSide,
    transparent: true,
    uniforms,
    vertexShader
  });

  geometry = new THREE.PlaneGeometry(2, 2);
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const resize = () => {
    if (!containerRef.value) return;
    const width = containerRef.value.clientWidth;
    const height = containerRef.value.clientHeight;
    if (width > 0 && height > 0) {
      renderer.setSize(width, height);
      uniforms.uResolution.value.set(width, height);
    }
  };

  resize();
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(containerRef.value);

  const animate = () => {
    const time = performance.now() * 0.001;
    uniforms.uTime.value = time * 0.6;
    uniforms.uDriftOffset.value = Math.sin(time * 0.1) * 0.5;
    uniforms.uDriftVelocity.value = 0.2 + Math.abs(Math.cos(time * 0.15)) * 0.3;

    renderer.render(scene, camera);
    animationId = requestAnimationFrame(animate);
  };
  animate();

  onUnmounted(() => {
    cancelAnimationFrame(animationId);
    resizeObserver.disconnect();
    geometry.dispose();
    material.dispose();
    renderer.dispose();
  });
};

onMounted(() => {
  init();
});
</script>

<style scoped>
.scene-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
  background: #000;
}

canvas {
  width: 100%;
  height: 100%;
  display: block;
}
</style>