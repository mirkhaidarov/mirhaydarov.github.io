(function(e){function t(t){for(var i,o,r=t[0],c=t[1],u=t[2],f=0,h=[];f<r.length;f++)o=r[f],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&h.push(s[o][0]),s[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(h.length)h.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},s={app:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"122e":function(e,t,n){e.exports=n.p+"media/2.d2c4a2c4.mp3"},"3f26":function(e,t,n){e.exports=n.p+"media/4.36d5a722.mp3"},"4b1a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"eventEmitter",(function(){return X}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("Simon"),n("GameInfo"),n("GameOptions"),n("Popup"),n("SimonSound")],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",{staticClass:"title"},[e._v(e._s(e.title))])])},r=[],c={data:function(){return{title:"Simon Says"}}},u=c,l=(n("6ebe"),n("2877")),f=Object(l["a"])(u,o,r,!1,null,"7e1a54b9",null),h=f.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"simon",on:{click:function(t){return e.handleClick(t.target)}}},[n("ul",{ref:"tileList"},e._l(e.tileList,(function(t){var i=t.className,s=t.data;return n("li",{key:s,class:[i,{active:e.currentTile===s&&e.isTileActive}],attrs:{"data-tile":s}})})),0)])},m=[],v=(n("99af"),n("7db0"),n("2909")),p=function(e){switch(e){case"normal":return 1.5;case"middle":return 1;case"hard":return.4;default:return 1.5}},b=function(e,t){return p(e)*t},w=function(){var e=["red","green","blue","yellow"],t=e[Math.floor(Math.random()*e.length)];return t},g=(n("d81d"),function(e,t,n){e.map((function(e,i){return setTimeout((function(){t(e)}),(i+1)*b(n,1100))}))}),_={data:function(){return{tileList:[{className:"red",data:"red"},{className:"blue",data:"blue"},{className:"yellow",data:"yellow"},{className:"green",data:"green"}],currentTile:"",isTileActive:!1,score:0,level:0,sequence:[],humanSequence:[],totalLevels:35,difficult:"normal"}},methods:{resetGame:function(e){this.viewModal(e),this.sequence=[],this.humanSequence=[],this.level=0,this.score=0,this.setScore(0),this.viewStartBtn(!0),this.setInfo({show:!1})},activeTileAfterClick:function(e){var t=this;this.setTileActive(!0,e),setTimeout((function(){t.setTileActive(!1,e)}),100)},handleClick:function(e){var t=this;if(0!==this.score){var n=e.dataset.tile,i=this.humanSequence.push(n)-1;if(this.activeTileAfterClick(n),this.playSound(n),!this.gameOver(i)){if(this.humanSequence.length===this.sequence.length){if(this.endGame())return;this.humanSequence=[];var s="Success! Keep going!";return this.setInfo({show:!0,message:s}),void setTimeout((function(){t.nextRound()}),1e3)}var a=this.sequence.length-this.humanSequence.length;this.humanTurnMessage(a)}}},endGame:function(){var e=this.humanSequence.length===this.totalLevels,t="Congrats! You completed all ".concat(this.totalLevels," levels");return this.setGameOverCondition(e,t)},gameOver:function(e){var t=this.humanSequence[e]!==this.sequence[e],n="Oops! Game over";return this.setGameOverCondition(t,n)},setGameOverCondition:function(e,t){return!!e&&(this.resetGame(t),!0)},activateTile:function(e){var t=this,n=this.tileList.find((function(t){var n=t.data;return n===e}));this.setTileActive(!0,n.data),this.playSound(e),setTimeout((function(){t.setTileActive(!1,n.data)}),b(this.difficult,1e3))},nextRound:function(){var e=this;this.level+=1,this.score=this.level,this.setScore(this.score);var t="Wait for the computer";this.setInfo({show:!0,message:t});var n=Object(v["a"])(this.sequence);n.push(w()),g(n,this.activateTile,this.difficult),this.sequence=Object(v["a"])(n),setTimeout((function(){e.humanTurnMessage(e.level)}),this.level*b(this.difficult,1100)+b(this.difficult,1100))},setScore:function(e){X.$emit("setScore",e)},humanTurnMessage:function(e){var t="Your turn: ".concat(e," Tap").concat(e>1?"s":"");this.setInfo({show:!0,message:t})},setTileActive:function(e,t){this.isTileActive=e,this.currentTile=t},setInfo:function(e){X.$emit("setInfo",e)},viewStartBtn:function(e){X.$emit("viewStartBtn",e)},playSound:function(e){X.$emit("playSound",e)},viewModal:function(e){X.$emit("viewModal",e)}},created:function(){var e=this;X.$on("startGame",(function(){e.viewStartBtn(!1),e.nextRound()})),X.$on("difficult",(function(t){e.difficult=t}))}},S=_,y=(n("b7c7"),Object(l["a"])(S,d,m,!1,null,"23d259f5",null)),O=y.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"game-info"},[n("h2",[e._v("Round: "),n("span",{attrs:{"data-round":"0"}},[e._v(e._s(e.score))])]),n("button",{directives:[{name:"show",rawName:"v-show",value:e.showStartBtn,expression:"showStartBtn"}],staticClass:"start",on:{click:e.startGame}},[e._v("Start")]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.showInfo,expression:"showInfo"}],staticClass:"info"},[e._v(e._s(e.infoMessage))])])},x=[],$={data:function(){return{score:0,infoMessage:"",showStartBtn:!0,showInfo:!1}},methods:{startGame:function(){X.$emit("startGame")}},created:function(){var e=this;X.$on("viewStartBtn",(function(t){e.showStartBtn=t})),X.$on("setInfo",(function(t){var n=t.show,i=t.message,s=void 0===i?"":i;e.showInfo=n,e.infoMessage=e.showInfo?s:""})),X.$on("setScore",(function(t){e.score=t}))}},j=$,C=(n("8769"),Object(l["a"])(j,T,x,!1,null,"170e7472",null)),G=C.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"game-options"},[n("h2",[e._v(e._s(e.title))]),e._l(e.inputLabel,(function(t){var i=t.label,s=t.value;return n("label",{key:i},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputList,expression:"inputList"}],attrs:{type:"radio"},domProps:{value:s,checked:e._q(e.inputList,s)},on:{click:function(t){return e.changeDifficult(t)},change:function(t){e.inputList=s}}}),e._v(e._s(i)),n("br")])}))],2)},q=[],L={data:function(){return{title:"Game Options:",inputLabel:[{label:"Normal",value:"normal"},{label:"Middle",value:"middle"},{label:"Hard",value:"hard"}],inputList:"normal"}},methods:{changeDifficult:function(e){var t=e.target,n=t.value;X.$emit("difficult",n)}}},k=L,I=Object(l["a"])(k,M,q,!1,null,null,null),A=I.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"modal"},[n("div",{staticClass:"modal__content"},[n("h2",{staticClass:"modal__title"},[e._v(e._s(e.message))]),n("button",{staticClass:"modal__close",attrs:{type:"button"},on:{click:e.close}},[e._v("×")])])])},P=[],B={data:function(){return{message:"",show:!1}},methods:{close:function(){this.show=!1}},created:function(){var e=this;X.$on("viewModal",(function(t){e.message=t,e.show=!0}))}},E=B,R=(n("7dc2"),Object(l["a"])(E,N,P,!1,null,"537eb95a",null)),H=R.exports,D=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("footer",{ref:"soundList"},[i("audio",{ref:"red",attrs:{src:n("fdf0")}}),i("audio",{ref:"green",attrs:{src:n("122e")}}),i("audio",{ref:"blue",attrs:{src:n("aedf")}}),i("audio",{ref:"yellow",attrs:{src:n("3f26")}})])},J=[],Y={created:function(){var e=this;X.$on("playSound",(function(t){e.$refs[t].play()}))}},K=Y,W=Object(l["a"])(K,D,J,!1,null,null,null),z=W.exports,F={name:"App",components:{Header:h,Simon:O,GameInfo:G,GameOptions:A,SimonSound:z,Popup:H}},Q=F,U=(n("5c0b"),Object(l["a"])(Q,s,a,!1,null,null,null)),V=U.exports,X=new i["a"];i["a"].config.productionTip=!1,i["a"].config.devtools=!0,new i["a"]({render:function(e){return e(V)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"6ebe":function(e,t,n){"use strict";n("f4eb")},"7dc2":function(e,t,n){"use strict";n("8354")},8354:function(e,t,n){},8769:function(e,t,n){"use strict";n("4b1a")},"9c0c":function(e,t,n){},aedf:function(e,t,n){e.exports=n.p+"media/3.c1c96b44.mp3"},b1ff:function(e,t,n){},b7c7:function(e,t,n){"use strict";n("b1ff")},f4eb:function(e,t,n){},fdf0:function(e,t,n){e.exports=n.p+"media/1.99e50f7d.mp3"}});
//# sourceMappingURL=app.2c7bc4d9.js.map