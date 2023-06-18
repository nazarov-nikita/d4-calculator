<script setup lang="ts">
import StatPanel from './stat-panel.vue'

import { name } from '~/package.json'
import { jsonParse } from '~/helpers';
import {StatsType, useDmgCalculator} from './use-dmg-calculator'

const LS_KEY_STATS = `${name}::stats`
const LS_KEY_STATS_COMPARE = `${name}::stats-compare`

const calculators = [
  useDmgCalculator(LS_KEY_STATS),
  useDmgCalculator(LS_KEY_STATS_COMPARE),
]

const diff = computed(() => {
  const value1 = +calculators[0].result.value
  const value2 = +calculators[1].result.value
  const result = ((value2 - value1) / (value1 / 100)).toFixed(2)
  if (result.startsWith('-')) {
    return result
  }

  if (result === '0.00') {
    return result
  }

  return `+${result}`
})

const diffColor = computed(() => {
  if (diff.value.startsWith('+')) {
    return 'green'
  }

  if (diff.value.startsWith('-')) {
    return 'red'
  }

  return 'inherit'
})

const whenClickMoveStatsButton = () => {
  calculators[1].setStats(calculators[0].stats.value)
}

defineExpose({
  calculators,
  diff,
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
    <div class="diff-container">Diff: <span :style="`color: ${diffColor};`">{{ diff }}</span> % </div>
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