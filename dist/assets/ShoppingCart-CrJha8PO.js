import{m as u,a,_ as b,u as s,o,c as r,F as p,r as $,b as i,d as e,e as h,w as y,v as g,t as v}from"./index-D4DLN9wO.js";import{P as k,T as w}from"./TotalCalc-BTN-Ooe9.js";const D={components:{PublicBtn:k,TotalCalc:w},computed:{...u(s,["cartData"]),...u(s,["cartAmount"]),...u(s,["checkedData"]),haveChecked(){return!!this.checkedData.length}},methods:{...a(s,["goodsPlus"]),...a(s,["goodsMinus"]),...a(s,["addProduct"]),...a(s,["checkedCartData"]),isChecked(){this.checkedCartData(),this.haveChecked?(alert("送出商品!"),this.$router.push({name:"shoppingcheck"})):(alert("尚未選取商品!"),this.$router.push({name:"shoppingcart"}))}}},P={class:"flex justify-center"},B=["onUpdate:modelValue"],j={class:"m-auto max-w-[100px] max-h-[100px]"},S=["src"],T={class:"break-words"},V={class:"text-center"},M={class:"flex h-[35px]"},q=["onClick"],A=e("label",{for:"check-buy"},null,-1),F=["value","onInput"],I=["onClick"],N=e("div",null,null,-1),U={class:"flex justify-between px-5"};function E(n,l,C,f,x,_){const d=h("TotalCalc"),m=h("PublicBtn");return o(),r(p,null,[(o(!0),r(p,null,$(n.cartData,t=>(o(),r("div",{class:"grid grid-cols-6 w-11/12 m-auto justify-center items-center p-2 border-b gap-2 mb-5",key:t.id},[e("div",P,[y(e("input",{type:"checkbox","onUpdate:modelValue":c=>t.checked=c},null,8,B),[[g,t.checked]])]),e("div",j,[e("img",{src:t.pic},null,8,S)]),e("div",T,v(t.name),1),e("div",V,"$"+v(t.price*t.quantity),1),e("div",null,[e("div",M,[e("button",{class:"w-1/4 border rounded-l-3xl",onClick:c=>n.goodsMinus(t)},"-",8,q),A,e("input",{type:"number",class:"w-2/4 border text-center",id:"check-buy",value:t.quantity,onInput:c=>n.addProduct(t)},null,40,F),e("button",{class:"w-1/4 border rounded-r-3xl",onClick:c=>n.goodsPlus(t)},"+",8,I)])]),N]))),128)),i(d),e("div",U,[i(m,{link:"/",style:"bg-rose-600",content:"回上頁繼續購買"}),i(m,{style:"bg-blue-800",content:"確認購買",onClick:l[0]||(l[0]=t=>_.isChecked())})])],64)}const L=b(D,[["render",E]]),z={components:{CartCard:L,PublicBtn:k}},G=e("div",{class:"p-2 text-3xl"},"購物車確認",-1),H=e("div",{class:"grid grid-cols-6 w-11/12 m-auto justify-center p-2 border-y gap-2 font-bold"},[e("div"),e("div",{class:"text-center"},"商品圖片"),e("div",null,"商品名稱"),e("div",{class:"text-center"},"價錢"),e("div"),e("div")],-1);function J(n,l,C,f,x,_){const d=h("CartCard");return o(),r(p,null,[G,e("div",null,[H,i(d)])],64)}const Q=b(z,[["render",J]]);export{Q as default};