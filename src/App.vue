<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav class="fixed bg-slate-950 w-full py-2 px-1 flex justify-between">
    <RouterLink to="/" class="router">Shopping</RouterLink>
    <RouterLink to="/shoppingcar" class="router">
      <div class="shopping-cart">
        <div class="tip">0</div>
        <img src="@\assets\icon\shopping_cart.svg" alt="購物車" class="hover:opacity-80">
      </div>
    </RouterLink>
  </nav>
  <main class="pt-[70px] px-5">
    <RouterView />
  </main>
</template>

<style scoped>
*{
  @apply font-NotoSans
}
.router{
  @apply mr-5 text-white hover:text-gray-200 p-2
}
.tip{
  @apply rounded-full bg-rose-800 text-white text-center w-5 h-5 text-sm absolute top-2 right-7 z-10
}
</style>
