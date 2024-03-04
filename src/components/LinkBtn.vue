<script>
// import { RouterLink, RouterView } from 'vue-router';
export default{
  props:{
    content:{
      type: String,
    },
    link:{
      type: String,
      default:'/'
    },
    style:{
      type: String,
      default:'back'
    },
  },

}
</script>
<template>
  <RouterLink :to=link>
    <button type="button" :class=style>
      <slot></slot>
    </button>
  </RouterLink>

</template>

<style scoped>
.action{
  @apply flex w-full justify-between text-white mt-3
}
.back{
  @apply bg-yellow-800 rounded-md px-4 py-2 hover:opacity-90
}
.confirm{
  @apply bg-sky-900 rounded-md px-4 py-2 hover:opacity-90
}
</style>