<!-- 表單欄位 -->
<script>
import { mapState,mapActions} from 'pinia';
import { useShoppingCart} from '@/stores/shoppingCart';
export default{
  props:{
    required:Boolean,
  },
  computed:{
    ...mapState(useShoppingCart,['buyerData']),
  },
  data(){
    return{
      labelArr:[
        {
          key:'name',
          text:'姓名',
          type:'text',
        },
        {
          key:'phone',
          text:'電話',
          type:'tel',
        },
        {
          key:'address',
          text:'地址',
          type:'text',
        },
        {
          key:'email',
          text:'電子信箱',
          type:'email',
        },
      ],
      radioArr:[
        {
          title:'付款方式',
          type:'payment',
          method1:{ text:'信用卡', id:'pay1'},
          method2:{ text:'貨到付款', id:'pay2'},
        },
        {
          title:'運送方式',
          type:'delivery',
          method1:{ text:'宅配', id:'delivery1'},
          method2:{ text:'超商取貨', id:'delivery2'},
        }
      ]
    }
  },
};
</script>

<template>
    <!-- 付款方式的input -->
    <div class="formTop w-full">
      <slot name="formTop"></slot>
      <div class="flex flex-col w-11/12 m-auto gap-2 mb-4 text-xl" v-for="label in labelArr">
        <label :for="label.key" class="font-bold">
          {{ label.text }}
          <span v-show="required" class="text-rose-700">*</span>
        </label>
        <input class="w-full border-2 rounded-md" required 
          v-model="buyerData[label.key]"
          :type="label.type" 
          :id='label.key'
        >
      </div>
    </div>

    <!-- 運送方式的radio -->
    <div class="formButton w-full">
      <slot name="formBottom"></slot>
      <div class="flex flex-col w-11/12 m-auto gap-2 mb-4 text-xl" v-for="radio in radioArr">
        <label :for="radio.type" class="font-bold">
          {{radio.title}}
          <span v-show="required" class="text-rose-700">*</span>
        </label>
        <label class="flex gap-2 text-lg" :for="radio.type">
          <input type="radio"  required 
            :id="radio.method1.id"
            :name="radio.type" 
            :value="radio.method1.text" 
            v-model="buyerData[radio.type]"
          >
          <label :for="radio.method1.id">{{radio.method1.text}}</label>

          <br>
          <input type="radio"  required 
            :id="radio.method2.id"
            :name="radio.type" 
            :value="radio.method2.text" 
            v-model="buyerData[radio.type]"
          >
          <label :for="radio.method2.id">{{radio.method2.text}}</label>
        </label>
      </div>
    </div>
    
</template>