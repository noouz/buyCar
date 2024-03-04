<script>
export default{
  props:{
    valueData:{
      type:String,
      default:'',
    },
    content:{
      type:String,
      default:'',
    },
    type:{
      type:String,
      default:'text',
    },
    required:Boolean,
  },
  emits:['update'],
  data(){
    return{
      newValue:this.valueData,
    };
  },
  watch:{
    newValue:{
      handler(newValue){
        this.$emit('update',newValue)
      }
    }
  }
};
</script>

<template>
  <label for=type>
    <span>{{content}}</span>
    <span v-show="required" class="text-rose-700">*</span>
    <input v-model="newValue" :type=type :name=type :id=type required >
  </label>
</template>

<style scoped>
label{
  @apply font-medium text-lg w-full
}
input{
  @apply w-full border border-gray-300 pl-2 text-lg py-1 rounded-md my-3 focus:outline-gray-500 active:outline-gray-500
}
</style>