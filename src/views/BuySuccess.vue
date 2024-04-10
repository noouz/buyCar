<script>
import { mapState,mapActions} from 'pinia';
import { useShoppingCart} from '@/stores/shoppingCart';
import CheckList from '@/components/CheckList.vue';

export default{
    components: {
        CheckList,
    },
    computed:{
    ...mapState(useShoppingCart, ['buyerData']),
    },
    methods:{
    //回到首頁時reset buyer資料
    ...mapActions(useShoppingCart, ['resetForm']),
    }
}
</script>

<template>
    <div class="p-2 text-3xl">購物車確認</div>
    <div>
        <div class="grid grid-cols-4 w-11/12 m-auto justify-center p-2 border-y gap-2 font-bold">
            <div class="text-center">商品圖片</div>
            <div>商品名稱</div>
            <div class="text-center">價錢</div>
            <div class="text-center">數量</div>
        </div>
        <!-- 以下商品清單 -->
        <CheckList></CheckList>
        <!-- 以上商品清單 -->
        <div class="grid grid-cols-6 w-11/12 m-auto justify-center p-2 border-y gap-2 font-bold">
            <div>姓名</div>
            <div>電話</div>
            <div>地址</div>
            <div>付款方式</div>
            <div>電子信箱</div>
            <div>運送方式</div>
        </div>

        <!-- 訂購者清單資料 -->
        <div class="grid grid-cols-6 w-11/12 m-auto justify-center p-2 border-b gap-2 mb-5 break-words" >
            <div>{{buyerData.name}}</div>
            <div>{{buyerData.phone}}</div>
            <div>{{buyerData.address}}</div>
            <div>{{buyerData.payment}}</div>
            <div>{{buyerData.email}}</div>
            <div>{{buyerData.delivery}}</div>
        </div>

    </div>
    <RouterLink to="/">
        <button class="w-full bg-blue-800 text-white rounded-md" @click="resetForm()">回首頁</button>
    </RouterLink>
</template>

<style></style>