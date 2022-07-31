import Vue from 'vue';
import 'ngVue';
import 'ngVue/build/plugins.js';
import { store } from './store/store';
import PerformancePageComponent from './pages/performance-page.vue';
import PerformanceChartComponent from './components/vue-components/performance-chart.vue';
import TabelFilter from './components/vue-components/TabelFilter.vue';
import DateFilter from './components/vue-components/DateFilter.vue';

angular.module('appModule', [
  'ui.router',
  'ngVue',
  'ngVue.plugins',
]).config(($ngVueProvider) => {
  $ngVueProvider.setRootVueInstanceProps({
    store: store,
  });
});

angular.module('appModule').directive('vPerformancePage', (createVueComponent) => {
  return createVueComponent(Vue.component('performancePageComponent', PerformancePageComponent));
});

angular.module('appModule').directive('vPerformanceChart', (createVueComponent) => {
  return createVueComponent(Vue.component('performanceChartComponent', PerformanceChartComponent));
});
angular.module('appModule').directive('vTabelFilter', (createVueComponent) => {
  return createVueComponent(Vue.component('TabelFilter', TabelFilter));
});
angular.module('appModule').directive('vDateFilter', (createVueComponent) => {
  return createVueComponent(Vue.component('DateFilter', DateFilter));
});
