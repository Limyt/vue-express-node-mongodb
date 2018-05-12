<template>
  <div id="app">
    <!-- <h3 class="title">{{title}}</h3> -->
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  data:function(){
    return {
      title:"学习vue+mongod+nodejs构建项目"
    }
  }
}
</script>

<style>
ul,li{
  list-style: none;
}
a{
  text-decoration:none;
}
button,input{
  outline:none;
}
ul, menu, dir {
    display: block;
    list-style-type: disc;
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  /* margin-top: 60px; */
}
.title{
  margin-bottom: 50px;
  text-align: center;
}
</style>
