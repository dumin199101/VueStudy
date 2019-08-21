<template>
  <div id="app">
    <router-link to="/">首页</router-link>
    <router-link to="/hdcms">hdcms</router-link>
    <h1>这是hdvue组件</h1>
    <div>
       <ul>
          <li v-for="v in news">{{v.title}}</li>
       </ul>
    </div>
    <div>
      <ul>
        <li v-for="v in users">{{v.name}}</li>
      </ul>
    </div>
    <h4>Hello</h4>
    <home></home>
    <router-view></router-view>
  </div>
</template>
<script>
    import Home from './org/Home'
    export default {
        name: 'hd',
        components:{Home},
        //计算属性
        computed:{
           news(){
               // return this.$store.state.news;
               return this.$store.getters.getAllNews;
           },
           users(){
               return this.$store.getters.getAllUsers;
           }
        }
    }
</script>

<style scoped>
   h4{
     color:red;
   }
   h1{
     color:green;
   }
</style>
