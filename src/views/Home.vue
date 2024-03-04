<script>
import OriginCard from '@/components/OriginCard.vue';
import ListCard from '@/components/ListCard.vue';

export default{
  components:{
    OriginCard,
    ListCard,
  },
  data(){
    return{
      origin:true,
    }
  },
}
</script>

<template>
  <h1 class=" text-black text-3xl font-bold">商品列表</h1>
  <div class="flex w-full justify-end gap-x-1">
    <img src="@/assets/icon/list-one.png" alt="圖示排列" class="list-img" @click="origin=true" v-if="!origin">
    <img src="@/assets/icon/list-one-active.png" alt="圖示排列" class="list-img" @click="origin=true" v-else>
    <img src="@/assets/icon/list-two.png" alt="清單排列" class="list-img" @click="origin=false" v-if="origin">
    <img src="@/assets/icon/list-two-active.png" alt="清單排列" class="list-img" @click="origin=false" v-else>
  </div>
  <main class="main">
    <OriginCard :cardType="origin"></OriginCard>
    
  </main>
</template>

<style scoped>
/* 全局樣式 */
*::before,*::after{
  @apply box-border 
}
ul,li{
  @apply list-none
}
/* 共用樣式 */
.title-set{
  @apply text-center break-keep
}
/* 主要樣式 */
.list-img{
  @apply cursor-pointer
}
.main{
  @apply flex w-full h-max py-5 justify-center 
}

</style>
