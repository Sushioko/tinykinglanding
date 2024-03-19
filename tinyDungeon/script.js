const monsterDiv = document.getElementById("monster");
const playerDiv = document.getElementById("player");

//Monster constructor
class Monster {
  constructor(monsterStats) {
    this.name = monsterStats.name || "No name";
    this.attack = monsterStats.attack || 1;
    this.defense = monsterStats.defense || 1;
    this.health = monsterStats.health || 10;
    this.maxHealth = this.health;
  }
}

const monsterList = [];//array to store multiple monsters;
let currentMonsterIndex = 0;//store current monster index we are fighting;

//create monster data
const monster_1_data = {name:"Soul", attack:1, defense:1, health: 10};
const monster_2_data = {name:"Civilian", attack:2, defense:2, health: 15};
const monster_3_data = {name:"Soldier", attack:3, defense:4, health: 25};
const monster_4_data = {name:"Knight", attack:7, defense:5, health: 40};
const monster_5_data = {name:"Blood Knight", attack:10, defense:10, health: 60};
const monster_6_data = {name:"Abyssal Knight", attack:16, defense:13, health: 100};
const monster_7_data = {name:"Blessed Knight", attack:20, defense:15, health: 150};
const monster_8_data = {name:"Holy Knight", attack:25, defense:20, health: 200};
const monster_9_data = {name:"Sacred Knight", attack:32, defense:26, health: 220};
const monster_10_data = {name:"Ancient Knight", attack:36, defense:32, health: 245};
const monster_11_data = {name:"Forbidden Knight", attack:40, defense:38, health: 270};
const monster_12_data = {name:"Magic Knight", attack:50, defense:42, health: 300};
const monster_13_data = {name:"Godly Knight", attack:58, defense:52, health: 320};
const monster_14_data = {name:"Queen", attack:64, defense:58, health: 355};
const monster_15_data = {name:"King", attack:72, defense:66, health: 385};
const monster_16_data = {name:"Demigod", attack:78, defense:74, health: 414};
const monster_17_data = {name:"God", attack:86, defense:82, health: 456};
const monster_18_data = {name:"Skeleton Soul", attack:98, defense:92, health: 522};
const monster_19_data = {name:"Skeleton", attack:106, defense:98, health: 545};
const monster_20_data = {name:"Skeleton Solider", attack:112, defense:102, health: 576};
const monster_21_data = {name:"Skeleton Knight", attack:136, defense:114, health: 606};
const monster_22_data = {name:"Skeleton Blood Knight", attack:158, defense:122, health: 634};
const monster_23_data = {name:"Skeleton Abyssal Knight", attack:182, defense:136, health: 662};
const monster_24_data = {name:"Skeleton Blessed Knight", attack:202, defense:172, health: 700};
const monster_25_data = {name:"Skeleton Holy Knight", attack:228, defense:194, health: 726};
const monster_26_data = {name:"Skeleton Sacred Knight", attack:242, defense:214, health: 752};
const monster_27_data = {name:"Skeleton Ancient Knight", attack:268, defense:236, health: 772};
const monster_28_data = {name:"Skeleton Forbidden Knight", attack:288, defense:252, health: 798};
const monster_29_data = {name:"Skeleton Magic Knight", attack:304, defense:268, health: 818};
const monster_30_data = {name:"Skeleton Godly Knight", attack:320, defense:288, health: 842};
const monster_31_data = {name:"Skeleton Queen", attack:334, defense:302, health: 866};
const monster_32_data = {name:"Skeleton King", attack:358, defense:318, health: 884};
const monster_33_data = {name:"Skeleton Demigod", attack:372, defense:330, health: 902};
const monster_34_data = {name:"Skeleton God", attack:398, defense:352, health: 930};
const monster_35_data = {name:"Zombie Soul", attack:430, defense:378, health: 962};
const monster_36_data = {name:"Zombie", attack:458, defense:398, health: 1014};
const monster_37_data = {name:"Zombie Soldier", attack:488, defense:420, health: 1052};
const monster_38_data = {name:"Zombie Knight", attack:512, defense:448, health: 1080};
const monster_39_data = {name:"Zombie Blood Knight", attack:530, defense:482, health: 1124};
const monster_40_data = {name:"Zombie Abyssal Knight", attack:572, defense:510, health: 1172};
const monster_41_data = {name:"Zombie Blessed Knight", attack:602, defense:536, health: 1202};
const monster_42_data = {name:"Zombie Holy Knight", attack:630, defense:572, health: 1236};
const monster_43_data = {name:"Zombie Sacred Knight", attack:672, defense:604, health: 1268};
const monster_44_data = {name:"Zombie Ancient Knight", attack:712, defense:630, health: 1294};
const monster_45_data = {name:"Zombie Forbidden Knight", attack:736, defense:652, health: 1322};
const monster_46_data = {name:"Zombie Magic Knight", attack:782, defense:690, health: 1374};
const monster_47_data = {name:"Zombie Godly Knight", attack:838, defense:726, health: 1418};
const monster_48_data = {name:"Zombie Queen", attack:872, defense:752, health: 1456};
const monster_49_data = {name:"Zombie King", attack:904, defense:796, health: 1484};
const monster_50_data = {name:"Zombie Demigod", attack:932, defense:826, health: 1524};
const monster_51_data = {name:"Zombie God", attack:988, defense:852, health: 1558};
const monster_52_data = {name:"Demon Soul", attack:1024, defense:888, health: 1592};
const monster_53_data = {name:"Demon", attack:1052, defense:928, health: 1638};
const monster_54_data = {name:"Demon Soldier", attack:1092, defense:956, health: 1682};
const monster_55_data = {name:"Demon Knight", attack:1138, defense:1012, health: 1920};
const monster_56_data = {name:"Demon Blood Knight", attack:1182, defense:1044, health: 1984};
const monster_57_data = {name:"Demon Abyssal Knight", attack:1238, defense:1072, health: 2026};
const monster_58_data = {name:"Demon Blessed Knight", attack:1272, defense:1098, health: 2052};
const monster_59_data = {name:"Demon Holy Knight", attack:1314, defense:1132, health: 2084};
const monster_60_data = {name:"Demon Sacred Knight", attack:1352, defense:1176, health: 2126};
const monster_61_data = {name:"Demon Ancient Knight", attack:1388, defense:1220, health: 2158};
const monster_62_data = {name:"Demon Forbidden Knight", attack:1436, defense:1264, health: 2192};
const monster_63_data = {name:"Demon Magic Knight", attack:1478, defense:1292, health: 2228};
const monster_64_data = {name:"Demon Godly Knight", attack:1518, defense:1336, health: 2264};
const monster_65_data = {name:"Demon Queen", attack:1546, defense:1382, health: 2292};
const monster_66_data = {name:"Demon King", attack:1582, defense:1426, health: 2348};
const monster_67_data = {name:"Demon Demigod", attack:1628, defense:1462, health: 2386};
const monster_68_data = {name:"Demon God", attack:1652, defense:1494, health: 2438};
const monster_69_data = {name:"Dragon", attack:2000, defense:2000, health: 3000};
const monster_70_data = {name:"Skeleton Dragon", attack:2500, defense:2500, health: 3500};
const monster_71_data = {name:"Zombie Dragon", attack:3000, defense:3000, health: 4000};
const monster_72_data = {name:"Demon Dragon", attack:4000, defense:4000, health: 5000};
const monster_73_data = {name:"Treasure Dragon", attack:8000, defense:8000, health: 10000};

