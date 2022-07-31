<template>
  <div class="c-chart__container">
    <v-chart ref="chart" :option="chartOptions" />
  </div>
</template>

<script>
import moment from "moment";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
]);

export default {
  name: "PerformanceChartComponent",

  components: {
    VChart,
  },

  data() {
    return { 
      test:''
    };
  },
  created(){
     this.$store.dispatch('fetchPerforamceData');
     
  },
  computed: {
     
    chartData(){
      // console.log(this.$store.state.performanceData);
      return this.$store.state.performanceData;
    },
     
    initOptions() {
      return {
        width: "auto",
        height: "300px",
      };
    },
    chartOptions() {
      return {
        title: {
          text: "Team Performance Index",
          left: "center",
        },
        tooltip: {
          backgroundColor: "#143774",
          trigger: "axis",
          transitionDuration: 0,
          alwaysShowContent: true,
          hideDelay: 0,
          textStyle: {
            color: "#fff",
          },
        },
        grid: {
          left: "30px",
          right: "12px",
          bottom: "2px",
          top: "6px",
          containLabel: true,
        },
        xAxis: {
          name:"dfsadsf",
          type: "category",
          showGrid: false,
          data: this.xAxisData, 
          axisLine: {
            show: true,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            fontSize: 11,
          },
        },
        yAxis: {
          axisLabel: { show: true },
          axisTick: { show: true },
          splitLine: { show: true },
        },
        
        visualMap:  {
          top: 50,
          right: 0,
          pieces: [
            {
              gte: 0,
              lt: 50,
              color: "#df424c",
              title:'dsfsdafdsfsa' 
            },
            {
              gte: 50,
              lt: 80,
              color: "#efbf30",
              title:'dsfsdafdsfsa' 
            },
            {
              gte: 80,
              lt: 100,
              color: "#479447",
              title:'dsfsdafdsfsa' 
            },
          ],
        },
        series: [
          {
            name: `Team Performance Index : % `,
            data:this.yAxisData,
            label:'dsfdsfads',
            type: "line",
            symbol: "circle",
            symbolSize: 2,
            cursor: "default",
            lineStyle: {
              width: 2,
            },
          },
        ],
      };
    },
    xAxisData() {
      return this.chartData.map((item) => this.formatDate(item.date_ms));
    },

    yAxisData() {
      return this.chartData.map((item) => +item.performance * 100);
    },
  },

  methods: {
    formatDate(dateInMs) {
      return moment(dateInMs).format("DD MMM YYYY");
    },
  },
};
</script>
