const characters = [
  {
    id: 1,
    name: 'Mariel',
    img:
      'https://static.miraheze.org/anotheredenwiki/c/c0/101000031_rank5_base.png',
    rarity: 5,
    element: 'None',
    attackType: 'Blunt',
    weaponType: 'Staff',
    accessoryType: 'Ring',
    lightShadowType: 'Light',
    personalities: ['Cat lover', 'Clergy', 'Staff']
  },
  {
    id: 2,
    name: 'Mighty',
    img:
      'https://static.miraheze.org/anotheredenwiki/a/a8/101000041_rank5_base.png',
    rarity: 5,
    element: 'Water',
    attackType: 'Blunt',
    weaponType: 'Staff',
    accessoryType: 'Ring',
    lightShadowType: 'Light',
    personalities: ['IDA School', 'Staff']
  },
  {
    id: 3,
    name: 'Toova',
    img:
      'https://static.miraheze.org/anotheredenwiki/5/58/101000051_rank5_base.png',
    rarity: 5,
    element: 'Earth',
    attackType: 'Blunt',
    weaponType: 'Staff',
    accessoryType: 'Ring',
    lightShadowType: 'Shadow',
    personalities: ['Staff']
  },
  {
    id: 4,
    name: 'Gariyu',
    img:
      'https://static.miraheze.org/anotheredenwiki/e/e4/101000081_rank5_base.png',
    rarity: 5,
    element: 'Fire',
    attackType: 'Blunt',
    weaponType: 'Staff',
    accessoryType: 'Ring',
    lightShadowType: 'Shadow',
    personalities: ['Staff']
  },
  {
    id: 5,
    name: 'Yuna',
    img:
      'https://static.miraheze.org/anotheredenwiki/6/63/101000121_rank5_base.png',
    rarity: 5,
    element: 'None',
    attackType: 'Blunt',
    weaponType: 'Staff',
    accessoryType: 'Ring',
    lightShadowType: 'Light',
    personalities: ['Eastern', 'Staff']
  },
  {
    id: 6,
    name: 'Levia',
    img:
      'https://static.miraheze.org/anotheredenwiki/d/d1/101000201_rank5_base.png',
    rarity: 5,
    element: 'Water',
    attackType: 'Blunt',
    weaponType: 'Staff',
    accessoryType: 'Ring',
    lightShadowType: 'Light',
    personalities: ['Dragon Palace', 'Staff']
  },
  {
    id: 7,
    name: 'Myrus',
    img:
      'https://static.miraheze.org/anotheredenwiki/a/ab/101000221_rank5_base.png',
    rarity: 5,
    element: 'Earth',
    attackType: 'Blunt',
    weaponType: 'Staff',
    accessoryType: 'Ring',
    lightShadowType: 'Light',
    personalities: ['Beast', 'Staff']
  },
  {
    id: 8,
    name: 'Saki (AS)',
    img:
      'https://static.miraheze.org/anotheredenwiki/5/5a/101000231_s2_rank5_base.png',
    rarity: 5,
    element: 'Water',
    attackType: 'Blunt',
    weaponType: 'Staff',
    accessoryType: 'Ring',
    lightShadowType: 'Light',
    personalities: ['IDA School', 'Staff']
  },
  {
    id: 9,
    name: 'Anabel',
    img:
      'https://static.miraheze.org/anotheredenwiki/6/6a/101010011_rank5_base.png',
    rarity: 5,
    element: 'Water',
    attackType: 'Slash',
    weaponType: 'Sword',
    accessoryType: 'Bangle',
    lightShadowType: 'Light',
    personalities: ['Miglance Palace', 'Sweet Tooth', 'Sword']
  },
  {
    id: 10,
    name: 'Miyu',
    img:
      'https://static.miraheze.org/anotheredenwiki/5/57/101010041_rank5_base.png',
    rarity: 5,
    element: 'Fire',
    attackType: 'Slash',
    weaponType: 'Sword',
    accessoryType: 'Bangle',
    lightShadowType: 'Light',
    personalities: ['Miglance Palace', 'Sword']
  },
  {
    id: 11,
    name: 'Shanie',
    img:
      'https://static.miraheze.org/anotheredenwiki/3/3c/101010081_rank5_base.png',
    rarity: 5,
    element: 'Water',
    attackType: 'Slash',
    weaponType: 'Sword',
    accessoryType: 'Bangle',
    lightShadowType: 'Light',
    personalities: ['Sword']
  },
  {
    id: 12,
    name: 'Azami',
    img:
      'https://static.miraheze.org/anotheredenwiki/6/6d/101020011_rank5_base.png',
    rarity: 5,
    element: 'Wind',
    attackType: 'Slash',
    weaponType: 'Katana',
    accessoryType: 'Ring',
    lightShadowType: 'Light',
    personalities: ['Eastern', 'Sweet Tooth', 'Katana']
  },
  {
    id: 13,
    name: 'Shion',
    img:
      'https://static.miraheze.org/anotheredenwiki/b/bf/101020031_rank5_base.png',
    rarity: 5,
    element: 'Fire',
    attackType: 'Slash',
    weaponType: 'Katana',
    accessoryType: 'Ring',
    lightShadowType: 'Light',
    personalities: ['Eastern', 'Cat Lover', 'Katana']
  },
  {
    id: 14,
    name: 'Isuka',
    img:
      'https://static.miraheze.org/anotheredenwiki/9/9c/101020071_rank5_base.png',
    rarity: 5,
    element: 'Wind',
    attackType: 'Slash',
    weaponType: 'Katana',
    accessoryType: 'Ring',
    lightShadowType: 'Light',
    personalities: ['IDA School', 'Katana']
  },
  {
    id: 15,
    name: 'Tsukiha',
    img:
      'https://static.miraheze.org/anotheredenwiki/3/38/101020081_rank5_base.png',
    rarity: 5,
    element: 'Fire',
    attackType: 'Slash',
    weaponType: 'Katana',
    accessoryType: 'Ring',
    lightShadowType: 'Shadow',
    personalities: ['Eastern', 'Katana']
  },
  {
    id: 16,
    name: 'Nagi',
    img:
      'https://static.miraheze.org/anotheredenwiki/8/8d/101030071_rank5_base.png',
    rarity: 5,
    element: 'Water',
    attackType: 'Slash',
    weaponType: 'Ax',
    accessoryType: 'Necklace',
    lightShadowType: 'Shadow',
    personalities: ['Dragon Palace', 'Ax']
  },
  {
    id: 17,
    name: 'Suzette',
    img:
      'https://static.miraheze.org/anotheredenwiki/7/74/101040031_rank5_base.png',
    rarity: 5,
    element: 'Wind',
    attackType: 'Piercing',
    weaponType: 'Lance',
    accessoryType: 'Bangle',
    lightShadowType: 'Light',
    personalities: ['Sweet Tooth', 'Lance']
  },
  {
    id: 18,
    name: 'Cetie',
    img:
      'https://static.miraheze.org/anotheredenwiki/4/44/101040091_rank5_base.png',
    rarity: 5,
    element: 'Fire',
    attackType: 'Piercing',
    weaponType: 'Lance',
    accessoryType: 'Bangle',
    lightShadowType: 'Light',
    personalities: ['Lance']
  },
  {
    id: 19,
    name: 'Bertrand',
    img:
      'https://static.miraheze.org/anotheredenwiki/9/97/101040101_rank5_base.png',
    rarity: 5,
    element: 'Earth',
    attackType: 'Piercing',
    weaponType: 'Lance',
    accessoryType: 'Bangle',
    lightShadowType: 'Light',
    personalities: ['Miglance Palace', 'Lance']
  },
  {
    id: 20,
    name: 'Laclair',
    img:
      'https://static.miraheze.org/anotheredenwiki/4/4e/101050061_rank5_base.png',
    rarity: 5,
    element: 'Water',
    attackType: 'Piercing',
    weaponType: 'Bow',
    accessoryType: 'Ring',
    lightShadowType: 'Light',
    personalities: ['Bow']
  },
  // {
  //   id: 21,
  //   name: 'Claude',
  //   img: 'https://anothereden.miraheze.org/wiki/File:101050081_rank5_base.png',
  //   rarity: 5,
  //   element: 'Wind',
  //   attackType: 'Piercing',
  //   weaponType: 'Bow',
  //   accessoryType: 'Ring',
  //   lightShadowType: 'Light',
  //   personalities: ['IDA School', 'Bow']
  // },
  {
    id: 22,
    name: 'Lokido',
    img:
      'https://static.miraheze.org/anotheredenwiki/4/4f/101060031_rank5_base.png',
    rarity: 5,
    element: 'Earth',
    attackType: 'Blunt',
    weaponType: 'Fists',
    accessoryType: 'Necklace',
    lightShadowType: 'Light',
    personalities: ['Fists']
  },
  {
    id: 23,
    name: 'Cerrine',
    img:
      'https://static.miraheze.org/anotheredenwiki/f/f3/101060081_rank5_base.png',
    rarity: 5,
    element: 'Earth',
    attackType: 'Piercing',
    weaponType: 'Fists',
    accessoryType: 'Necklace',
    lightShadowType: 'Light',
    personalities: ['Glasses', 'IDA School', 'Fists']
  },
  {
    id: 24,
    name: 'Felmina',
    img:
      'https://static.miraheze.org/anotheredenwiki/6/61/101060091_rank5_base.png',
    rarity: 5,
    element: 'Wind',
    attackType: 'Blunt',
    weaponType: 'Fists',
    accessoryType: 'Necklace',
    lightShadowType: 'Shadow',
    personalities: ['Miglance Palace', 'Fists']
  },
  {
    id: 25,
    name: 'Ewan',
    img:
      'https://static.miraheze.org/anotheredenwiki/f/f6/101070051_rank5_base.png',
    rarity: 5,
    element: 'Fire',
    attackType: 'Blunt',
    weaponType: 'Hammer',
    accessoryType: 'Bangle',
    lightShadowType: 'Shadow',
    personalities: ['Glasses', 'Sweeth Tooth', 'Miner', 'Hammer']
  },
  {
    id: 26,
    name: 'Melina',
    img:
      'https://static.miraheze.org/anotheredenwiki/f/f4/101070061_rank5_base.png',
    rarity: 5,
    element: 'Water',
    attackType: 'Blunt',
    weaponType: 'Hammer',
    accessoryType: 'Bangle',
    lightShadowType: 'Shadow',
    personalities: ['Sweeth Tooth', 'Clergy', 'Miner', 'Hammer']
  },
  {
    id: 27,
    name: 'Aldo',
    img:
      'https://static.miraheze.org/anotheredenwiki/7/71/101910011_rank5_base.png',
    rarity: 5,
    element: 'Fire',
    attackType: 'Slash',
    weaponType: 'Sword',
    accessoryType: 'Bangle',
    lightShadowType: 'Light',
    personalities: ['Protagonist', 'Guiding Light', 'Forager', 'Sword']
  }
];

export default characters;
