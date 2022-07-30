<template>
  <div class="t-filter">
        <input type="text" class="t-filter__input" v-model="searchValue" @input="searchChange">
        <button class="t-filter__btn" @click="searchClear">Clear</button>
  </div>
</template>
<script>
export default {
  name: 'TabelFilter',
  components: {},
  data() {
    return {
        searchValue:''
    };
  },
  computed: {},
  methods: {
      searchChange(){
        this.$emit('searchupdate',this.searchValue); 
     },
      searchClear() {
      this.searchValue = "";
      this.$emit("searchupdate", "");
    },
  },
  mounted() {
    // console.log('tersttert');
  },
};
</script>
<style lang="scss">
.t-filter {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
   &__input{
    padding:5px 10px;
    border-radius: 3px;
    border: 2px solid  #666464;
    outline: none;
    
    &:focus{
      border: 2px solid #b8b5b5;
      color: black; 
      outline: none;
    }
   }
   &__btn{
    background-color: #0099ff;
    padding:5px 10px;
    color:white;
    align-self: stretch;
    border-radius: 3px;
    transition: all .3s ease;
    &:hover{
      background-color: #4b6f86;
    }
   }
  
}
</style>
