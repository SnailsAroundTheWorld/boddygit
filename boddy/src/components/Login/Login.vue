<template>
    <div class="content_div">

         <a href="/#/Land">登录</a>
         <!-- <a href="/#/reg">注册</a> -->
        <router-view>
        </router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
body{
    background:url(../../img/timg.jpg) no-repeat;
    background-position: center 0;
    background-size: cover;
    -webkit-background-size: cover;
    
}
.content_div{
    width: 500px;
    height: 500px;
    background: rgba(255, 255, 255,.9);
    position: absolute;
    top: 50%;
    margin-top: -250px;
    left: 50%;
    margin-left: -250px;
    border-radius:5px;
    
}
a{
    text-decoration: none;
}
/* a:visited{color: red;} */
</style>

