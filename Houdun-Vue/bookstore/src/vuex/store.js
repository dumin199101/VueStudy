import Vue from 'vue'
import Vuex from 'vuex'
import users from '@/vuex/users'
import news from '@/vuex/news'

Vue.use(Vuex)

/*export default new Vuex.Store({
    state:{
       news:[
         {id:1,title:"Hello Vue"},
         {id:2,title:"Hello JS"},
       ]
    },
    getters:{
       getAllNews(state){
          return state.news;
       }
    }
})*/

export default new Vuex.Store({
   modules:{
      users,
      news
   }
});
