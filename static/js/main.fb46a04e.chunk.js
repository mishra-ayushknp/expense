(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),u=n(7),o=n.n(u),i=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Expense Tracker",r.a.createElement("img",{src:o.a,width:"50",style:{float:"right"},alt:""})))},m=n(2),s=n(8),E=n(3),d=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(E.a)(Object(E.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(E.a)(Object(E.a)({},e),{},{transactions:[t.payload].concat(Object(s.a)(e.transactions))});default:return e}},f={transactions:[]},p=Object(a.createContext)(f),b=function(e){var t=e.children,n=Object(a.useReducer)(d,f),c=Object(m.a)(n,2),l=c[0],u=c[1];return r.a.createElement(p.Provider,{value:{transactions:l.transactions,deleteTransaction:function(e){u({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){u({type:"ADD_TRANSACTION",payload:e})}}},t)},v=function(){var e=Object(a.useContext)(p).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",null,"\u20b9",e))},h=function(){var e=Object(a.useContext)(p).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},"\u20b9",t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},"\u20b9",n)))},x=function(e){var t=e.transaction,n=Object(a.useContext)(p).deleteTransaction,c=t.amount<0?"-":"+";return r.a.createElement("li",{className:t.amount<0?"minus":"plus"},t.text," ",r.a.createElement("span",null,c,"\u20b9",Math.abs(t.amount)),r.a.createElement("button",{onClick:function(){return n(t.id)},className:"delete-btn"},"x"))},O=function(){var e=Object(a.useContext)(p).transactions;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{className:"list"},e.map((function(e){return r.a.createElement(x,{key:e.id,transaction:e})}))))},N=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(0),u=Object(m.a)(l,2),o=u[0],i=u[1],s=Object(a.useContext)(p).addTransaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),text:n,amount:+o};s(t),c(""),i(0)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Title"),r.a.createElement("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Enter title..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",value:o,onChange:function(e){return i(e.target.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{className:"btn"},"Add transaction")))};n(14);var j=function(){return r.a.createElement(b,null,r.a.createElement(i,null),r.a.createElement("div",{className:"container"},r.a.createElement(v,null),r.a.createElement(h,null),r.a.createElement(O,null),r.a.createElement(N,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n.p+"static/media/logo.0efa799a.png"},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.fb46a04e.chunk.js.map