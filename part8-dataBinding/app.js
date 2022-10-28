var apps=Vue.createApp({
    data (){
        return{
            name:"",
            result:"",
        };
    },
    methods:{
        // handleInput(e){
        //     // this.name=e.target.value;
        // },
     double(){
       this.result=this.name * 2;
     },
    square(){
        this.result=this.name*this.name;
    } ,
    reset(){
     this.name="";
     this.result="";
    } ,
        add(){
         this.result=this.name+10;
        }

    }
});
apps.mount('#app');