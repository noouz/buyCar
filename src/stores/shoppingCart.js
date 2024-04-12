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
      goodsData: [
        {"id":1,"name":"Bytecard","pic": " https://fakeimg.pl/300/", "description":"Immunization not carried out because of caregiver refusal","price":954,"quantity":1},
        {"id":2,"name":"Alphazap","pic": " https://fakeimg.pl/300/", "description":"Unspecified symptoms and signs involving cognitive functions following other cerebrovascular disease","price":776,"quantity":1},
        {"id":3,"name":"Ronstring","pic": " https://fakeimg.pl/300/", "description":"Unspecified fracture of shaft of unspecified tibia, initial encounter for open fracture type I or II","price":670,"quantity":1},
        {"id":4,"name":"Bitchip","pic": " https://fakeimg.pl/300/", "description":"Displaced fracture of coracoid process, right shoulder, subsequent encounter for fracture with delayed healing","price":346,"quantity":1},
        {"id":5,"name":"Andalax","pic": " https://fakeimg.pl/300/", "description":"Nondisplaced oblique fracture of shaft of left radius, sequela","price":515,"quantity":1},
        {"id":6,"name":"Hatity","pic": " https://fakeimg.pl/300/", "description":"Dislocation of L4/L5 lumbar vertebra, subsequent encounter","price":707,"quantity":1},
        {"id":7,"name":"Ronstring","pic": " https://fakeimg.pl/300/", "description":"Unspecified fracture of upper end of right radius, subsequent encounter for closed fracture with delayed healing","price":640,"quantity":1},
        {"id":8,"name":"Konklab","pic": " https://fakeimg.pl/300/", "description":"Partial physeal arrest, left proximal humerus","price":534,"quantity":1},
        {"id":9,"name":"Lotlux","pic": " https://fakeimg.pl/300/", "description":"Contracture, unspecified shoulder","price":705,"quantity":1},
        {"id":10,"name":"Aerified","pic": " https://fakeimg.pl/300/", "description":"Other disorders of vitreous body","price":826,"quantity":1},
        {"id":11,"name":"Bamity","pic": " https://fakeimg.pl/300/", "description":"Mechanical complication of coronary artery bypass graft and biological heart valve graft","price":651,"quantity":1},
        {"id":12,"name":"Bigtax","pic": " https://fakeimg.pl/300/", "description":"Other mechanical complication of carotid arterial graft (bypass), sequela","price":851,"quantity":1},
        {"id":13,"name":"Domainer","pic": " https://fakeimg.pl/300/", "description":"Other osteoporosis with current pathological fracture, right shoulder, sequela","price":418,"quantity":1},
        {"id":14,"name":"Tresom","pic": " https://fakeimg.pl/300/", "description":"Exposure to reduction in atmospheric pressure while surfacing from underground, initial encounter","price":754,"quantity":1},
        {"id":15,"name":"Duobam","pic": " https://fakeimg.pl/300/", "description":"Displaced unspecified fracture of left great toe, initial encounter for closed fracture","price":7686,"quantity":1},
        {"id":16,"name":"Duobam","pic": " https://fakeimg.pl/300/", "description":"Mixed cellularity Hodgkin lymphoma, spleen","price":788,"quantity":1},
        {"id":17,"name":"Lotstring","pic": " https://fakeimg.pl/300/", "description":"Lead-induced gout, unspecified site","price":3115,"quantity":1},
        {"id":18,"name":"Tres-Zap","pic": " https://fakeimg.pl/300/", "description":"Complete traumatic transphalangeal amputation of other and unspecified finger(s)","price":2734,"quantity":1},
        {"id":19,"name":"Zaam-Dox","pic": " https://fakeimg.pl/300/", "description":"Nondisplaced segmental fracture of shaft of right femur","price":415,"quantity":1},
        {"id":20,"name":"Voyatouch","pic": " https://fakeimg.pl/300/", "description":"Other fracture of shaft of left ulna, subsequent encounter for closed fracture with routine healing","price":398,"quantity":1}
      ],
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
