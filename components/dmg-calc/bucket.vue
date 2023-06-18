<script setup>
import { BucketsDict, BucketName } from '../../helpers/bucket'

const props = defineProps({
  bucketName: BucketName,
  stats: Object,
  setStatsByKey: Function,
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
        :label="`${stat}${[BucketName.WeaponDamage, BucketName.MainStat].includes(stat) ? '' : ', %'}`"
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