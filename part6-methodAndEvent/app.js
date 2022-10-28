var apps=Vue.createApp({
    data (){
        return{
            count:0
        }
    },
    methods:{
        increase(amount){
          this.count=this.count+amount;
        },
        decrease(amount){
            this.count=this.count-amount;
        },
        country(co){
            console.log(co);
        }
    }
});
apps.mount('#app');