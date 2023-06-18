import { mergeProps, unref, useSSRContext, ref, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

var BucketName = /* @__PURE__ */ ((BucketName2) => {
  BucketName2["WeaponDamage"] = "WeaponDamage";
  BucketName2["MainStat"] = "MainStat";
  BucketName2["Overpower"] = "Overpower";
  BucketName2["Vulnerabillity"] = "Vulnerabillity";
  BucketName2["Crit"] = "Crit";
  BucketName2["While"] = "While";
  BucketName2["With"] = "With";
  BucketName2["From"] = "From";
  BucketName2["Vs"] = "Vs";
  BucketName2["AllDamage"] = "AllDamage";
  return BucketName2;
})(BucketName || {});
var StatName = /* @__PURE__ */ ((StatName2) => {
  StatName2["WeaponDamage"] = "WeaponDamage";
  StatName2["MainStat"] = "MainStat";
  StatName2["CriticalStrikeChance"] = "CriticalStrikeChance";
  StatName2["CriticalStrikeDamage"] = "CriticalStrikeDamage";
  StatName2["CriticalStrikeDamageWithCore"] = "CriticalStrikeDamageWithCore";
  StatName2["CriticalStrikeDamageWithBone"] = "CriticalStrikeDamageWithBone";
  StatName2["OverpowerChance"] = "OverpowerChance";
  StatName2["OverpowerDamage"] = "OverpowerDamage";
  StatName2["VulnerabillityDamage"] = "VulnerabillityDamage";
  StatName2["AllDamage"] = "AllDamage";
  StatName2["DamageVsHealthy"] = "DamageVsHealthy";
  StatName2["DamageVsElites"] = "DamageVsElites";
  StatName2["DamageVsSlowed"] = "DamageVsSlowed";
  StatName2["DamageWhileHealthy"] = "DamageWhileHealthy";
  StatName2["DamageWithPhysical"] = "DamageWithPhysical";
  StatName2["DamageWithBone"] = "DamageWithBone";
  StatName2["DamageFromBloodOrb"] = "DamageFromBloodOrb";
  return StatName2;
})(StatName || {});
const BucketsDict = {
  [
    "WeaponDamage"
    /* WeaponDamage */
  ]: {
    stats: [
      "WeaponDamage"
      /* WeaponDamage */
    ]
  },
  [
    "MainStat"
    /* MainStat */
  ]: {
    stats: [
      "MainStat"
      /* MainStat */
    ]
  },
  [
    "Crit"
    /* Crit */
  ]: {
    stats: [
      "CriticalStrikeChance",
      "CriticalStrikeDamage",
      "CriticalStrikeDamageWithCore",
      "CriticalStrikeDamageWithBone"
      /* CriticalStrikeDamageWithBone */
    ]
  },
  [
    "Overpower"
    /* Overpower */
  ]: {
    stats: [
      "OverpowerChance",
      "OverpowerDamage"
      /* OverpowerDamage */
    ]
  },
  [
    "Vulnerabillity"
    /* Vulnerabillity */
  ]: {
    stats: [
      "VulnerabillityDamage"
      /* VulnerabillityDamage */
    ]
  },
  [
    "While"
    /* While */
  ]: {
    stats: [
      "DamageWhileHealthy"
      /* DamageWhileHealthy */
    ]
  },
  [
    "With"
    /* With */
  ]: {
    stats: [
      "DamageWithPhysical",
      "DamageWithBone"
      /* DamageWithBone */
    ]
  },
  [
    "From"
    /* From */
  ]: {
    stats: [
      "DamageFromBloodOrb"
      /* DamageFromBloodOrb */
    ]
  },
  [
    "Vs"
    /* Vs */
  ]: {
    stats: [
      "DamageVsElites",
      "DamageVsHealthy",
      "DamageVsSlowed"
      /* DamageVsSlowed */
    ]
  },
  [
    "AllDamage"
    /* AllDamage */
  ]: {
    stats: [
      "AllDamage"
      /* AllDamage */
    ]
  }
};
const _sfc_main$2 = {
  __name: "bucket",
  __ssrInlineRender: true,
  props: {
    bucketName: BucketName,
    stats: Object,
    setStatsByKey: Function
  },
  setup(__props, { expose: __expose }) {
    __expose({
      BucketsDict
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_text_field = resolveComponent("v-text-field");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div>${ssrInterpolate(__props.bucketName)}</div><div class="stats"><!--[-->`);
      ssrRenderList(unref(BucketsDict)[__props.bucketName].stats, (stat, idx) => {
        _push(ssrRenderComponent(_component_v_text_field, {
          key: idx,
          label: `${stat}${[unref(BucketName).WeaponDamage, unref(BucketName).MainStat].includes(stat) ? "" : ", %"}`,
          "model-value": __props.stats[stat],
          "onUpdate:modelValue": (value) => __props.setStatsByKey(stat, value),
          variant: "outlined"
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dmg-calc/bucket.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const DmgCalcBucket = _sfc_main$2;
const objectKeys = (object) => Object.keys(object);
const initStats = () => objectKeys(StatName).reduce((acc, statName) => {
  return {
    ...acc,
    [statName]: "0"
  };
}, {});
const useDmgCalculator = () => {
  const stats = ref(initStats());
  const setStats = (value = initStats()) => {
    stats.value = value;
  };
  const setStatsByKey = (statName, value) => {
    if (isNaN(+value)) {
      return;
    }
    setStats({
      ...stats.value,
      [statName]: value
    });
    calculate();
  };
  const result = ref("0");
  const calculate = () => {
    const weaponDamage = +(stats.value[StatName.WeaponDamage] || 0);
    const mainStat = +(stats.value[StatName.MainStat] || 0) / 10 + 100;
    const crit = BucketsDict[BucketName.Crit].stats.reduce((acc, stat) => {
      return stat !== StatName.CriticalStrikeChance ? acc + +(stats.value[stat] || 0) : acc;
    }, 0) / 100 * +(stats.value[StatName.CriticalStrikeChance] || 0) + 100;
    const overpower = +(stats.value[StatName.OverpowerDamage] || 0) / 100 * +(stats.value[StatName.OverpowerChance] || 0) + 100;
    const vulnerabillity = +(stats.value[StatName.VulnerabillityDamage] || 0) + 100;
    const whileDmg = BucketsDict[BucketName.While].stats.reduce((acc, stat) => acc + +(stats.value[stat] || 0), 0) + 100;
    const withDmg = BucketsDict[BucketName.With].stats.reduce((acc, stat) => acc + +(stats.value[stat] || 0), 0) + 100;
    const fromDmg = BucketsDict[BucketName.From].stats.reduce((acc, stat) => acc + +(stats.value[stat] || 0), 0) + 100;
    const vsDmg = BucketsDict[BucketName.Vs].stats.reduce((acc, stat) => acc + +(stats.value[stat] || 0), 0) + 100;
    const allDamage = BucketsDict[BucketName.AllDamage].stats.reduce((acc, stat) => acc + +(stats.value[stat] || 0), 0) + 100;
    result.value = (weaponDamage * (mainStat / 100) * (crit / 100) * (overpower / 100) * (vulnerabillity / 100) * (whileDmg / 100) * (withDmg / 100) * (fromDmg / 100) * (vsDmg / 100) * (allDamage / 100)).toFixed(2);
  };
  return {
    stats,
    setStats,
    setStatsByKey,
    calculate,
    result
  };
};
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const {
      stats,
      setStatsByKey,
      result
    } = useDmgCalculator();
    __expose({
      BucketName,
      DmgCalcBucket,
      stats,
      setStatsByKey,
      result
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form" }, _attrs))}><div class="list"><!--[-->`);
      ssrRenderList(unref(BucketName), (bucketName, idx) => {
        _push(ssrRenderComponent(DmgCalcBucket, {
          key: idx,
          "bucket-name": bucketName,
          stats: unref(stats),
          "set-stats-by-key": unref(setStatsByKey)
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="result">=\xA0${ssrInterpolate(unref(result))}</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dmg-calc/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "root" }, _attrs))} data-v-73e7ae40><div class="calcs-container" data-v-73e7ae40>`);
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-73e7ae40"]]);

export { index as default };
//# sourceMappingURL=index-da18e9b1.mjs.map
