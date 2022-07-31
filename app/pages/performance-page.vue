<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <date-filter></date-filter>
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component />
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
import DateFilter from "../components/vue-components/DateFilter.vue";
export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
    DateFilter
  },
};
</script>
