<script setup lang="ts">
import { PropType } from 'nuxt/dist/app/compat/capi';
import { BucketsDict, BucketName, StatName } from '../../helpers/bucket'
import { StatsType } from './use-dmg-calculator';

interface Props {
  bucketName: BucketName
  stats: StatsType
  setStatsByKey: (key: StatName, value: string) => void
}

defineProps({
  bucketName: {
    type: null as unknown as PropType<Props['bucketName']>,
    required: true,
  },
  stats: {
    type: null as unknown as PropType<Props['stats']>,
    required: true,
  },
  setStatsByKey: {
    type: null as unknown as PropType<Props['setStatsByKey']>,
    required: true,
  },
})

defineExpose({
  BucketsDict,
})
</script>

<template>
  <div class="container">
    <div>{{ bucketName }}</div>
    <div class="stats">
      <v-text-field
        v-for="(stat, idx) in BucketsDict[bucketName].stats"
        :key="idx"
        :label="`${stat}${[BucketName.WeaponDamage, BucketName.MainStat].includes(bucketName) ? '' : ', %'}`"
        :model-value="stats[stat]"
        @update:modelValue="(value) => setStatsByKey(stat, value)"
        variant="outlined"
    />
    </div>
  </div>
</template>

<style>
  .stats {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
</style>