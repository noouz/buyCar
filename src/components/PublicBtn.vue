<!-- 底下的確認&連結按鈕 當初老師有做所以跟著做但好像不是那麼必要?-? -->
<script>
export default {
  props:{
    content:{
      type: String,
    },
    link:{
      type: String,
      default:'/',
    },
    style:{
      type: String,
    },
    type:{
      type: String,
    }
  },
}
</script>

<template>
    <RouterLink :to="link">
        <button class="p-2 rounded-lg text-white" :class="style" :type="type" >{{ content }}</button>
    </RouterLink>
</template>