<script setup>
import { BucketName } from '../../helpers/bucket'
import DmgCalcBucket from './bucket.vue'
import { useDmgCalculator } from './useDmgCalculator'

const {
  stats,
  setStatsByKey,
  result,
} = useDmgCalculator()

defineExpose({
  BucketName,
  DmgCalcBucket,
  stats,
  setStatsByKey,
  result
})
</script>

<template>
  <div class="form">
    <div class="list">
      <DmgCalcBucket
        v-for="(bucketName, idx) in BucketName"
        :key="idx"
        :bucket-name="bucketName"
        :stats="stats"
        :set-stats-by-key="setStatsByKey"
      />
    </div>
    <div class="result">=&nbsp;{{ result }}</div>
  </div>
</template>

<style>
.form {
  display: flex;
  gap: 20px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  overflow: auto;
}

.result {
  font-size: 20px;
  align-self: center;
}
</style>