//create monster const
const monster_1 = new Monster(monster_1_data);
const monster_2 = new Monster(monster_2_data);
const monster_3 = new Monster(monster_3_data);
const monster_4 = new Monster(monster_4_data);
const monster_5 = new Monster(monster_5_data);
const monster_6 = new Monster(monster_6_data);
const monster_7 = new Monster(monster_7_data);
const monster_8 = new Monster(monster_8_data);
const monster_9 = new Monster(monster_9_data);
const monster_10 = new Monster(monster_10_data);
const monster_11 = new Monster(monster_11_data);
const monster_12 = new Monster(monster_12_data);
const monster_13 = new Monster(monster_13_data);
const monster_14 = new Monster(monster_14_data);
const monster_15 = new Monster(monster_15_data);
const monster_16 = new Monster(monster_16_data);
const monster_17 = new Monster(monster_17_data);
const monster_18 = new Monster(monster_18_data);
const monster_19 = new Monster(monster_19_data);
const monster_20 = new Monster(monster_20_data);
const monster_21 = new Monster(monster_21_data);
const monster_22 = new Monster(monster_22_data);
const monster_23 = new Monster(monster_23_data);
const monster_24 = new Monster(monster_24_data);
const monster_25 = new Monster(monster_25_data);
const monster_26 = new Monster(monster_26_data);
const monster_27 = new Monster(monster_27_data);
const monster_28 = new Monster(monster_28_data);
const monster_29 = new Monster(monster_29_data);
const monster_30 = new Monster(monster_30_data);
const monster_31 = new Monster(monster_31_data);
const monster_32 = new Monster(monster_32_data);
const monster_33 = new Monster(monster_33_data);
const monster_34 = new Monster(monster_34_data);
const monster_35 = new Monster(monster_35_data);
const monster_36 = new Monster(monster_36_data);
const monster_37 = new Monster(monster_37_data);
const monster_38 = new Monster(monster_38_data);
const monster_39 = new Monster(monster_39_data);
const monster_40 = new Monster(monster_40_data);
const monster_41 = new Monster(monster_41_data);
const monster_42 = new Monster(monster_42_data);
const monster_43 = new Monster(monster_43_data);
const monster_44 = new Monster(monster_44_data);
const monster_45 = new Monster(monster_45_data);
const monster_46 = new Monster(monster_46_data);
const monster_47 = new Monster(monster_47_data);
const monster_48 = new Monster(monster_48_data);
const monster_49 = new Monster(monster_49_data);
const monster_50 = new Monster(monster_50_data);
const monster_51 = new Monster(monster_51_data);
const monster_52 = new Monster(monster_52_data);
const monster_53 = new Monster(monster_53_data);
const monster_54 = new Monster(monster_54_data);
const monster_55 = new Monster(monster_55_data);
const monster_56 = new Monster(monster_56_data);
const monster_57 = new Monster(monster_57_data);
const monster_58 = new Monster(monster_58_data);
const monster_59 = new Monster(monster_59_data);
const monster_60 = new Monster(monster_60_data);
const monster_61 = new Monster(monster_61_data);
const monster_62 = new Monster(monster_62_data);
const monster_63 = new Monster(monster_63_data);
const monster_64 = new Monster(monster_64_data);
const monster_65 = new Monster(monster_65_data);
const monster_66 = new Monster(monster_66_data);
const monster_67 = new Monster(monster_67_data);
const monster_68 = new Monster(monster_68_data);
const monster_69 = new Monster(monster_69_data);
const monster_70 = new Monster(monster_70_data);
const monster_71 = new Monster(monster_71_data);
const monster_72 = new Monster(monster_72_data);
const monster_73 = new Monster(monster_73_data);

