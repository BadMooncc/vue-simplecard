<template>
    <div>
      <asyncCom></asyncCom>
      <!-- <script src="./asset/js/jquery.min.js"></script> -->
    </div>
</template>
<script>

  export default{
    components:{
      asyncCom:function(resolve){
        require(['./child'],resolve);
      }
    }
  }
</script>