<!-- 首頁商品清單 -->
<script>
import { mapState,mapActions} from 'pinia';
import { useShoppingCart} from '@/stores/shoppingCart';
export default{
    props:{
        switch:{
            type:Boolean,
        }
    },
    computed:{
        ...mapState(useShoppingCart,['cartData']),
        ...mapState(useShoppingCart,['cartAmount']),
    },
    data(){
        return{
            goodsArr:[],
        }
    },
    mounted(){
        fetch('https://raw.githubusercontent.com/noouz/aitools-json/main/carData.json')
        .then( res => res.json())
        .then(datas => this.goodsArr = datas);
    },
    methods:{
        ...mapActions(useShoppingCart,['goodsPlus']),
        ...mapActions(useShoppingCart,['goodsMinus']),
        ...mapActions(useShoppingCart,['addProduct']),
    },

}
</script>

<template>
    <!-- 以下商品頁面2 -->
    <div class="flex flex-wrap w-11/12 m-auto justify-center" v-if="switch">
        <div class="grid grid-cols-6 w-full m-auto justify-center p-2 border-y gap-2 font-bold">
            <div class="text-center">商品圖片</div>
            <div>商品名稱</div>
            <div class="text-center">商品描述</div>
            <div class="text-center">價錢</div>
            <div></div>
            <div></div>
        </div>
        <!-- 以下商品清單 -->
        <div class="grid grid-cols-6 w-full m-auto justify-center items-center p-2 border-b gap-2" v-for="goods in goodsArr" :key="goods.id">
            <div class="m-auto max-w-[200px] max-h-[200px]"><img :src=goods.pic></div>
            <div class="break-words">{{goods.name}}</div>
            <div class="break-words">{{goods.description}}</div>
            <div class="text-center">${{goods.price }}</div>
            <div>
                <div class="flex h-[35px]">
                    <button class="w-1/4 border rounded-l-3xl" @click="goodsMinus(goods)">-</button>
                    <input type="number" class="w-2/4 border text-center" :value="goods.quantity" min="1">
                    <button class="w-1/4 border rounded-r-3xl" @click="goodsPlus(goods)">+</button>
                </div>
                <div class="text-center bg-blue-300 text-white rounded-3xl text-sm  cursor-pointer" @click="addProduct(goods)"><i
                    class="fa-solid fa-cart-shopping relative"></i>加入購物車</div>
            </div>
            <div></div>
        </div>
        <!-- 以上商品清單 -->
    </div>

    <!-- 以下商品頁面1 -->
    <div class="flex flex-wrap w-11/12 m-auto gap-4 justify-center" v-else>
        <!-- 以下商品card -->
        <div class="flex flex-col w-1/6 min-w-[150px] min-h-[550px] rounded-xl border overflow-hidden " v-for="goods in goodsArr" :key="goods.id">
            <img :src=goods.pic>
            <div class="md-5">
                <h2 class="my-4">{{goods.name}}</h2>
                <p class="my-4 break-words">{{goods.description}}</p>
                <p class="my-5">價格: {{goods.price}}</p>
            </div>
            <div class="flex-grow"></div>
            <div class="flex">
                <div>數量：</div>
                <div class="flex h-[35px]">
                    <button class="w-1/4 border rounded-l-xl" @click="goodsMinus(goods)">-</button>
                    <input type="number" class="w-2/4 border text-center" :value="goods.quantity"  min="1">
                    <button class="w-1/4 border rounded-r-xl" @click="goodsPlus(goods)">+</button>
                </div>
            </div>
            <div class="text-center bg-blue-300 text-white cursor-pointer" @click="addProduct(goods)"><i class="fa-solid fa-cart-shopping relative" ></i>加入購物車
            </div>
        </div>
        <!-- 以上商品card -->
    </div>
</template>