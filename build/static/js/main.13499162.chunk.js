(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:0,name:"Karl",desc:"Developer",age:26,image:"1.jpg",likedUsers:[],superLikedUsers:[],dislikedUsers:[],likedBy:[]},{id:1,name:"Martin",desc:"Prisoner at Federal Correctional Institution",age:35,image:"2.jpg",likedUsers:[],superLikedUsers:[],dislikedUsers:[],likedBy:[]},{id:2,name:"Emily",desc:"Actress",age:35,image:"3.jpg",likedUsers:[],superLikedUsers:[],dislikedUsers:[],likedBy:[]},{id:3,name:"Michael",desc:"Manager",age:45,image:"4.jpg",likedUsers:[],superLikedUsers:[],dislikedUsers:[],likedBy:[]},{id:4,name:"Dwight",desc:"Sales",age:40,image:"5.jpg",likedUsers:[],superLikedUsers:[],dislikedUsers:[],likedBy:[]},{id:5,name:"Jessica",desc:"Actress",age:37,image:"6.jpg",likedUsers:[],superLikedUsers:[],dislikedUsers:[],likedBy:[]},{id:6,name:"Alexandra",desc:"Actress",age:32,image:"7.jpg",likedUsers:[],superLikedUsers:[],dislikedUsers:[],likedBy:[]}]},12:function(e,a,s){},13:function(e,a,s){"use strict";s.r(a);var t=s(0),r=s.n(t),i=s(5),n=s(2),c=s(3),l=(s(12),function(){return r.a.createElement("div",null,r.a.createElement("img",{src:"/images/misc/logo.png",alt:"Tinder Logo"}))}),m=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"fl"},r.a.createElement("button",{type:"button"},r.a.createElement("img",{src:"/images/misc/user.png",alt:"User Settings"}))),r.a.createElement("div",{className:"fl"},r.a.createElement(l,null)),r.a.createElement("div",{className:"fl"},r.a.createElement("button",{type:"button"},r.a.createElement("img",{src:"/images/misc/messages.png",alt:"View Messages"}))))};function d(){return r.a.createElement("button",{type:"button"},r.a.createElement("img",{src:"images/misc/rewind.png",alt:"Rewind User"}))}var u=function(e){var a=e.userId,s=e.modifySuperficialChoices;return r.a.createElement("button",{type:"button",onClick:function(){return s(a,"ADD_TO_DISLIKED_USERS")}},r.a.createElement("img",{src:"images/misc/dislike.png",alt:"Dislike User"}))},o=function(e){var a=e.userId,s=e.modifySuperficialChoices;return r.a.createElement("button",{type:"button",onClick:function(){return s(a,"ADD_TO_LIKED_USERS")}},r.a.createElement("img",{src:"images/misc/like.png",alt:"Like User"}))},p=function(e){var a=e.userId,s=e.modifySuperficialChoices;return r.a.createElement("button",{type:"button",onClick:function(){return s(a,"ADD_TO_SUPERLIKED_USERS")}},r.a.createElement("img",{src:"images/misc/superlike.png",alt:"Superlike User"}))},g=function(e){var a=e.person,s=e.modifySuperficialChoices;return r.a.createElement("div",{id:"actions"},r.a.createElement(d,{userId:a.id}),r.a.createElement(u,{userId:a.id,modifySuperficialChoices:s}),r.a.createElement(o,{userId:a.id,modifySuperficialChoices:s}),r.a.createElement(p,{userId:a.id,modifySuperficialChoices:s}))},E=function(e){var a=e.person,s=e.modifySuperficialChoices,t=a.name,i=a.desc,n=a.age,c=a.image;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"person"},r.a.createElement("div",{className:"person-photo"},r.a.createElement("img",{src:"/images/users/".concat(c),alt:t})),r.a.createElement("div",{className:"person-description"},r.a.createElement("p",{className:"person-name-age"},t,", ",r.a.createElement("span",null,n)),r.a.createElement("p",{className:"person-info"},i))),r.a.createElement(g,{person:a,modifySuperficialChoices:s}))},k=function(e){var a=e.person;return r.a.createElement("div",{className:"liked-person"},r.a.createElement("div",{className:"liked-person-image"},r.a.createElement("img",{src:"/images/users/".concat(a.image),alt:"You liked ".concat(a.name)})))},f=function(e){var a=e.activeUserImage,s=e.likedUsers,t=e.superLikedUsers;return r.a.createElement("div",{id:"lonely"},r.a.createElement("p",null,"There's no new around you."),r.a.createElement("span",{className:"pulse"},r.a.createElement("img",{src:"/images/users/".concat(a),alt:"You..."})),r.a.createElement("div",{id:"liked-people"},r.a.createElement("p",null,s.length>0?"People you liked...let's hope they like you too!":""),s.map(function(e){return r.a.createElement(k,{key:e.id,person:e})}),r.a.createElement("p",null,t.length>0?"People you super liked!":""),t.map(function(e){return r.a.createElement(k,{key:e.id,person:e})})))},U=s(1),y=function(){var e=Object(t.useState)(U),a=Object(c.a)(e,2),s=a[0],i=a[1],l=Object(t.useState)([]),d=Object(c.a)(l,2),u=d[0],o=d[1],p=Object(t.useState)([]),g=Object(c.a)(p,2),k=g[0],y=g[1],S=Object(t.useState)([]),b=Object(c.a)(S,2),h=b[0],v=b[1],D=function(e,a){return e.filter(function(e){return e.id!==a})};return r.a.createElement("div",{className:"app"},r.a.createElement(m,null),s[1]?r.a.createElement(E,{key:s[1].id,person:s[1],modifySuperficialChoices:function(e,a){var t=Object(n.a)(s),r=Object(n.a)(u),c=Object(n.a)(k),l=Object(n.a)(h);switch(a){case"ADD_TO_LIKED_USERS":s[0].likedUsers.includes(e)||(t[0].likedUsers.push(e),r.push(U[e]),o(r),i(D(s,e)));break;case"ADD_TO_DISLIKED_USERS":s[0].dislikedUsers.includes(e)||(t[0].dislikedUsers.push(e),l.push(U[e]),v(r),i(D(s,e)));break;case"ADD_TO_SUPERLIKED_USERS":s[0].superLikedUsers.includes(e)||(t[0].superLikedUsers.push(e),c.push(U[e]),y(c),i(D(s,e)));break;default:return s}},likedUsers:u}):r.a.createElement(f,{activeUserImage:s[0].image,likedUsers:u,superLikedUsers:k}))};Object(i.render)(r.a.createElement(y,null),document.getElementById("root"))},6:function(e,a,s){e.exports=s(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.13499162.chunk.js.map