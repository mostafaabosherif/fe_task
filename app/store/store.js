import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import axios from 'axios';
export const store = new Vuex.Store({
  state: {
    performanceData: [],
    dateInfos: { start: '', end: '' },
  },
  mutations: {
    setPerformanceData(state, payload) {
      state.performanceData = payload;
      const dateInfo = payload.map(item=> item.date_ms);
      //   const arrlenght = dateInfo.lenght;
      state.dateInfos = { start: dateInfo[0], end: dateInfo[dateInfo.length - 1] };
      //   state.dateInfos = { start: Math.min(...dateInfo), end: Math.min(...dateInfo) };
    //   console.log(dateInfo[dateInfo.length - 1]);
    },
    updateFilter(state, payload) {
      console.log(payload);
      state.performanceData = payload.data.filter(date=>{
        return date.date_ms >= payload.inputs.start && date.date_ms <= payload.inputs.end;
      });
    },
  },
  actions: {
    fetchPerforamceData: ({ commit }) => {
      axios.get('https://fe-task.getsandbox.com/performance')
        .then(res=>{
          commit('setPerformanceData', res.data);
        });
    },
    updateDateFilter: ({ commit }, inputs)=> {
      axios.get('https://fe-task.getsandbox.com/performance')
        .then(res=>{
          const data = res.data;
          commit('updateFilter', { data, inputs });
        });
    },
  },
  getters: {
    getStartEndDate: (state) => {
      return state.dateInfos;
    },
  },
});
