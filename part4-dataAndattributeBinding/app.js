var apps=Vue.createApp({
    data (){
        return{
          personalinfo:{
              name:'sajib bhuyan',
              companywebsite:'https://getbootstrap.com/docs/5.2/forms/select/'
          },
          html:'<a href="https://www.youtube.com/watch?v=DOk8XctGswM">please visit our website</a>'
        };
    }
});
apps.mount('#app');