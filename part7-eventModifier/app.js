var apps=Vue.createApp({
    data (){
        return{
            name:""
        };
    },
    methods:{
      handlekeyup(e){
          this.name=e.target.value;
      }
    }
});
apps.mount('#app');