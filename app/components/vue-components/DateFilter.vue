<template>
  <div class="d-filter">
    <div class="d-filter__group">
       <label for="start date">Start</label>
        <input type="date"  @change="updateChart"  :min="getDateInfo.startDate" :max="getDateInfo.endDate" v-model="date.start" > 
    </div>
    <div class="d-filter__group">
       <label for="start date">End</label>
        <input type="date" @change="updateChart" :min="getDateInfo.startDate" :max="getDateInfo.endDate"   v-model="date.end"> 
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabelFilter',
  components: {},
  data() {
    return {
         date:{start:null,end:null},
    };
  },
  computed: {
    getDateInfo(){
      const dateInfo = this.$store.state.dateInfos;
      //  console.log(dateInfo.start);
      //  console.log(dateInfo.end);
      const {start} = dateInfo;
      const {end} = dateInfo;
      const  startDate = this.formateDate(start);
      const  endDate = this.formateDate(end);
      this.date = {start:startDate,end:endDate};
      return {
        startDate,endDate
      }
    }
  },
  methods: {
      formateDate(date_ms){
      const date = new Date(date_ms)
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate(); 
      return `${year}-${month < 10 ? '0' + (month+1) :(month+1)}-${day< 10 ?  '0' + day: day}`
      },
      foramteInMs(inputDate){
      const date = new Date(inputDate);
      return date.getTime();
    },
    updateChart(){ 
      const DateNewValues={start:this.foramteInMs(this.date.start),end:this.foramteInMs(this.date.end)};
      console.log(DateNewValues);
      this.$store.dispatch('updateDateFilter', DateNewValues);
    }
  },
  mounted() { 
  },
};
</script>
<style lang="scss">
 .d-filter{
  display: flex;
  justify-content: center;
  align-items: center;
  gap:20px;
    &__group{
       display: flex;
      justify-content: center;
      align-items: center;
      gap:10px;
    }
 }
</style>
