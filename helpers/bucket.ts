export enum BucketName {
  WeaponDamage = 'WeaponDamage',
  MainStat = 'MainStat',
  Overpower = 'Overpower',
  Vulnerabillity = 'Vulnerabillity',
  Crit = 'Crit',
  While = 'While',
  With = 'With',
  From = 'From',
  Vs = 'Vs',
  AllDamage = 'AllDamage',
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
  [BucketName.While]: {
    stats: [
      StatName.DamageWhileHealthy,
    ],
  },
  [BucketName.With]: {
    stats: [
      StatName.DamageWithPhysical,
      StatName.DamageWithBone,
    ],
  },
  [BucketName.From]: {
    stats: [
      StatName.DamageFromBloodOrb,
    ],
  },
  [BucketName.Vs]: {
    stats: [
      StatName.DamageVsElites,
      StatName.DamageVsHealthy,
      StatName.DamageVsSlowed,
    ],
  },
  [BucketName.AllDamage]: {
    stats: [
      StatName.AllDamage,
    ],
  },
}