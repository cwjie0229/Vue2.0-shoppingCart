<template>
  <div id="shoppingCar">
   <div class="a_link">
     <router-link to="/shoppingCart">购物车</router-link>
     <router-link to="/addressp">地址列表</router-link>
   </div>

    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data(){
      return {}
    },
    components: {

    }
  }
</script>
<style scoped>
  #shoppingCar .a_link{
    text-align: center;
    padding:0 30px;
    background:#000;
    border-radius: 2px;
    border-shadow: 5px 5px 5px #eee; ;
  }
#shoppingCar .a_link a{
  display:inline-block;
  width:150px;
  height:50px;
  line-height:50px;
  font-size:24px;
  text-align: center;
  color:#fff;
}
  #shoppingCar .a_link a:hover{
    color:red;
  }
</style>
