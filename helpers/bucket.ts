export enum BucketName {
  WeaponDamage = 'WeaponDamage',
  MainStat = 'MainStat',
  Overpower = 'Overpower',
  Vulnerabillity = 'Vulnerabillity',
  Crit = 'Crit',
  AllDamage = 'AllDamage',
  OtherBonuses = 'OtherBonuses',
}

export enum StatName {
  WeaponDamage = 'WeaponDamage',
  MainStat = 'MainStat',
  CriticalStrikeChance = 'CriticalStrikeChance',
  CriticalStrikeDamage = 'CriticalStrikeDamage',
  CriticalStrikeDamageWithCore = 'CriticalStrikeDamageWithCore',
  CriticalStrikeDamageWithBone = 'CriticalStrikeDamageWithBone',
  OverpowerChance = 'OverpowerChance',
  OverpowerDamage = 'OverpowerDamage',
  VulnerabillityDamage = 'VulnerabillityDamage',
  AllDamage = 'AllDamage',
  DamageVsHealthy = 'DamageVsHealthy',
  DamageVsElites = 'DamageVsElites',
  DamageVsSlowed = 'DamageVsSlowed',
  DamageWhileHealthy = 'DamageWhileHealthy',
  DamageWithPhysical = 'DamageWithPhysical',
  DamageWithBone = 'DamageWithBone',
  DamageWithCore = 'DamageWithCore',
  DamageFromBloodOrb = 'DamageFromBloodOrb',
}

type BucketDictType = Record<BucketName, {
  stats: StatName[]
}>

export const BucketsDict: BucketDictType = {
  [BucketName.WeaponDamage]: {
    stats: [
      StatName.WeaponDamage,
    ],
  },
  [BucketName.MainStat]: {
    stats: [
      StatName.MainStat,
    ],
  },
  [BucketName.Crit]: {
    stats: [
      StatName.CriticalStrikeChance,
      StatName.CriticalStrikeDamage,
      StatName.CriticalStrikeDamageWithCore,
      StatName.CriticalStrikeDamageWithBone,
    ],
  },
  [BucketName.Overpower]: {
    stats: [
      StatName.OverpowerChance,
      StatName.OverpowerDamage,
    ],
  },
  [BucketName.Vulnerabillity]: {
    stats: [
      StatName.VulnerabillityDamage,
    ],
  },
  [BucketName.AllDamage]: {
    stats: [
      StatName.AllDamage,
    ],
  },
  [BucketName.OtherBonuses]: {
    stats: [
      StatName.DamageWhileHealthy,
      StatName.DamageWithPhysical,
      StatName.DamageWithBone,
      StatName.DamageWithCore,
      StatName.DamageFromBloodOrb,
      StatName.DamageVsElites,
      StatName.DamageVsHealthy,
      StatName.DamageVsSlowed,
    ]
  },
}