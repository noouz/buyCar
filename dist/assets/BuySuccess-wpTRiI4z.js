import{_ as i,m as u,a as c,c as p,d as e,b as a,t as s,l as m,F as v,u as n,e as l,o as b}from"./index-D4DLN9wO.js";import{C as y}from"./CheckList-BHIlRQnH.js";const f={components:{CheckList:y},computed:{...u(n,["buyerData"])},methods:{...c(n,["resetForm"])}},g=e("div",{class:"p-2 text-3xl"},"購物車確認",-1),_=e("div",{class:"grid grid-cols-4 w-11/12 m-auto justify-center p-2 border-y gap-2 font-bold"},[e("div",{class:"text-center"},"商品圖片"),e("div",null,"商品名稱"),e("div",{class:"text-center"},"價錢"),e("div",{class:"text-center"},"數量")],-1),h=e("div",{class:"grid grid-cols-6 w-11/12 m-auto justify-center p-2 border-y gap-2 font-bold"},[e("div",null,"姓名"),e("div",null,"電話"),e("div",null,"地址"),e("div",null,"付款方式"),e("div",null,"電子信箱"),e("div",null,"運送方式")],-1),k={class:"grid grid-cols-6 w-11/12 m-auto justify-center p-2 border-b gap-2 mb-5 break-words"};function C(t,o,D,w,L,$){const r=l("CheckList"),d=l("RouterLink");return b(),p(v,null,[g,e("div",null,[_,a(r),h,e("div",k,[e("div",null,s(t.buyerData.name),1),e("div",null,s(t.buyerData.phone),1),e("div",null,s(t.buyerData.address),1),e("div",null,s(t.buyerData.payment),1),e("div",null,s(t.buyerData.email),1),e("div",null,s(t.buyerData.delivery),1)])]),a(d,{to:"/"},{default:m(()=>[e("button",{class:"w-full bg-blue-800 text-white rounded-md",onClick:o[0]||(o[0]=B=>t.resetForm())},"回首頁")]),_:1})],64)}const j=i(f,[["render",C]]);export{j as default};
