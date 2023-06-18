<script setup lang="ts">
import StatPanel from './stat-panel.vue'

import { name } from '~/package.json'
import {useDmgCalculator} from './use-dmg-calculator'

const LS_KEY_STATS = `${name}::stats`
const LS_KEY_STATS_COMPARE = `${name}::stats-compare`

const calculators = [
  useDmgCalculator(LS_KEY_STATS),
  useDmgCalculator(LS_KEY_STATS_COMPARE),
]

const diff = computed(() => {
  const value1 = calculators[0].result.value
  const value2 = calculators[1].result.value

  if (!value1 || (!value1 && !value2)) {
    return 0
  }

  return ((value2 - value1) / (value1 / 100))
})

const stringDiff = computed(() => {
  const fixedDiff = diff.value.toFixed(2)
  
  if (diff.value > 0) {
    return `+${fixedDiff}`
  }

  return fixedDiff
})

const diffColor = computed(() => {
  if (diff.value > 0) {
    return 'green'
  }

  if (diff.value < 0) {
    return 'red'
  }

  return 'inherit'
})

const whenClickMoveStatsButton = () => {
  calculators[1].setStats(calculators[0].stats.value)
}

defineExpose({
  calculators,
  stringDiff,
  diffColor,
})

</script>

<template>
  <div class="panels-container">
    <StatPanel
      :calculator="calculators[0]"
    />
    <v-btn
      variant="outlined"
      class="move-button"
      :onclick="whenClickMoveStatsButton"
    >
      <v-icon
        title="Move stats from left side"
        icon="mdi-arrow-right"
      />
    </v-btn>
    <StatPanel
      :calculator="calculators[1]"
    />
    <div class="diff-container">Diff: <span :style="`color: ${diffColor};`">{{ stringDiff }}</span> % </div>
  </div>
</template>

<style>
.panels-container {
  height: 100%;
  overflow: auto;
  display: flex;
  gap: 50px;
}

.move-button {
  align-self: center;
}

.diff-container {
  font-size: 20px;
  align-self: center;
}
</style>