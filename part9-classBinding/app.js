var apps=Vue.createApp({
    data (){
        return{
           activeClass:"green"
        };
    },
    methods:{
        setclass(className){
         this.activeClass=className;
        }

    }
});
apps.mount('#app');