export type Character = string | 'All';

export type PerkCategory = 
  | 'Aura' 
  | 'Chase' 
  | 'Hunt' 
  | 'Penalty' 
  | 'Terror' 
  | 'Objective' 
  | 'Healing' 
  | 'Evasion' 
  | 'Stealth'
  | 'Haste'
  | 'Gen Speed'
  | 'Protection'
  | 'Altruism'
  | 'Luck';

export type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Very Rare' | 'Ultra Rare';

export type Side = 'Killer' | 'Survivor';

export interface Perk {
  id: string;
  name: string;
  description: string;
  character: Character;
  rarity: Rarity;
  categories: PerkCategory[];
  side: Side;
  imageUrl: string;
}

export const killerPerks: Perk[] = [
  {
    id: 'a-nurses-calling',
    name: "A Nurse's Calling",
    description: "The Auras of Survivors who are healing or being healed are revealed to you when they are within a range of 20/24/28 metres.",
    character: 'Nurse',
    rarity: 'Very Rare',
    categories: ['Aura'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/a-nurses-calling.png'
  },
  {
    id: 'agitation',
    name: 'Agitation',
    description: 'You get excited in anticipation of hooking your prey. Increases your Movement speed while transporting bodies by 6/12/18%. While transporting a body, your Terror Radius is increased by 12 metres.',
    character: 'Trapper',
    rarity: 'Very Rare',
    categories: ['Chase', 'Haste'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/agitation.png'
  },
  {
    id: 'bamboozle',
    name: 'Bamboozle',
    description: 'Your vault speed is 5/10/15% faster. Performing a vault action calls upon The Entity to block that vault location for 8/12/16 seconds. Only one vault location may be blocked in this way at any given time. The vault location is blocked only for Survivors.',
    character: 'Clown',
    rarity: 'Rare',
    categories: ['Chase'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/bamboozle.png'
  },
  {
    id: 'barbecue-&-chilli',
    name: 'Barbecue & Chilli',
    description: "A deep bond with The Entity unlocks potential in one's Aura-reading ability. After hooking a Survivor, all other Survivors' Auras are revealed to you for 4 seconds when they are farther than 40 metres from the Hook. Each time a Survivor is hooked for the first time, gain a 25% stack-able bonus to all Bloodpoint gains up to a maximum of 50/75/100%.",
    character: 'Cannibal',
    rarity: 'Very Rare',
    categories: ['Aura'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/barbecue-&-chilli.png'
  },
  {
    id: 'beast-of-prey',
    name: 'Beast Of Prey',
    description: 'Your lust for a kill is so intense that your connection with The Entity is momentarily lost making you totally unpredictable. The Red Stain disappears after gaining Bloodlust Tier I and stays hidden until you lose Bloodlust. Gain 30/40/50% more Bloodpoints for actions in the Hunter Category.',
    character: 'Huntress',
    rarity: 'Rare',
    categories: ['Chase'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/beast-of-prey.png'
  },
  {
    id: 'bitter-murmur',
    name: 'Bitter Murmur',
    description: "Unlocks potential in one's Aura-reading ability. Each time a Generator is fully repaired, Survivors within 16 metres of the completed Generator will be revealed for 5 seconds. When the last Generator is fully repaired, all the Survivors' Auras are revealed for 5/7/10 seconds.",
    character: 'All',
    rarity: 'Very Rare',
    categories: ['Aura'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/bitter-murmur.png'
  },
  {
    id: 'blood-echo',
    name: 'Blood Echo',
    description: 'The agony of one is inflicted on others. When hooking a Survivor, all other injured Survivors suffer from the Haemorrhage Status Effect until healed and the Exhausted Status Effect for 45 seconds. Blood Echo can only be triggered once every 80/70/60 seconds.',
    character: 'Oni',
    rarity: 'Very Rare',
    categories: ['Penalty'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/blood-echo.png'
  },
  {
    id: 'blood-warden',
    name: 'Blood Warden',
    description: 'As soon as the Exit Gate is opened, Blood Warden is activated. The Auras of any Survivors located within Exit Gate areas are revealed to you. Once per Trial, hooking a Survivor while Blood Warden is active calls upon The Entity to block both Exits for all Survivors for 30/40/60 seconds.',
    character: 'Nightmare',
    rarity: 'Very Rare',
    categories: ['Penalty', 'Aura'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/blood-warden.png'
  },
  {
    id: 'bloodhound',
    name: 'Bloodhound',
    description: 'Like a hunting scent hound, you smell traces of blood at a great distance. Fresh Blood Stains are considerably more discernible than normal and can be tracked for 2/3/4 seconds longer than normal.',
    character: 'Wraith',
    rarity: 'Very Rare',
    categories: ['Hunt'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/bloodhound.png'
  },
  {
    id: 'brutal-strength',
    name: 'Brutal Strength',
    description: "Your great strength allows you to shred through your prey's defences. Destroy dropped Pallets and damage Generators 10/15/20% faster.",
    character: 'Trapper',
    rarity: 'Very Rare',
    categories: ['Chase', 'Gen Speed'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/brutal-strength.png'
  },
  {
    id: 'corrupt-intervention',
    name: 'Corrupt Intervention',
    description: "Your prayers invoke a dark power that meddles with the Survivors' chances of survival. 3 Generators located farthest from you are blocked by The Entity for 80/100/120 seconds at the start of the Trial.",
    character: 'Plague',
    rarity: 'Rare',
    categories: ['Penalty'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/corrupt-intervention.png'
  },
  {
    id: 'coulrophobia',
    name: 'Coulrophobia',
    description: 'Your presence alone instils great fear. Survivors within your Terror Radius have a 30/40/50% penalty to the Healing progression speed.',
    character: 'Clown',
    rarity: 'Very Rare',
    categories: ['Terror', 'Penalty'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/coulrophobia.png'
  },
  {
    id: 'cruel-limits',
    name: 'Cruel Limits',
    description: 'Your ties to the otherworldly manifest when your prey attempts to get away. Each time a Generator is repaired, all Windows and vault locations within a radius of 24 metres from the completed Generator are blocked for all Survivors for the next 20/25/30 seconds.',
    character: 'Demogorgon',
    rarity: 'Very Rare',
    categories: ['Chase'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/cruel-limits.png'
  },
  {
    id: 'dark-devotion',
    name: 'Dark Devotion',
    description: 'The display of your Powers creates a whirlwind of panic that spreads throughout the land. You become obsessed with one Survivor. Hitting the Obsession with your basic attack causes the Obsession to emit a Terror Radius of 32 metres for 20/25/30 seconds. During that time, your Terror Radius is reduced to 0 metres.',
    character: 'Plague',
    rarity: 'Very Rare',
    categories: ['Terror'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/dark-devotion.png'
  },
  {
    id: 'deerstalker',
    name: 'Deerstalker',
    description: "Unlocks potential in one's Aura-reading ability. Reveals dying Survivors' Auras when standing within 20/28/36 metres.",
    character: 'All',
    rarity: 'Rare',
    categories: ['Aura'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/deerstalker.png'
  },
  {
    id: 'discordance',
    name: 'Discordance',
    description: "Any time two or more Survivors are working on the same Generator, that Generator's Aura is highlighted in yellow for 8/10/12 seconds.",
    character: 'Legion',
    rarity: 'Rare',
    categories: ['Aura'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/discordance.png'
  },
  {
    id: 'distressing',
    name: 'Distressing',
    description: 'Your horrifying emanation strikes at a supernaturally long distance. Your Terror Radius is increased by 22/24/26%. Gain 100% more Bloodpoints for actions in the Deviousness Category.',
    character: 'All',
    rarity: 'Very Rare',
    categories: ['Terror'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/distressing.png'
  },
  {
    id: 'dying-light',
    name: 'Dying Light',
    description: 'You become obsessed with one Survivor. Your Obsession gains a 33% Action Speed bonus to unhooking and healing other Survivors. Each time you hook a Survivor that is not the Obsession and the Obsession is alive, gain a Token. If the Obsession is alive, all others Survivors get a stack-able 2/2.5/3% penalty to Repair, Healing, and Sabotage speed for each Token.',
    character: 'Shape',
    rarity: 'Very Rare',
    categories: ['Penalty', 'Gen Speed'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/dying-light.png'
  },
  {
    id: 'enduring',
    name: 'Enduring',
    description: 'You are resilient to pain. You reduce the duration of Pallet Stuns by 40/45/50%.',
    character: 'Hillbilly',
    rarity: 'Rare',
    categories: ['Chase'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/enduring.png'
  },
  {
    id: 'fire-up',
    name: 'Fire Up',
    description: 'The increased pressure of losing your preys fills you with anger and gives you unsuspected motivation. Each time the Survivors complete repairs on a Generator, Fire Up grows in power. For each Generator completed, gain a stack-able 3/3.5/4% buff to Picking-Up, Dropping, Pallet Breaking, Generator Damaging and Vaulting speeds for the remainder of the Trial.',
    character: 'Nightmare',
    rarity: 'Rare',
    categories: ['Chase', 'Gen Speed'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/fire-up.png'
  },
  {
    id: 'franklins-demise',
    name: "Franklin's Demise",
    description: 'Your vicious Basic Attacks make the Survivors drop their Item on impact. The lost Item is damaged in the fall, losing 0/5/10% of its base amount of Charges.',
    character: 'Cannibal',
    rarity: 'Very Rare',
    categories: ['Penalty'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/franklins-demise.png'
  },
  {
    id: 'furtive-chase',
    name: 'Furtive Chase',
    description: 'You become obsessed with one Survivor. You lurk in the shadows, eliminating your victims one by one. When your Obsession is hooked, Furtive Chase receives a Token, up to a maximum of 2/3/4 Tokens. Each Token decreases your Terror Radius by 4 metres while in a Chase. When a Survivor rescues the Obsession from a Hook, the rescuer becomes the Obsession. You lose all Tokens if the Obsession is sacrificed or killed.',
    character: 'Ghost Face',
    rarity: 'Very Rare',
    categories: ['Terror'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/furtive-chase.png'
  },
  {
    id: 'hangmans-trick',
    name: "Hangman's Trick",
    description: 'Your ingenious modifications to Hooks prevent tampering and permanent damage. Hooks destroyed by sabotage or sacrifices repair automatically after 30/20/10 seconds. Gain a notification when someone starts sabotaging the Hooks. The automatic repair timer of sabotaged Bear Traps is reduced by 60 seconds.',
    character: 'Pig',
    rarity: 'Rare',
    categories: ['Penalty'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/hangmans-trick.png'
  },
  {
    id: 'hex-devour-hope',
    name: 'Hex: Devour Hope',
    description: 'A Hex rooting its power on hope. The false hope of Survivors ignites your hunger. When a Survivor is rescued from a Hook at least 24 metres away, Devour Hope receives a Token. 2 Tokens: Gain a 3/4/5% Haste Status Effect 10 seconds after hooking a Survivor, for a duration of 10 seconds. 3 Tokens: Survivors suffer from the Exposed Status Effect. 5 Tokens: Grants the ability to kill Survivors by your own hand.',
    character: 'Hag',
    rarity: 'Very Rare',
    categories: ['Hunt', 'Haste'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/hex-devour-hope.png'
  },
  {
    id: 'hex-haunted-ground',
    name: 'Hex: Haunted Ground',
    description: 'Two trapped Hex Totems will spawn in the Trial. When one of the two trapped Hex Totems is cleansed by a Survivor, all Survivors suffer from the Exposed  Status Effect for 40/50/60 seconds. The remaining trapped Hex Totem immediately becomes a Dull Totem.',
    character: 'Spirit',
    rarity: 'Very Rare',
    categories: ['Hunt'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/hex-haunted-ground.png'
  },
  {
    id: 'hex-huntress-lullaby',
    name: 'Hex: Huntress Lullaby',
    description: 'A Hex rooting its power in despair. Your hunt is an irresistible song of dread which muddles your prey\'s attention. Survivors receive a 2/4/6% Regression penalty when missing any Skill Check. Each time a Survivor is hooked, Huntress Lullaby grows in power: 1-4 Tokens: Time between the Skill Check warning sound and the Skill Check becomes shorter. 5 Tokens: No Skill Check warning.',
    character: 'Huntress',
    rarity: 'Very Rare',
    categories: ['Penalty'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/hex-huntress-lullaby.png'
  },
  {
    id: 'hex-no-one-escapes-death',
    name: 'Hex: No One Escapes Death',
    description: 'A Hex rooting its power on hope. You are animated by the power of your Hex Totem when the Survivors are on the verge of escaping. Once the Exit Gates are powered, if there is a Dull Totem remaining on the Map, this Hex is applied to it. While Hex: No One Escapes Death is active, Survivors suffer from the Exposed  Status Effect and your Movement speed is increased by 2/3/4%.',
    character: 'All',
    rarity: 'Very Rare',
    categories: ['Hunt', 'Haste'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/hex-no-one-escapes-death.png'
  },
  {
    id: 'hex-ruin',
    name: 'Hex: Ruin',
    description: 'A Hex that affects all Survivor\'s Generator Repair progress. Whenever a Generator is not being repaired by a Survivor, it will immediately and automatically regress its Repair progress at 100/150/200% of the normal Regression speed.',
    character: 'Hag',
    rarity: 'Very Rare',
    categories: ['Penalty', 'Gen Speed'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/hex-ruin.png'
  },
  {
    id: 'hex-the-third-seal',
    name: 'Hex: The Third Seal',
    description: "A Hex that hinders one's Aura-reading ability. Hitting a Survivor while the Hex Totem is active applies the Blindness Status Effect. This effect applies to the last 2/3/4 Survivors hit.",
    character: 'Hag',
    rarity: 'Very Rare',
    categories: ['Penalty'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/hex-the-third-seal.png'
  },
  {
    id: 'hex-thrill-of-the-hunt',
    name: 'Hex: Thrill of the Hunt',
    description: 'A Hex rooting its power on hope. The false hope of Survivors fills you with excitement and strengthens your totems. For each Dull Totem and Hex Totem remaining on the Map gain a Token. Gain 10% more Bloodpoints for actions in the Hunter Category for each Token. Survivors\' cleansing speed is reduced by 4/5/6% for each Token. Gain a notification when someone starts working on a Hex Totem.',
    character: 'All',
    rarity: 'Rare',
    categories: ['Penalty'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/hex-thrill-of-the-hunt.png'
  },
  {
    id: 'im-all-ears',
    name: "I'm All Ears",
    description: "Your keen senses are sharpened in the dark Realm of The Entity. Unlocks potential in one's Aura-reading ability. Any Survivor performing a rushed action within 48 metres from your location will have their Aura revealed to you for 6 seconds. I'm All Ears can only be triggered once every 60/50/40 seconds.",
    character: 'Ghost Face',
    rarity: 'Rare',
    categories: ['Aura'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/im-all-ears.png'
  },
  {
    id: 'infectious-fright',
    name: 'Infectious Fright',
    description: "Any Survivor that is within the Killer's Terror Radius while another Survivor is put into the Dying State with a Basic Attack will yell and reveal their location for 4/5/6 seconds.",
    character: 'Plague',
    rarity: 'Very Rare',
    categories: ['Aura'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/infectious-fright.png'
  },
  {
    id: 'insidious',
    name: 'Insidious',
    description: 'Unlocks the stealth ability. By standing still for 4/3/2 seconds, you reduce your Terror Radius to 0 metres and thus become stealthy until you move or act again.',
    character: 'All',
    rarity: 'Very Rare',
    categories: ['Terror', 'Stealth'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/insidious.png'
  },
  {
    id: 'iron-grasp',
    name: 'Iron Grasp',
    description: 'Your powerful hold onto the Survivors causes escapes to be nearly impossible. Struggle Effects from a wiggling Survivor are reduced by 75%. Time to wiggle out of your grasp is increased by 4/8/12%.',
    character: 'All',
    rarity: 'Rare',
    categories: ['Penalty'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/iron-grasp.png'
  },
  {
    id: 'iron-maiden',
    name: 'Iron Maiden',
    description: 'You open Lockers 30/40/50% faster. Survivors who exit Lockers suffer from the Exposed  Status Effect for 15 seconds and their location is revealed for 4 seconds.',
    character: 'Legion',
    rarity: 'Very Rare',
    categories: ['Hunt', 'Aura'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/iron-maiden.png'
  },
  {
    id: 'knock-out',
    name: 'Knock Out',
    description: "The trauma caused by your brutal attacks makes crying for help painfully difficult. Dying Survivors' Auras are not revealed to other Survivors when they are standing outside of a range of 32/24/16 metres.",
    character: 'Cannibal',
    rarity: 'Rare',
    categories: ['Hunt'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/knock-out.png'
  },
  {
    id: 'lightborn',
    name: 'Lightborn',
    description: 'Unlike other beasts of The Fog, you have adapted to light. Resistance to Blindness is increased by 60/70/80%. Recovery from Blindness is increased by 50%.',
    character: 'Hillbilly',
    rarity: 'Very Rare',
    categories: ['Chase'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/lightborn.png'
  },
  {
    id: 'mad-grit',
    name: 'Mad Grit',
    description: 'While carrying a Survivor, you suffer no cool-down on missed attacks and successfully hitting another Survivor will pause the carried Survivor\'s wiggle timer for 2/3/4 seconds.',
    character: 'Legion',
    rarity: 'Very Rare',
    categories: ['Penalty'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/mad-grit.png'
  },
  {
    id: 'make-your-choice',
    name: 'Make Your Choice',
    description: 'When a Survivor rescues another Survivor from a Hook that is at least 32 metres away from you, Make Your Choice triggers and applies the Exposed Status Effect on the rescuer for 40/50/60 seconds. Make Your Choice has a cool-down of 40/50/60 seconds.',
    character: 'Pig',
    rarity: 'Very Rare',
    categories: ['Hunt'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/make-your-choice.png'
  },
  {
    id: 'mindbreaker',
    name: 'Mindbreaker',
    description: 'Your distressing presence drains and weakens your prey. While repairing Generators with less than 50% Repair progression, Survivors are afflicted by the Exhausted Status Effect. Any existing Exhaustion Status Effect timers are paused while the Survivor is repairing a Generator. After ending the Repair action, the Survivor is afflicted by the Exhausted Status Effect for 1/2/3 second(s).',
    character: 'Demogorgon',
    rarity: 'Very Rare',
    categories: ['Penalty'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/mindbreaker.png'
  },
  {
    id: 'monitor-&-abuse',
    name: 'Monitor & Abuse',
    description: 'Meticulous in your approach, terrifying in your application. While in a Chase, your Terror Radius is increased by 8 metres. Otherwise, your Terror Radius is decreased by 8 metres and your Field of View is increased by 3/5/10°.',
    character: 'Doctor',
    rarity: 'Very Rare',
    categories: ['Terror'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/monitor-&-abuse.png'
  },
  {
    id: 'monstrous-shrine',
    name: 'Monstrous Shrine',
    description: "Your fervent care of the Hooks found in the Basement has aroused The Entity's interest. The Basement Hooks are granted the following bonuses: 3/6/9% faster Entity progression. 5/10/15% increased difficulty on escape attempts. 3/6/9% increased penalty to escape fails.",
    character: 'All',
    rarity: 'Very Rare',
    categories: ['Penalty'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/monstrous-shrine.png'
  },
  {
    id: 'nemesis',
    name: 'Nemesis',
    description: 'You seek retribution on those who have wronged you. A Survivor who blinds or stuns you using a Pallet or a Locker becomes your Obsession. Anytime a new Survivor becomes the Obsession, they are affected by the Oblivious Status Effect for 40/50/60 seconds and their Aura is revealed to you for 4 seconds.',
    character: 'Oni',
    rarity: 'Very Rare',
    categories: ['Hunt', 'Aura'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/nemesis.png'
  },
  {
    id: 'overcharge',
    name: 'Overcharge',
    description: 'You are fuelled by your hate for progress. Overcharge a Generator by performing the Damage Generator action. The next Survivor interacting with that Generator is faced with a tremendously difficult Skill Check. Failing the Skill Check results in an additional 3/4/5% Regression penalty. Succeeding the Skill Check grants no progress, but prevents the Generator Explosion.',
    character: 'Doctor',
    rarity: 'Very Rare',
    categories: ['Penalty', 'Gen Speed'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/overcharge.png'
  },
  {
    id: 'overwhelming-presence',
    name: 'Overwhelming Presence',
    description: 'Your presence alone instils great fear. Survivors within your Terror Radius suffer from inefficiency. Affected Survivors\' Item Consumption rates are increased by 80/90/100%.',
    character: 'Doctor',
    rarity: 'Rare',
    categories: ['Penalty', 'Terror'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/overwhelming-presence.png'
  },
  {
    id: 'play-with-your-food',
    name: 'Play With Your Food',
    description: 'You become obsessed with one Survivor. Every time you chase your Obsession and let them escape, you receive a Token up to a maximum of 3 Tokens. Each Token increases your Movement speed by 3/4/5%. Each offensive action spends 1 Token.',
    character: 'Shape',
    rarity: 'Very Rare',
    categories: ['Chase', 'Haste'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/play-with-your-food.png'
  },
  {
    id: 'pop-goes-the-weasel',
    name: 'Pop Goes The Weasel',
    description: 'A deep bond with The Entity unlocks great strength. After hooking a Survivor, the next Generator you break is instantly regressed by 25% of its total progression. Normal Generator Regression applies after the damage is done. Pop Goes the Weasel is active for 40/50/60 seconds after the Survivor is hooked.',
    character: 'Clown',
    rarity: 'Very Rare',
    categories: ['Penalty', 'Gen Speed'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/pop-goes-the-weasel.png'
  },
  {
    id: 'predator',
    name: 'Predator',
    description: 'Your acute tracking ability allows you to hone in on disturbances left by running Survivors. Scratch Marks left by Survivors will spawn slightly/moderately/considerably closer together.',
    character: 'Wraith',
    rarity: 'Rare',
    categories: ['Hunt'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/predator.png'
  },
  {
    id: 'rancor',
    name: 'Rancor',
    description: 'You become obsessed with one Survivor. Each time a Generator is completed, the Obsession sees your Aura for 5/4/3 seconds. Each time a Generator is completed, all Survivors\' locations are revealed to you for 3 seconds. Once all Generators are completed, the Obsession has the Exposed  Status Effect and the Killer can kill the Obsession.',
    character: 'Spirit',
    rarity: 'Very Rare',
    categories: ['Aura'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/rancor.png'
  },
  {
    id: 'remember-me',
    name: 'Remember Me',
    description: 'You become obsessed with one Survivor. Each time you hit your Obsession, you increase the Exit Gate Opening time by 4 seconds up to a maximum of 8 additional/12 additional/16 additional seconds. The Obsession is not affected by Remember Me.',
    character: 'Nightmare',
    rarity: 'Very Rare',
    categories: ['Penalty'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/remember-me.png'
  },
  {
    id: 'save-the-best-for-last',
    name: 'Save The Best For Last',
    description: 'You become obsessed with one Survivor. Earn a Token for each successful hit that is not dealt to the Obsession. Each Token grants a stack-able 5% cool-down reduction on successful attacks. You can earn up to 8 Tokens. Attacking your Obsession will make you lose 4/3/2 Tokens. You can no longer gain Tokens if your Obsession is sacrificed or killed.',
    character: 'Shape',
    rarity: 'Very Rare',
    categories: ['Chase'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/save-the-best-for-last.png'
  },
  {
    id: 'shadowborn',
    name: 'Shadowborn',
    description: 'You have a keen vision in the darkness of the night. Your Field of View is increased by 9/12/15 °.',
    character: 'Wraith',
    rarity: 'Very Rare',
    categories: ['Hunt'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/shadowborn.png'
  },
  {
    id: 'sloppy-butcher',
    name: 'Sloppy Butcher',
    description: 'You know where to hit to make them bleed. Wounds inflicted by successful attacks slightly/moderately/considerably increase the Survivor\'s bleeding frequency and cause the Mangled Status Effect.',
    character: 'All',
    rarity: 'Rare',
    categories: ['Penalty'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/sloppy-butcher.png'
  },
  {
    id: 'spies-from-the-shadows',
    name: 'Spies From The Shadows',
    description: 'The Crows found in the world can communicate directly with you. 100% of the time, cawing Crows give you a visual cue when you are within a range of 20/28/36 metres. Spies from the Shadows has a cool-down of 5 seconds.',
    character: 'All',
    rarity: 'Very Rare',
    categories: ['Hunt'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/spies-from-the-shadows.png'
  },
  {
    id: 'spirit-fury',
    name: 'Spirit Fury',
    description: 'Each Pallet you break magnifies the wrath of The Entity. After breaking 4/3/2 Pallets, the next time you are stunned by a Pallet, The Entity will instantly break it. You still suffer from the stun effect penalty.',
    character: 'Spirit',
    rarity: 'Rare',
    categories: ['Chase'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/spirit-fury.png'
  },
  {
    id: 'stridor',
    name: 'Stridor',
    description: 'You are acutely sensitive to the breathing of your prey. Survivors\' Grunts of Pain are 25/50/50% louder and regular breathing is 0/0/25% louder.',
    character: 'Nurse',
    rarity: 'Rare',
    categories: ['Hunt'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/stridor.png'
  },
  {
    id: 'surge',
    name: 'Surge',
    description: 'Your eerie presence charges the air and interferes with technology. Putting a Survivor into the Dying State with a Basic Attack causes all Generators within a radius of 32 metres to instantly explode and regress. Surge applies an immediate Regression penalty of 8%. Surge can only be triggered once every 60/50/40 seconds.',
    character: 'Demogorgon',
    rarity: 'Rare',
    categories: ['Penalty', 'Gen Speed'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/surge.png'
  },
  {
    id: 'surveillance',
    name: 'Surveillance',
    description: "Unlocks potential in one's Aura-reading ability. All regressing Generators will be highlighted by a white Aura. Once regression ends, Generators will be highlighted by a yellow Aura for 8/12/16 seconds. Noises created by Generator Repairs are audible at an additional 8 metres.",
    character: 'Pig',
    rarity: 'Very Rare',
    categories: ['Aura', 'Gen Speed'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/surveillance.png'
  },
  {
    id: 'territorial-imperative',
    name: 'Territorial Imperative',
    description: "Unlocks potential in one's Aura-reading ability. Survivors' Auras are revealed to you for 3 seconds when they enter the Basement and you are more than 32 metres away from the Basement entrance. Territorial Imperative can only be triggered once every 30/25/20 seconds.",
    character: 'Huntress',
    rarity: 'Very Rare',
    categories: ['Aura'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/territorial-imperative.png'
  },
  {
    id: 'thanatophobia',
    name: 'Thanatophobia',
    description: 'Their courage fades in the face of their undeniable mortality. For each Injured, Dying or hooked Survivor, all Survivors receive a stack-able penalty of 3/3.5/4% to their Repair, Healing and Sabotage speed up to a maximum of 12/14/16%.',
    character: 'Nurse',
    rarity: 'Very Rare',
    categories: ['Penalty', 'Gen Speed'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/thanatophobia.png'
  },
  {
    id: 'thrilling-tremors',
    name: 'Thrilling Tremors',
    description: 'Your dark designs and shrewd composure rouse The Entity. After picking up a Survivor, all Generators not being repaired by Survivors are blocked by The Entity and cannot be repaired for the next 16 seconds. Affected Generators are highlighted by a white Aura. Thrilling Tremors can only be triggered once every 100/80/60 seconds.',
    character: 'Ghost Face',
    rarity: 'Very Rare',
    categories: ['Penalty', 'Aura'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/thrilling-tremors.png'
  },
  {
    id: 'tinkerer',
    name: 'Tinkerer',
    description: 'When a Generator is repaired to 85%, you receive a Loud Noise notification and your Terror Radius is reduced to 0 metres for 8/10/12 seconds.',
    character: 'Hillbilly',
    rarity: 'Very Rare',
    categories: ['Terror', 'Stealth'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/tinkerer.png'
  },
  {
    id: 'unnerving-presence',
    name: 'Unnerving Presence',
    description: 'Your presence alone instils great fear. Survivors within your Terror Radius have a 10% greater chance of triggering Skill Checks when repairing, healing or sabotaging. Triggered Skill Checks\' success zones are reduced by 40/50/60%.',
    character: 'Trapper',
    rarity: 'Rare',
    categories: ['Terror', 'Penalty'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/unnerving-presence.png'
  },
  {
    id: 'unrelenting',
    name: 'Unrelenting',
    description: 'You recuperate faster from missed attacks made with your main weapon. The cool-down of missed Basic Attacks is reduced by 20/25/30%.',
    character: 'All',
    rarity: 'Very Rare',
    categories: ['Chase'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/unrelenting.png'
  },
  {
    id: 'whispers',
    name: 'Whispers',
    description: "You have a rudimentary understanding of The Entity's voice. Sporadically hear The Entity's Whisper when standing within a 48/40/32 metres of a Survivor.",
    character: 'All',
    rarity: 'Very Rare',
    categories: ['Hunt'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/whispers.png'
  },
  {
    id: 'zanshin-tactics',
    name: 'Zanshin Tactics',
    description: "Unlocks potential in one's Aura-reading ability. You are mentally alert and aware of key points on the battlefield. The Auras of all Pallets and Windows are revealed to you within a range of 24 metres.When a Survivor is damaged, Zanshin Tactics becomes inactive for 40/35/30 seconds.",
    character: 'Oni',
    rarity: 'Rare',
    categories: ['Aura'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/zanshin-tactics.png'
  },
  {
    id: 'lethal-pursuer',
    name: 'Lethal Pursuer',
    description: 'At the start of the Trial, the Auras of all Survivors are revealed to you for 7/8/9 seconds. Anytime a Survivor\'s Aura is shown for a period of time, its duration is increased by 2 seconds.',
    character: 'Nemesis',
    rarity: 'Very Rare',
    categories: ['Aura'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/lethal-pursuer.png'
  },
  {
    id: 'deadlock',
    name: 'Deadlock',
    description: 'Whenever a Generator is completed, The Entity blocks the Generator with the most progress for 20/25/30 seconds. You see its white Aura during this time.',
    character: 'Cenobite',
    rarity: 'Very Rare',
    categories: ['Penalty', 'Aura'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/deadlock.png'
  },
  {
    id: 'scourge-hook-pain-resonance',
    name: 'Scourge Hook: Pain Resonance',
    description: 'At the start of the Trial, up to 4 Hooks are changed into Scourge Hooks. You see their white Auras. Each time a Survivor is hooked on a Scourge Hook, the Generator with the most progress explodes, instantly losing 9/12/15% progression and will start to regress.',
    character: 'Artist',
    rarity: 'Very Rare',
    categories: ['Penalty', 'Gen Speed'],
    side: 'Killer',
    imageUrl: '/img/killer-perks/scourge-hook-pain-resonance.png'
  }
];

export const survivorPerks: Perk[] = [
  {
    id: 'ace-in-the-hole',
    name: 'Ace in The Hole',
    description: 'Lady Luck always seems to be throwing something good your way. When retrieving an item from a chest, there is a 100% chance that an add-on of Very Rare rarity or lower will be attached to it. 10/25/50 % chance to find a second add-on of uncommon rarity or lower.',
    character: 'Ace Visconti',
    rarity: 'Very Rare',
    categories: ['Objective'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/ace-in-the-hole.png'
  },
  {
    id: 'adrenaline',
    name: 'Adrenaline',
    description: 'You are fuelled by unexpected energy when on the verge of escape. Instantly heal one Health State and sprint at 150% of your normal running speed for 5 seconds when the Exit Gates are powered.',
    character: 'Meg Thomas',
    rarity: 'Very Rare',
    categories: ['Healing', 'Haste', 'Evasion'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/adrenaline.png'
  },
  {
    id: 'aftercare',
    name: 'Aftercare',
    description: "Unlocks potential in one's Aura-reading ability. You see the Aura of every Survivor that you rescued from a Hook or who rescued you from one and you completed a Healing action on or who completed one on you. They also see your Aura. This occurs for up to 1/2/3 Survivor(s).",
    character: 'Jeff Johansen',
    rarity: 'Very Rare',
    categories: ['Aura'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/aftercare.png'
  },
  {
    id: 'alert',
    name: 'Alert',
    description: 'Your acute senses are on high alert. When the Killer performs a Pallet Break or Generator Damage action, their Aura is revealed to you for 3/4/5 seconds.',
    character: 'Feng Min',
    rarity: 'Very Rare',
    categories: ['Aura'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/alert.png'
  },
  {
    id: 'any-means-necessary',
    name: 'Any Means Necessary',
    description: "You stand up for yourself, using whatever's on hand to gain an advantage. Press and hold the Active Ability button for 4 seconds while standing beside a dropped Pallet to reset it to its upright position. Any Means Necessary has a cool-down of 140/130/120 seconds.",
    character: 'Yui Kimura',
    rarity: 'Rare',
    categories: ['Evasion'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/any-means-necessary.png'
  },
  {
    id: 'autodidact',
    name: 'Autodidact',
    description: 'You start the Trial with a -25 % progression penalty for Skill Checks to heal Survivors. For every successful Skill Check completed while healing a Survivor, you receive a Token for a maximum of 3/4/5 Tokens. Each Token grants you a +15 % bonus progression for a successful Skill Check while healing Survivors. Great Skill Checks cannot be performed while using Autodidact and is not active when using a Med-Kit to heal.',
    character: 'Adam Francis',
    rarity: 'Very Rare',
    categories: ['Healing'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/autodidact.png'
  },
  {
    id: 'babysitter',
    name: 'Babysitter',
    description: "While you have a reputation for being self-centred, you risk it all to help those in need. When you unhook a Survivor, the unhooked Survivor leaves no Scratch Marks or Blood Trail for the next 4/6/8 seconds. Both you and the Killer see each other's Aura for 4 seconds.",
    character: 'Steve Harrington',
    rarity: 'Rare',
    categories: ['Aura', 'Stealth'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/babysitter.png'
  },
  {
    id: 'balanced-landing',
    name: 'Balanced Landing',
    description: 'Your agility is incomparable. Cat-like reflexes reduce your stagger duration from falls by 75 % and muffle your grunts from falling by 100 %. Upon landing, start sprinting at 150 % of your normal running speed for a maximum of 3 seconds if not exhausted. Causes the Exhausted Status Effect for 60/50/40 seconds.',
    character: 'Nea Karlsson',
    rarity: 'Rare',
    categories: ['Evasion', 'Haste'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/balanced-landing.png'
  },
  {
    id: 'better-together',
    name: 'Better Together',
    description: 'You seek justice and uncover the truth no matter what obstacle stands in your way. The Aura of the Generator you are currently repairing is revealed to all other Survivors located within 32 metres. If the Killer downs a Survivor while you are repairing a Generator, you see the Auras off all other Survivors for 8/9/10 seconds.',
    character: 'Nancy Wheeler',
    rarity: 'Rare',
    categories: ['Aura', 'Objective'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/better-together.png'
  },
  {
    id: 'boil-over',
    name: 'Boil Over',
    description: "You are a battler and do everything to escape a foe's grasp. Your struggling effects on the Killer are increased by 25/50/75 %. You obscure the Killer's ability to see Hook Auras within 10/12/14 metres.",
    character: 'Kate Denson',
    rarity: 'Very Rare',
    categories: ['Evasion'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/boil-over.png'
  },
  {
    id: 'bond',
    name: 'Bond',
    description: "Unlocks potential in one's Aura-reading ability. Allies' Auras are revealed to you when they are within a range of 20/28/36 metres.",
    character: 'Dwight Fairfield',
    rarity: 'Rare',
    categories: ['Aura'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/bond.png'
  },
  {
    id: 'borrowed-time',
    name: 'Borrowed Time',
    description: "You are fuelled with an unexpected energy when saving an Ally from a Hook within the Killer's Terror Radius. After unhooking a Survivor within the Killer's Terror Radius, for 15 seconds,any damage taken that would put the unhooked Survivor into the Dying State will instead apply the Deep Wound Status Effect. The Survivor has 10/15/20 seconds to mend themselves. If the unhooked Survivor takes any damage while affected by Deep Wound or if its timer ends, the unhooked Survivor is immediately put into the Dying State.",
    character: 'Bill Overbeck',
    rarity: 'Very Rare',
    categories: ['Healing'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/borrowed-time.png'
  },
  {
    id: 'botany-knowledge',
    name: 'Botany Knowledge',
    description: 'You transform plants found around The Campfire into tinctures that slow down bleeding. Healing Speed and Healing Item Efficiency is increased by 11/22/33 %.',
    character: 'Claudette Morel',
    rarity: 'Very Rare',
    categories: ['Healing'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/botany-knowledge.png'
  },
  {
    id: 'breakdown',
    name: 'Breakdown',
    description: "Any time you are unhooked or unhook yourself, the Hook breaks and the Killer's Aura is shown to you for 4/5/6 seconds.",
    character: 'Jeff Johansen',
    rarity: 'Rare',
    categories: ['Aura'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/breakdown.png'
  },
  {
    id: 'breakout',
    name: 'Breakout',
    description: "You kick into high gear when someone's in trouble, inspiring them to overcome any obstacle. When within 6 metres of a carried Survivor, you gain the Haste Status Effect, moving at an increased speed of 5/6/7 %. The carried Survivor's wiggle speed is increased by 20%.",
    character: 'Yui Kimura',
    rarity: 'Very Rare',
    categories: ['Evasion', 'Haste'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/breakout.png'
  },
  {
    id: 'buckle-up',
    name: 'Buckle Up',
    description: "Unlocks potential in one's Aura-reading ability. The recovery progress of dying Survivors can be determined by the intensity of their Auras IconHelp auras.png at a distance of up to 48 metres. When you heal a Survivor from the Dying State to Injured, both the healed Survivor and yourself see the Killer's Aura for a duration of 4/5/6 seconds.",
    character: 'Ash Williams',
    rarity: 'Very Rare',
    categories: ['Aura'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/buckle-up.png'
  },
  {
    id: 'calm-spirit',
    name: 'Calm Spirit',
    description: 'Animals seem to trust you as they often stay calm in your presence. Reduces chances of alerting Crows by 80/90/100 %. Your calm spirit can overcome the urge to scream.',
    character: 'Jake Park',
    rarity: 'Very Rare',
    categories: ['Stealth'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/calm-spirit.png'
  },
  {
    id: 'camaraderie',
    name: 'Camaraderie',
    description: 'Life has taught you the importance of friendship which has given you strength. While you are on the Hook in the Struggle Phase, Camaraderie activates. If another Survivor is within 16 metres of your Hook while Camaraderie is activated, the Struggle Phase timer is paused for 26/30/34 seconds.',
    character: 'Steve Harrington',
    rarity: 'Very Rare',
    categories: ['Evasion'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/camaraderie.png'
  },
  {
    id: 'dance-with-me',
    name: 'Dance With Me',
    description: 'When performing a fast vault or leaving a Locker in a sprint, you leave no Scratch Marks for 3 seconds. Dance With Me has a cool-down of 60/50/40 seconds.',
    character: 'Kate Denson',
    rarity: 'Very Rare',
    categories: ['Stealth'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/dance-with-me.png'
  },
  {
    id: 'dark-sense',
    name: 'Dark Sense',
    description: "Unlocks potential in one's Aura-reading abilities. Each time a Generator is completed, the Killer's Aura is revealed to you for 5 seconds. When the last Generator is powered, the Killer's Aura is revealed to you for 5/7/10 seconds.",
    character: 'All',
    rarity: 'Very Rare',
    categories: ['Aura'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/dark-sense.png'
  },
  {
    id: 'dead-hard',
    name: 'Dead Hard',
    description: 'Activate-able Perk. You can take a beating. When Injured, tap into your adrenaline bank and dash forward quickly to avoid damage. Press the Active Ability button while running to dash forward. During the dash, you avoid damage. Causes the Exhausted Status Effect for 60/50/40 seconds.',
    character: 'David King',
    rarity: 'Very Rare',
    categories: ['Evasion'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/dead-hard.png'
  },
  {
    id: 'decisive-strike',
    name: 'Decisive Strike',
    description: "Using whatever is at hand, you stab at your aggressor in an ultimate attempt to escape. After being unhooked or unhooking yourself, Decisive Strike will become active and usable for 40/50/60 seconds. While Decisive Strike is active, when grabbed by the Killer, succeed a Skill Check to automatically escape the Killer's grasp and stun them for 5 seconds. Succeeding or failing the Skill Check will disable Decisive Strike. Successfully stunning the Killer will result in you becoming the Obsession. Increases your chances of being the Obsession.",
    character: 'Laurie Strode',
    rarity: 'Very Rare',
    categories: ['Evasion'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/decisive-strike.png'
  },
  {
    id: 'deliverance',
    name: 'Deliverance',
    description: 'After performing a Safe Hook Rescue on another Survivor, the Perk activates. You now have a 100 % chance to unhook yourself during the escape attempt. A successful Deliverance from the Hook triggers the Broken Status Effect for 100/80/60 seconds.',
    character: 'Adam Francis',
    rarity: 'Very Rare',
    categories: ['Evasion'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/deliverance.png'
  },
  {
    id: 'detectives-hunch',
    name: "Detective's Hunch",
    description: "Unlocks potential in one's Aura-reading ability. After a Generator is completed, the Auras of Generators, Chests and Totems within 32/48/64 metres are revealed to you for 10 seconds. If you are holding a Map that can track Objectives, Generators revealed by Detective's Hunch are added to the Map.",
    character: 'David Tapp',
    rarity: 'Very Rare',
    categories: ['Aura', 'Objective'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/detectives-hunch.png'
  },
  {
    id: 'distortion',
    name: 'Distortion',
    description: 'You start the Trial with 3 Tokens. When your Aura would be shown to the Killer, the Perk activates and a Token is consumed. For the next 6/8/10 seconds while the Perk is activated, your Aura and Scratch Marks will not be shown to the Killer. Distortion does not activate when you are in the Dying State or affected by Traps.',
    character: 'Jeff Johansen',
    rarity: 'Very Rare',
    categories: ['Stealth'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/distortion.png'
  },
  {
    id: 'diversion',
    name: 'Diversion',
    description: 'Activate-able Perk. Standing within the Killer\'s Terror Radius while not in a Chase for 45 seconds activates Diversion. Once Diversion is activated, press the Active Ability button while crouched and motionless to throw a pebble, which creates a loud noise notification for the Killer at a distance of 10/15/20 metres. Diversion deactivates once it has been used.',
    character: 'Adam Francis',
    rarity: 'Rare',
    categories: ['Evasion'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/diversion.png'
  },
  {
    id: 'deja-vu',
    name: 'Deja Vu',
    description: "Unlocks potential in one's Aura-reading ability. Paranoia paired with your horror of failure helps prepare you from repeating the same mistakes. The Auras of 3 Generators in closest proximity to each other are revealed to you for 30/45/60 seconds, at the start of the Trial and each time a Generator is completed. If you are holding a Map that can track Objectives, Generators revealed by Deja Vu are added to the Map.",
    character: 'All',
    rarity: 'Very Rare',
    categories: ['Aura', 'Objective'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/deja-vu.png'
  },
  {
    id: 'empathy',
    name: 'Empathy',
    description: "Unlocks potential in one's Aura-reading ability. Dying or Injured Allies' Auras are revealed to you when within 64/96/128 metres of range. Empathy does not reveal Auras of Allies when they are in the Killer's direct contact.",
    character: 'Claudette Morel',
    rarity: 'Rare',
    categories: ['Aura'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/empathy.png'
  },
  {
    id: 'fixated',
    name: 'Fixated',
    description: "When you have a goal in mind, there's no turning back; better to ask forgiveness than permission. You can see your own Scratch Marks at all times. While uninjured, you walk 10/15/20 % faster.",
    character: 'Nancy Wheeler',
    rarity: 'Very Rare',
    categories: ['Evasion', 'Haste'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/fixated.png'
  },
  {
    id: 'flip-flop',
    name: 'Flip-Flop',
    description: "You have an uncanny ability to escape the inevitable. While in the Dying State, 50 % of your recovery progression is converted into wiggle progression when you are picked up by the Killer, up to a maximum of 40/45/50 % total wiggle progression.",
    character: 'Ash Williams',
    rarity: 'Rare',
    categories: ['Evasion'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/flip-flop.png'
  },
  {
    id: 'head-on',
    name: 'Head On',
    description: 'When your mind is set, there better be no one standing in your way. While standing in a Locker IconHelp lockers.png for 3 seconds, Head On activates. While Head On is activated, performing a rushed action to leave a Locker stuns the Killer for 3 seconds if they are standing within range. Causes the Exhausted Status Effect for 60/50/40 seconds if the stun was successful.',
    character: 'Jane Romero',
    rarity: 'Very Rare',
    categories: ['Evasion'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/head-on.png'
  },
  {
    id: 'hope',
    name: 'Hope',
    description: 'The growing odds of a successful escape fill you with hope and give you wings. As soon as the Exit Gates are powered, you gain a 5/6/7 % Haste Status Effect for 120 seconds.',
    character: 'All',
    rarity: 'Very Rare',
    categories: ['Evasion', 'Haste'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/hope.png'
  },
  {
    id: 'inner-strength',
    name: 'Inner Strength',
    description: 'You look inwards and trust your instincts when you feel lost and alone. Each time you cleanse a Totem, Inner Strength activates. While Inner Strength is activated, hiding inside a Locker for 10/9/8 seconds while Injured automatically heals you to the Healthy State. Inner Strength does not activate if you are afflicted by the Broken aStatus Effect.',
    character: 'Nancy Wheeler',
    rarity: 'Very Rare',
    categories: ['Healing'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/inner-strength.png'
  },
  {
    id: 'iron-will',
    name: 'Iron Will',
    description: 'You\'re able to concentrate and enter a meditative-like state to numb some pain. Grunts of Pain caused by injuries are reduced by 50/75/100 %.',
    character: 'Jake Park',
    rarity: 'Rare',
    categories: ['Stealth'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/iron-will.png'
  },
  {
    id: 'kindred',
    name: 'Kindred',
    description: "Unlocks potential in one's Aura-reading ability. While you are on the Hook, all Survivor Auras are revealed to all Survivors. If the Killer is within a range of 8/12/16 metres, their Aura is also revealed to all Survivors. While any other Survivor is on the Hook, all Survivor Auras are revealed to you. If the Killer is within a range of 8/12/16 metres, their Aura is also revealed to you.",
    character: 'All',
    rarity: 'Very Rare',
    categories: ['Aura'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/kindred.png'
  },
  {
    id: 'leader',
    name: 'Leader',
    description: 'You\'re able to organise a team to cooperate more efficiently. Increases the other Survivors\' Healing, Sabotage, Unhooking, Cleansing, Exit Gate Opening, and Chest Searching speeds by 15/20/25 % when they are within a range of 8 metres from you. Survivors can only be affected by one Leader effect at a time. This effect persists on other Survivors for 15 seconds after leaving Leader\'s range.',
    character: 'Dwight Fairfield',
    rarity: 'Very Rare',
    categories: ['Objective'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/leader.png'
  },
  {
    id: 'left-behind',
    name: 'Left Behind',
    description: "You'll get the job done... No matter the cost. When you are the last Survivor remaining in the Trial, the Aura of the Hatch is revealed to you within a range of 24/28/32 metres.",
    character: 'Bill Overbeck',
    rarity: 'Rare',
    categories: ['Aura'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/left-behind.png'
  },
  {
    id: 'lightweight',
    name: 'Lightweight',
    description: 'Your running is light and soft, making your tracks harder to follow. Scratch Marks stay visible 1/2/3 seconds less than normal.',
    character: 'All',
    rarity: 'Rare',
    categories: ['Stealth'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/lightweight.png'
  },
  {
    id: 'lithe',
    name: 'Lithe',
    description: 'After performing a rushed vault, break into a sprint at 150 % of your normal running speed for a maximum of 3 seconds. Causes the Exhausted Status Effect for 60/50/40 seconds.',
    character: 'Feng Min',
    rarity: 'Very Rare',
    categories: ['Evasion', 'Haste'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/lithe.png'
  },
  {
    id: 'lucky-break',
    name: 'Lucky Break',
    description: "You've had your share of scrapes and bruises, but luck's always on your side. Lucky Break activates any time you are injured. While Lucky Break is active, you won't leave trails of blood for a total of 120/150/180 seconds. Lucky Break becomes permanently deactivated for the remainder of the Trial once the total duration has elapsed.",
    character: 'Yui Kimura',
    rarity: 'Very Rare',
    categories: ['Stealth'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/lucky-break.png'
  },
  {
    id: 'mettle-of-man',
    name: 'Mettle Of Man',
    description: "Evil has a way of always finding you. After you earn 3 Protection Hit Score Events, Mettle of Man activates. Once activated, the next occasion that would put you into the Dying State from the Injured State is ignored. The next time you heal back to full health, your Aura will be revealed to the Killer when you are farther than 12/14/16 metres from the Killer. Mettle of Man will deactivate the next time you are put into the Dying State. Increases your chances of being the Obsession.",
    character: 'Ash Williams',
    rarity: 'Very Rare',
    categories: ['Evasion', 'Aura'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/mettle-of-man.png'
  },
  {
    id: 'no-mither',
    name: 'No Mither',
    description: 'You are affected by the Broken Status Effect for the duration of the Trial. Your thick blood coagulates practically instantly. You do not leave Pools of Blood. Grunts of Pain caused by injuries are reduced by 0/25/50 % at any time. Grants the ability to fully recover from the Dying State.',
    character: 'David King',
    rarity: 'Very Rare',
    categories: ['Objective'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/no-mither.png'
  },
  {
    id: 'no-one-left-behind',
    name: 'No One Left Behind',
    description: 'It is inconceivable to leave someone behind. Once at least one Exit Gates has been opened, triggering the Endgame Collapse, gain 50/75/100 % more Bloodpoints for actions in the Altruism Category and perform them 30/40/50 % quicker. The Auras of all other Survivors are revealed to you.',
    character: 'All',
    rarity: 'Very Rare',
    categories: ['Aura', 'Healing'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/no-one-left-behind.png'
  },
  {
    id: 'object-of-obsession',
    name: 'Object of Obsession',
    description: "A supernatural bond links you to the Killer. If you are looking in the Killer's direction, your link will reveal your Auras to each other. This effect applies only if you are outside of the Killer's Terror Radius. As the Killer's Obsession, this effect applies to a maximum range of 56/64/72 metres. Otherwise, it applies to a maximum range of 44/56/64 metres. Increases your chances of being the Obsession.",
    character: 'Laurie Strode',
    rarity: 'Very Rare',
    categories: ['Aura'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/object-of-obsession.png'
  },
  {
    id: 'open-handed',
    name: 'Open-Handed',
    description: "Strengthens the potential of you and your team's Aura-reading abilities. Increases Aura-reading ranges by 4/6/8 metres.",
    character: 'Ace Visconti',
    rarity: 'Very Rare',
    categories: ['Aura'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/open-handed.png'
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy',
    description: 'You have a knack for finding medicine. Searches through Chests are 40/60/80 % faster and the noises they cause along with their hearing distance are reduced by 8 metres. Pharmacy guarantees an Emergency Med-Kit on your first completed Chest Search.',
    character: 'Quentin',
    rarity: 'Very Rare',
    categories: ['Objective', 'Healing'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/pharmacy.png'
  },
  {
    id: 'plunderers-instinct',
    name: "Plunderer's Instinct",
    description: "Unlocks potential in one's Aura-reading ability. The Auras of Chests are revealed to you when standing within 16/24/32 metres of range. Grants a considerably better chance at finding an Item of a higher Rarity from Chests.",
    character: 'All',
    rarity: 'Rare',
    categories: ['Aura', 'Objective'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/plunderers-instinct.png'
  },
  {
    id: 'poised',
    name: 'Poised',
    description: 'Achieving goals boosts your confidence. After a Generator is completed, you leave no Scratch Marks for 6/8/10 seconds.',
    character: 'Jane Romero',
    rarity: 'Very Rare',
    categories: ['Stealth'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/poised.png'
  },
  {
    id: 'premonition',
    name: 'Premonition',
    description: 'You have the undeniable capability to sense danger. Get an auditory warning when looking in the direction of the Killer in a 45° cone within a range of 36 metres. Premonition has a cool-down of 60/45/30 seconds each time it activates. Premonition trumps any of the Killer\'s stealth abilities.',
    character: 'All',
    rarity: 'Very Rare',
    categories: ['Objective'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/premonition.png'
  },
  {
    id: 'prove-thyself',
    name: 'Prove Thyself',
    description: 'Increases Repair speed for all repairing Survivors by 10 % for each other Survivor within a range of 4 metres. Gain 50/75/100 % more Bloodpoints for cooperative Actions. Survivors can only be affected by one Prove Thyself effect at a time.',
    character: 'Dwight Fairfield',
    rarity: 'Very Rare',
    categories: ['Objective', 'Gen Speed'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/prove-thyself.png'
  },
  {
    id: 'quick-&-quiet',
    name: 'Quick & Quiet',
    description: 'You do not make as much noise as others when quickly vaulting over obstacles or hiding in Lockers. The vault and hide actions\' noise detection and audio range is reduced by 100 %. Quick & Quiet can only be triggered once every 30/25/20 seconds.',
    character: 'Meg Thomas',
    rarity: 'Rare',
    categories: ['Stealth'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/quick-&-quiet.png'
  },
  {
    id: 'resilience',
    name: 'Resilience',
    description: 'You are motivated in dire situations. Grants 3/6/9 % increased Healing, Sabotage, Unhooking, Vaulting, Cleansing, Exit Gate Opening, and Chest Searching speeds while Injured.',
    character: 'All',
    rarity: 'Very Rare',
    categories: ['Objective', 'Healing'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/resilience.png'
  },
  {
    id: 'saboteur',
    name: 'Saboteur',
    description: 'Unlocks the ability to sabotage without a Toolbox at 50 % of the normal Sabotage speed. Hooks and Bear Traps you sabotage stay broken for an extra 10/20/30 seconds.',
    character: 'Jake Park',
    rarity: 'Very Rare',
    categories: ['Objective'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/saboteur.png'
  },
  {
    id: 'second-wind',
    name: 'Second Wind',
    description: 'When you have healed other Survivors for the equivalent of one health state. Second Wind activates. If you are already afflicted by teh Broken status effect, Second Wind does not activate. While Second Wind is activated, the next time you are unhooked or you unhook yourself, you are affected by the Broken status effect. After a total duration of 30 seconds, Second Wind automatically heals you from injured to healthy. Second Wind deactivated once you become healthy or if you are put into the dying state before Second Wind successfully triggers. You lose the Broken status effect.',
    character: 'Steve Harrington',
    rarity: 'Very Rare',
    categories: ['Healing'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/second-wind.png'
  },
  {
    id: 'self-care',
    name: 'Self-Care',
    description: 'Unlocks the ability to heal yourself without a Med-Kit at 50 % of the normal Healing speed. Increases the efficiency of Med-Kit self-heal by 10/15/20 %.',
    character: 'Claudette Morel',
    rarity: 'Very Rare',
    categories: ['Healing'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/self-care.png'
  },
  {
    id: 'slippery-meat',
    name: 'Slippery Meat',
    description: 'You have developed an efficient way to get out of Bear Traps and Hooks. Grants up to 3 extra escape attempts on the Hook. The odds of freeing yourself from Bear Traps are increased by 15/20/25 %.',
    character: 'All',
    rarity: 'Rare',
    categories: ['Evasion'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/slippery-meat.png'
  },
  {
    id: 'small-game',
    name: 'Small Game',
    description: 'You have the undeniable capability to sense danger. Get an auditory warning when looking in the direction of Killer Traps and Totems in a 45° cone within a range of 8/10/12 metres. Small Game has a cool-down of 15/12/10 seconds each time it activates. Only works on Traps that are set by Killers.',
    character: 'All',
    rarity: 'Rare',
    categories: ['Objective'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/small-game.png'
  },
  {
    id: 'sole-survivor',
    name: 'Sole Survivor',
    description: "As more of your friends fall to the Killer, you become shrouded in isolation and the Killer's Aura-reading abilities towards you are disrupted. Your Aura cannot be read by the Killer within a maximum range of 20/22/24 metres for each killed or sacrificed Survivor. Increases your chances of being the Obsession.",
    character: 'Laurie Strode',
    rarity: 'Very Rare',
    categories: ['Stealth', 'Aura'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/sole-survivor.png'
  },
  {
    id: 'solidarity',
    name: 'Solidarity',
    description: 'Sharing painful experiences has the power to heal. While injured, healing a Survivor without using a Med-Kit also heals you at a 40/45/50 % conversion rate.',
    character: 'Jane Romero',
    rarity: 'Rare',
    categories: ['Healing'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/solidarity.png'
  },
  {
    id: 'spine-chill',
    name: 'Spine Chill',
    description: 'An unnatural tingle warns you of impending doom. Get notified when the Killer is looking directly in your direction and standing within a range of 36 metres. When Spine Chill is active, Skill Check trigger odds are increased by 10 % with success zones reduced by 10 % and your Repair, Heal and Sabotage speeds are increased by 2/4/6 %.',
    character: 'All',
    rarity: 'Very Rare',
    categories: ['Objective'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/spine-chill.png'
  },
  {
    id: 'sprint-burst',
    name: 'Sprint Burst',
    description: 'When starting to run, break into a sprint at 150 % of your normal running speed for a maximum of 3 seconds. Causes the Exhausted Status Effect for 60/50/40 seconds.',
    character: 'Meg Thomas',
    rarity: 'Very Rare',
    categories: ['Evasion', 'Haste'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/sprint-burst.png'
  },
  {
    id: 'stake-out',
    name: 'Stake Out',
    description: 'Getting close to the Killer fills you with determination. For each 15 seconds you are standing within the Killer\'s Terror Radius and are not in a Chase, you gain a Token up to a maximum of 2/3/4 Tokens. When Stake Out has at least 1 Token, Good Skill Checks are considered Great Skill Checks and consume 1 Token.',
    character: 'David Tapp',
    rarity: 'Very Rare',
    categories: ['Objective'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/stake-out.png'
  },
  {
    id: 'streetwise',
    name: 'Streetwise',
    description: 'Long nights out taught you to do a lot with what you\'ve got. Reduces Item Consumption rate by 15/20/25 % for you and Allies within a range of 8 metres. Once out of range, this effect persists for 15 seconds.',
    character: 'Nea Karlsson',
    rarity: 'Very Rare',
    categories: ['Objective'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/streetwise.png'
  },
  {
    id: 'technician',
    name: 'Technician',
    description: 'You are apt at handling machinery with the greatest care and precision. The noises caused by your Repairs and their hearing distance are reduced by 8 metres. On a failed Repair Skill Check, there is a 30/40/50 % chance that the Generator Explosion will be prevented.',
    character: 'Feng Min',
    rarity: 'Rare',
    categories: ['Stealth', 'Objective'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/technician.png'
  },
  {
    id: 'tenacity',
    name: 'Tenacity',
    description: 'There is nothing stopping you. Your ferocious tenacity in dire situations allows you to crawl 30/40/50 % faster and recover at the same time.',
    character: 'David Tapp',
    rarity: 'Rare',
    categories: ['Evasion'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/tenacity.png'
  },
  {
    id: 'this-is-not-happening',
    name: 'This Is Not Happening',
    description: 'You perform at your best when you are under extreme stress. Great Skill Check success zones when repairing, healing and sabotaging get 10/20/30 % bigger when you are Injured.',
    character: 'All',
    rarity: 'Very Rare',
    categories: ['Objective'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/this-is-not-happening.png'
  },
  {
    id: 'unbreakable',
    name: 'Unbreakable',
    description: 'Past battles have taught you a thing or two about survival. Grants the ability to fully recover from the Dying State once per Trial. Increases the Dying State Recovery speed by 25/30/35 %.',
    character: 'Bill Overbeck',
    rarity: 'Very Rare',
    categories: ['Evasion', 'Healing'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/unbreakable.png'
  },
  {
    id: 'up-the-ante',
    name: 'Up The Ante',
    description: 'All will be well in the end; you just know it. Your confidence strengthens the feeling of hope for those around you. For each other Survivor still alive, grant a 1/2/3 % Luck Bonus to all remaining Survivors.',
    character: 'Ace Visconti',
    rarity: 'Very Rare',
    categories: ['Objective'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/up-the-ante.png'
  },
  {
    id: 'urban-evasion',
    name: 'Urban Evasion',
    description: 'Years of evading the cops taught you a thing or two about stealth. Your Movement speed while crouching is increased by 90/95/100 %.',
    character: 'Nea Karlsson',
    rarity: 'Very Rare',
    categories: ['Stealth'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/urban-evasion.png'
  },
  {
    id: 'vigil',
    name: 'Vigil',
    description: 'You look over your friends even in dire situations. You and your Allies within a range of 8 metres recover from Exhaustion, Haemorrhage, Mangled, Hindered and Blindness Status Effects 10/15/20 % faster. Once out of range, this effect persists for 15 seconds.',
    character: 'Quentin',
    rarity: 'Very Rare',
    categories: ['Objective'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/vigil.png'
  },
  {
    id: 'wake-up',
    name: 'Wake Up!',
    description: "Unlocks potential in one's Aura-reading ability. Once all Generators are powered, Exit Gates are revealed to you when within a range of 128 metres. While opening the Exit Gates, reveal your Aura to other Survivors within a range of 128 metres. While Wake Up! is active, you open Exit Gates 5/10/15 % faster.",
    character: 'Quentin',
    rarity: 'Rare',
    categories: ['Aura', 'Objective'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/wake-up.png'
  },
  {
    id: 'well-make-it',
    name: "We'll Make It",
    description: 'Helping others heightens your morale. For each Survivor you rescue from a Hook, gain an additional 100 % speed increase to healing up others for 30/60/90 seconds. Cumulative Healing Speed bonuses cannot exceed 100 %.',
    character: 'All',
    rarity: 'Very Rare',
    categories: ['Healing'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/well-make-it.png'
  },
  {
    id: 'were-gonna-live-forever',
    name: "We're Gonna Live Forever",
    description: 'Your few friends deserve the best protection. Each time you perform a Safe Hook Rescue or take a Protection Hit for a Survivor, gain a stack-able 25 % Bonus to all Bloodpoint gains up to a maximum of 50/75/100 %. The Bonus Bloodpoints are only awarded post-Trial.',
    character: 'David King',
    rarity: 'Rare',
    categories: ['Objective'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/were-gonna-live-forever.png'
  },
  {
    id: 'windows-of-opportunity',
    name: 'Windows Of Opportunity',
    description: "Unlocks potential in one's Aura-reading ability. Auras of Pallets IconHelp pullDown.png and Vaults are revealed to you when within a range of 20 metres. Windows of Opportunity has a cool-down of 30/25/20 seconds when vaulting or dropping a Pallet during a Chase.",
    character: 'Kate Denson',
    rarity: 'Rare',
    categories: ['Aura', 'Evasion'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/windows-of-opportunity.png'
  },
  {
    id: 'blast-mine',
    name: 'Blast Mine',
    description: 'After repairing Generators for a total of 66%, Blast Mine activates. Press the Active Ability button while near a Generator to install a Trap which stays active for 35/40/45 seconds. The Generator is revealed to all Survivors by a yellow Aura. When the Killer damages the Generator, the Trap explodes, stunning them and blinding anyone nearby.',
    character: 'Jill Valentine',
    rarity: 'Very Rare',
    categories: ['Objective', 'Evasion'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/blast-mine.png'
  },
  {
    id: 'flashbang',
    name: 'Flashbang',
    description: 'After repairing Generators for a total of 70/60/50%, Flashbang activates. Enter a Locker while empty-handed and press the Active Ability button to craft a Flashbang Grenade.',
    character: 'Leon S. Kennedy',
    rarity: 'Very Rare',
    categories: ['Objective', 'Evasion'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/flashbang.png'
  },
  {
    id: 'circle-of-healing',
    name: 'Boon: Circle of Healing',
    description: 'Press and hold the Active Ability button near a Dull or Hex Totem to bless it and create a Boon Totem. Soft chimes ring out in a 24 metre radius. Any Survivors within the Boon Totem\'s range gain a 40/45/50% Healing speed bonus to healing others and can see the Auras of injured Survivors.',
    character: 'Mikaela Reid',
    rarity: 'Very Rare',
    categories: ['Healing', 'Aura'],
    side: 'Survivor',
    imageUrl: '/img/survivor-perks/circle-of-healing.png'
  }
];

export const allPerks = [...killerPerks, ...survivorPerks];
