let news = {
   state:{
      news:[
        {id:1,title:"Hello World"},
        {id:2,title:"Hello American"},
      ]
   },
    getters: {
      getAllNews(state){
        return state.news;
      }
    }


}


export default news;
