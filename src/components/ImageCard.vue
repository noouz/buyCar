<!-- 我合併到ListCard了QQ沒有用到-->
<template>
    <!-- 以下商品頁面1 -->
    <div class="flex flex-wrap w-11/12 m-auto gap-4 justify-center">
        <!-- 以下商品card -->
        <div class="flex flex-col w-1/6 min-w-[150px] min-h-[550px] rounded-xl border overflow-hidden " v-for="goods in goodsArr" :key="goods.id">
            <img src="https://fakeimg.pl/300/">
            <div class="md-5">
                <h2 class="my-4">{{goods.name}}</h2>
                <p class="my-4 break-words">{{goods.description}}</p>
                <p class="my-5">價格: {{goods.price}}</p>
            </div>
            <div class="flex-grow"></div>
            <div class="flex">
                <div>數量：</div>
                <div class="flex h-[35px]">
                    <button class="w-1/4 border rounded-l-xl">-</button>
                    <input type="number" class="w-2/4 border text-center" value="1">
                    <button class="w-1/4 border rounded-r-xl">+</button>
                </div>
            </div>
            <div class="text-center bg-blue-300 text-white"><i class="fa-solid fa-cart-shopping relative"></i>加入購物車
            </div>
        </div>
        <!-- 以上商品card -->
    </div>
</template>