import { defineStore } from 'pinia'

export const useShoppingCart = defineStore('shopping-cart', {
  //公用變數
  state:()=>{
    return{
      cartData:[],
      checkedData:[],
      cartAmount:0,
      buyerData:{
        name:'',
        phone:'',
        address:'',
        email:'',
        payment:'',
        delivery:'',
      },
    };
  },
    //公用方法
  actions:{
    //++
    goodsPlus(item){
      item.quantity++;
    },
    //--
    goodsMinus(item){
      if(item.quantity >1 ){
        item.quantity--;
      }
    },
    //加入購物車
    addProduct(item){
      const found = this.cartData.findIndex((element) => element.id == item.id);
      if(found >= 0){
        this.cartData[found].quantity += item.quantity;
      }else{
        const cartAdd = {
            "id":item.id,
            "name":item.name,
            "pic": item.pic,
            "description":item.description,
            "price":item.price ,
            "quantity":item.quantity,
            "checked":false,
        };
        this.cartData.push(cartAdd);
        this.cartAmount = this.cartData.length;
      }
    },
    //在購物車頁面把有打勾的加進checkedData
    checkedCartData(){
      this.checkedData = this.cartData.filter(item => item.checked );
    },
    //返回首頁時去除已結帳的項目
    resetCart () {
      const unCheckedData = this.cartData.filter(item => !item.checked );
      this.cartData = unCheckedData;
      this.cartAmount = this.cartData.length;
    },
    //回到首頁時reset buyer資料
    resetForm(){
      Object.keys(this.buyerData).forEach(key => this.buyerData[key] = '')
    }
  },


});
