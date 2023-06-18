import { BucketName, BucketsDict, StatName } from '~/helpers/bucket'
import { jsonParse, objectKeys } from '~~/helpers'

export type StatsType = Partial<Record<StatName, string>>

const getInitStats = (lsKey: string) => {
  const lsStatsString = window.localStorage.getItem(lsKey)

  if (lsStatsString !== null) {
    const stats = jsonParse<StatsType>(lsStatsString)

    if (stats) {
      return stats
    }
  }
  
  return objectKeys(StatName).reduce<StatsType>((acc, statName) => {
    return {
      ...acc,
      [statName]: '0',
    }
  }, {})
}

export const useDmgCalculator = (lsKey: string) => {
  const initStats = getInitStats(lsKey)
  const stats = ref(initStats)
  const setStats = (value: StatsType) => {
    stats.value = value

    calculate()
    window.localStorage.setItem(lsKey, JSON.stringify(stats.value))
  }
  
  const setStatsByKey = (
    statName: StatName,
    value: string,
  ) => {
    if (isNaN(+value)) {
      return
    }

    setStats({
      ...stats.value,
      [statName]: value
    })
  }

  const result = ref(0)

  const calculate = () => {
    const weaponDamage = +(stats.value[StatName.WeaponDamage] || 0)
    const mainStat = +(stats.value[StatName.MainStat] || 0) / 10 + 100
    console.log(mainStat)
    const crit = BucketsDict[BucketName.Crit].stats.reduce((acc, stat) => {
      return (
        stat !== StatName.CriticalStrikeChance
          ? acc + +(stats.value[stat] || 0)
          : acc
      )
    }, 0) / 100 * +(stats.value[StatName.CriticalStrikeChance] || 0) + 100
    const overpower = +(stats.value[StatName.OverpowerDamage] || 0) / 100 * +(stats.value[StatName.OverpowerChance] || 0) + 100
    const vulnerabillity = +(stats.value[StatName.VulnerabillityDamage] || 0) + 100
    const allDamage = BucketsDict[BucketName.AllDamage].stats.reduce((acc, stat) => (
      acc + +(stats.value[stat] || 0)
    ), 0) + 100
    const otherBonuses = BucketsDict[BucketName.OtherBonuses].stats.reduce((acc, stat) => (
      acc + +(stats.value[stat] || 0)
    ), 0) + 100


    result.value = (
      weaponDamage
      * (mainStat / 100)
      * (crit / 100)
      * (overpower / 100)
      * (vulnerabillity / 100)
      * (allDamage / 100)
      * (otherBonuses / 100)
    )
  }

  calculate()

  return {
    stats,
    setStats,
    setStatsByKey,
    calculate,
    result,
  }
}
