<template>
    
    <div>
        <div v-bind:title="title">鼠标移入</div>

        <img :src="url" />
        <hr>
        <div v-html="h"></div>
        <hr>
        <div v-bind:class="{'red':flag,'blue':flag2}">被控制的div</div>
        <hr>
        <ul>
            <li v-for="(i,k) in list" :class="{'red':k==0,'blue':k==1}">{{i}}</li>
        </ul>
        <hr>
        <div :style="{width:boxWidth+'px'}" class="blue">样式绑定</div>

    </div>
</template>

<script>
export default {
   data(){
       return {
           title:'鼠标瞄上去看一下',
           url : 'https://www.ityinig.com/themes/itying/images/logo.gif',
           h:'<h2>我是h2</h2>',
           flag:true,
           flag2:true,
           list:[111,222,333,444],
           boxWidth:500

       }
   } 
}
</script>

<style>
    .red {
        color:red;
    }
    .blue {
        background-color: blue;
    }
</style>

