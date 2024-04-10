<script>
import ImageCard from '@/components/ImageCard.vue';
import ListCard from '@/components/ListCard.vue';

export default{
  components:{
    ImageCard,
    ListCard,
  },
  data(){
    return{
      switchList:true,
    }
  },
}
</script>

<template>
  <main>
    <div class="p-2 text-3xl">商品列表</div>
    <div class="flex gap-3 justify-end px-3 mb-3">
      <i :class="{ 'bg-blue-300' : !switchList }" class="border border-gray-300 rounded-sm p-1 fa-solid fa-table-cells-large" @click="switchList = !switchList"></i>
      <i :class="{ 'bg-blue-300' : switchList }" class="border border-gray-300 rounded-sm p-1 fa-solid fa-list" @click="switchList = !switchList"></i>
    </div>   
    <ListCard :switch='switchList'></ListCard>
  </main>
</template>
