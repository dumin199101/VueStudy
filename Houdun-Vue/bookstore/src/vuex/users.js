let users = {
   state:{
       users:[
         {id:1,name:'Xiaoli',age:22},
         {id:2,name:'sunming',age:23},
         {id:3,name:'zhangliang',age:24},
       ]
   },
   getters:{
      getAllUsers(state){
        return state.users;
      }
   }
}

export default users;