//push monsters to the array

monsterList.push(monster_1, monster_2, monster_3, monster_4, monster_5, monster_6, monster_7, monster_8, monster_9, monster_10, monster_11, monster_12, monster_13, monster_14, monster_15, monster_16, monster_17, monster_18, monster_19, monster_20, monster_21, monster_22, monster_23, monster_24, monster_25, monster_26, monster_27, monster_28, monster_29, monster_30, monster_31, monster_32, monster_33, monster_34, monster_35, monster_36, monster_37, monster_38, monster_39, monster_40, monster_41, monster_42, monster_43, monster_44, monster_45, monster_46, monster_47, monster_48, monster_49, monster_50, monster_51, monster_52, monster_53, monster_54, monster_55, monster_56, monster_57, monster_58, monster_59, monster_60, monster_61, monster_62, monster_63, monster_64, monster_65, monster_66, monster_67, monster_68, monster_69, monster_70, monster_71, monster_72, monster_73);

//Create player

const player = {
  name: " TBD",
  level: 1,
  experience: 0,
  maxExperience: 10,
  attack: 2,
  defense: 1,
  health: 10,
  maxHealth: 10
}

//Game logic

function changeMonster(value){
  const changeByValue = currentMonsterIndex + value;
  if(changeByValue < 0 || changeByValue > monsterList.length - 1) return;//do nothing
  
  currentMonsterIndex = changeByValue;
  updateHtml();
}
function attackMonster(){
  const monster = monsterList[currentMonsterIndex];
  let playerDamage = player.attack - monster.defense;
  let monsterDamage = monster.attack - player.defense;
  
  if(playerDamage <= 0) playerDamage = 1;//always deal at least 1 damage even to high defense
  if(monsterDamage <= 0) monsterDamage = 1;//same as above
  
  monster.health -= playerDamage;
  if(monster.health <= 0){
    rewardPlayer(monster);
    reviveEntity(monster);
  }else{
    player.health -= monsterDamage;
  }
  if(player.health <= 0){
    displayDeathMessage();
    reviveEntity(player);
    reviveEntity(monster);
  }
  updateHtml();
}

function reviveEntity(entity){
  entity.health = entity.maxHealth;
}

function rewardPlayer(monster) {
  const experienceGain = Math.floor(monster.attack + monster.defense + (monster.maxHealth/2));
  player.experience += experienceGain;
  
  // >while< is another type of loop
  while(player.experience > player.maxExperience){
    player.level += 1;
    player.experience -= player.maxExperience;
    player.attack += Math.floor((Math.random() * 3) + 1);
    player.defense += Math.floor((Math.random() * 3) + 1);
    player.maxHealth += Math.floor((Math.random() * 8) + 1);
    player.health = player.maxHealth;
    player.maxExperience = Math.floor(player.maxExperience * 1.1);
  }
}

function updateHtml() {
  let playerInfo = "";
  let monsterInfo = "";
  const currentMonster = monsterList[currentMonsterIndex];
  
  playerInfo += `<p>level: ${player.level} - Name:${player.name} - exp: ${player.experience}/${player.maxExperience}</p>`;
  playerInfo += `<p>Health: ${player.health}/${player.maxHealth}</p>`
  playerInfo += `<p>Attack: ${player.attack} - Defense: ${player.defense}</p>`
  
  monsterInfo += `<h2>${currentMonster.name}</h2>`;
  monsterInfo += `<p>Health: ${currentMonster.health}/${currentMonster.maxHealth}</p>`
  monsterInfo += `<p>Attack:${currentMonster.attack} - Defense:${currentMonster.defense}</p>`
  
  playerDiv.innerHTML = playerInfo;
  monsterDiv.innerHTML = monsterInfo;
}


function displayDeathMessage() {
  let spanId = document.getElementById("deathMessage");
  
  spanId.innerHTML = "Your soul has faded";
  setTimeout(function(){
    spanId.innerHTML = "";
  }, 3000)
}

updateHtml();
