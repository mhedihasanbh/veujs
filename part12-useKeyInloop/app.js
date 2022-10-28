var apps=Vue.createApp({
    data (){
        return{
         skills:[
             {name:'HTML',experience:5},
             {name:'Javascript',experience:10},
             {name:'Php',experience:9},
             {name:'jquery',experience:10},
         ],
            newskill:{name:"",experience:0}
        };
    },
    methods:{
        addskill(){
          this.skills.push(this.newskill);
          this.newskill={};
        },
        removeSkill(i){
            this.skills.splice(i,1);
        }
    }
});
apps.mount('#app');