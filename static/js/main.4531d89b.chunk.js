(this.webpackJsonpfriendlist=this.webpackJsonpfriendlist||[]).push([[0],[,,,function(e,t,a){e.exports={SectionList:"App_SectionList__-a_2X",formControl:"App_formControl__2KBwG",Applogo:"App_Applogo__3ipBN",paginationbar:"App_paginationbar__1O3Cc"}},function(e,t,a){e.exports={App:"FriendName_App__23ZfS",Applogo:"FriendName_Applogo__7WO6T",FriendList:"FriendName_FriendList__2biOv"}},,,function(e){e.exports=JSON.parse('[{"id":1,"fname":"Rahul","lname":"Gupta","favourites":true},{"id":2,"fname":"Shivangi","lname":"Sharma","favourites":false},{"id":3,"fname":"Akash","lname":"Singh","favourites":false},{"id":4,"fname":"Rajat","lname":"Sharma","favourites":true},{"id":5,"fname":"Amol","lname":"Verma","favourites":false},{"id":6,"fname":"Tiana","lname":"Pandey","favourites":false},{"id":7,"fname":"Mohak","lname":"Mehta","favourites":true},{"id":8,"fname":"Kavya","lname":"Sharma","favourites":false},{"id":9,"fname":"Anika","lname":"Bajaj","favourites":false}]')},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(6),s=a.n(r),c=(a(12),a(2)),o=a(4),u=a.n(o),f=a.p+"static/media/bin.a6fd2950.png",l=a.p+"static/media/star.190d870d.png",m=a.p+"static/media/staractive.d0cbd94e.png",p=a(0),d=function(e){var t=e.data,a=Object(n.useState)(t.favourites),i=Object(c.a)(a,2),r=i[0],s=i[1];if(1==r)var o=m;else o=l;return Object(p.jsxs)("div",{className:u.a.FriendList,children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("b",{children:"".concat(t.fname," ").concat(t.lname)})," is your friend"]},t.fname),Object(p.jsx)("img",{onClick:function(){s((function(e){return!e}))},className:u.a.Applogo,src:o}),Object(p.jsx)("img",{onClick:function(){e.changeHandler(t.id)},className:u.a.Applogo,src:f})]})},A=a(3),j=a.n(A),b=a(7),v=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)([]),s=Object(c.a)(r,2),o=s[0],u=s[1],f=Object(n.useState)(0),l=Object(c.a)(f,2),m=l[0],A=l[1],v=Object(n.useState)(!1),g=Object(c.a)(v,2),h=g[0],O=g[1];Object(n.useEffect)((function(){var e=b.filter((function(e){return Object.values(e).join("").toLowerCase().includes(a.toLowerCase())}));u(e)}),[a]),Object(n.useEffect)((function(){u((function(e){return e.filter((function(e){return e.id!==m}))}))}),[m]);var x=function(e){A(e)};return Object(p.jsx)("div",{className:j.a.formControl,children:Object(p.jsxs)("section",{className:j.a.SectionList,children:[Object(p.jsx)("label",{children:"Friends List"}),Object(p.jsx)("input",{className:j.a.floatchild,type:"text",placeholder:"Enter your friend's name here",value:a,onChange:function(e){i(e.target.value)}}),Object(p.jsx)("img",{className:j.a.Applogo,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABs0lEQVRoge2Yy0rEMBhGj+LlCSyjCD6LoODbuHXps7h0696FgwyOulFhwMcQXY+LNkxMm6m5/UmHHiiFaZt8p7lMGhjZHCrgtTmqwLKegFlwIg8OgDdg2RwL4DCgPFWOKKZEDBlxkQp4bypV56Xxm083ExXRW2IBTLQA5jXXlhEVeab91vUAemvNHcsWFZkBL/ztOmaAqrln3Qz0EKmcqPi8yTnpWtYbH5Gu8WQba5NoSXvw7dupZj9vQgbpuv8jsZZQhM42XSsEcQmAKfUsFIJas5kz2chG8kh7EJZyTLsCb1lExJfUjrRy77g+kBnrC97uebCkWcQrS9dKNyfe66/Q74uYBGcpQSZahpwy0evOIZOsTkmZ5HVJyIi9sJQViXfhFBVm+8SNKZNNwhbARya7hC2Ii0wxEgofmeIkFLYdkb6jKAlFhbtICSvrTv67PRR907rvw2owjCKlkUrkLFG5Yuj7YbfAseW+6IM9NrvAJfBFHfQHuAb2jfuKF1EcATesAn8CF9r1wYgoToEPVsHvgBMGKAKwB1wB39Th1XlwIgqzuw1WRHFOvWt4nzvISEp+AVvHGNBBqML9AAAAAElFTkSuQmCC",onClick:function(){O((function(e){return!e})),u(!0===h?function(e){return e.sort((function(e,t){return t.favourites-e.favourites}))}:function(e){return e.sort((function(e,t){return e.favourites-t.favourites}))})}}),o.map((function(e){return Object(p.jsx)(d,{data:e,changeHandler:x},e.id)}))]})})};var g=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(v,{})})};s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.4531d89b.chunk.js.map