webpackJsonp([0],{MqFa:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{attrs:{to:"/"}},[this._v("home")]),this._v(" "),e("router-link",{attrs:{to:"/1"}},[this._v("1")]),this._v(" "),e("router-link",{attrs:{to:"/2"}},[this._v("2")])],1)},staticRenderFns:[]},a={name:"App",components:{AppHeader:i("VU/8")(null,s,!1,null,null,null).exports}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var u=i("VU/8")(a,M,!1,function(t){i("t+Zp")},null,null).exports,c=i("/ocq"),o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("router-link",{attrs:{to:"/"}},[t._v("home")]),t._v(" "),i("router-link",{attrs:{to:"/1"}},[t._v("DLT THIS")]),t._v(" "),i("router-link",{attrs:{to:"/2"}},[t._v("КОШКА")]),t._v(" "),i("router-link",{staticClass:"v-font",attrs:{to:"/3"}},[t._v("Variative Fonts")]),t._v(" "),i("router-link",{attrs:{to:"/4"}},[t._v("🥗SÅḺÀⅅ̲𝓓ȧȳŚ👀")]),t._v(" "),i("router-link",{attrs:{to:"/howtomakewebsites"}},[t._v("🌍а все таки, как же делать сайты?🤔")])],1)},staticRenderFns:[]};var r=i("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}},components:{}},o,!1,function(t){i("vbJp")},"data-v-63f5b6aa",null).exports,l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"container"},[e("div",[e("img",{attrs:{src:i("R5Mu"),alt:""}})]),this._v(" "),e("div",[e("h2",[this._v(": А ты о чем думаешь")])])])])}]};var L=i("VU/8")({data:function(){return{images:["@/assets/secret_girl_name/2018-11-20 21.09.16.jpg","@/assets/secret_girl_name/2018-11-20 21.07.44.jpg"]}},computed:{}},l,!1,function(t){i("NTgr")},"data-v-71ff0f9f",null).exports,d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"random-second",on:{mousemove:t.getMouseCoordinates}},[i("h1",[t._v(t._s(t.title))]),t._v(" "),i("img",{style:t.computedImgStyles,attrs:{src:"http://placekitten.com/200/300",alt:""}}),t._v(" "),i("p",[t._v("\n    x: "+t._s(t.x)+" y: "+t._s(t.y)+"\n  ")])])},staticRenderFns:[]};var j=i("VU/8")({data:function(){return{title:"картинка следующая за курсором",x:0,y:0}},methods:{getMouseCoordinates:function(t){this.x=t.clientX,this.y=t.clientY}},computed:{computedImgStyles:function(){return{top:this.y+"px",left:this.x+"px"}}}},d,!1,function(t){i("aEwg")},"data-v-53be6352",null).exports,N={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("вариативные свойства")]),t._v(" "),i("div",{staticClass:"container"},[i("section",[i("h2",{style:t.computedStyles.letterSpacing},[t._v("letter-spacing")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.letterSpacing,expression:"letterSpacing"}],attrs:{type:"range",name:"",id:"",min:"0",max:"30",step:"1"},domProps:{value:t.letterSpacing},on:{__r:function(e){t.letterSpacing=e.target.value}}})]),t._v(" "),i("section",{staticStyle:{"text-align":"left"}},[i("code",[t._v("\n        style { "),i("br"),t._v("\n         letter-spacing: "+t._s(t.letterSpacing)+"px"),i("br"),t._v("\n        }\n      ")])])]),t._v(" "),i("div",{staticClass:"container"},[i("section",[i("h2",{style:t.computedStyles.fontSize},[t._v("font-size")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSize,expression:"fontSize"}],attrs:{type:"range",name:"",id:"",min:"14",max:"50",step:"1"},domProps:{value:t.fontSize},on:{__r:function(e){t.fontSize=e.target.value}}})]),t._v(" "),i("section",{staticStyle:{"text-align":"left"}},[i("code",[t._v("\n        style { "),i("br"),t._v("\n         font-size: "+t._s(t.fontSize)+"px"),i("br"),t._v("\n        }\n      ")])])])])},staticRenderFns:[]};var v=i("VU/8")({data:function(){return{letterSpacing:0,fontSize:14}},computed:{computedStyles:function(){return{letterSpacing:{letterSpacing:this.letterSpacing+"px"},fontSize:{fontSize:this.fontSize+"px"}}}}},N,!1,function(t){i("lZeI")},"data-v-2ce47c62",null).exports,y={data:function(){return{clicked:Math.random()>=.5,speed:30*Math.random()}},methods:{clickMe:function(){this.clicked=!this.clicked,this.speed=30*Math.random()}},computed:{computedStyle:function(){return{animationDuration:this.speed+"s",animationDirection:this.clicked?"normal":"reverse"}}}},x={render:function(){var t=this.$createElement;return(this._self._c||t)("section",{style:this.computedStyle,on:{click:this.clickMe}})},staticRenderFns:[]};var g={data:function(){return{x:0,y:0,z:0,working:!1}},computed:{},mounted:function(){var t=0,e=0,i=0,n=0,s=0,a=0;void 0==window.DeviceMotionEvent?(document.getElementById("no").style.display="block",document.getElementById("yes").style.display="none"):(window.ondevicemotion=function(t){s=t.accelerationIncludingGravity.x,a=t.accelerationIncludingGravity.y,console.log("Accelerometer data - x: "+t.accelerationIncludingGravity.x+" y: "+t.accelerationIncludingGravity.y+" z: "+t.accelerationIncludingGravity.z)},setInterval(function(){n+=-a,i+=s;var M=document.getElementById("ball");e=parseInt(e+.01*n),(t=parseInt(t+.01*i))<0&&(t=0,i=0),e<0&&(e=0,n=0),t>document.documentElement.clientWidth-20&&(t=document.documentElement.clientWidth-20,i=0),e>document.documentElement.clientHeight-20&&(e=document.documentElement.clientHeight-20,n=0),M.style.top=e+"px",M.style.left=t+"px"},10))}},w={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"ball"}})},staticRenderFns:[]};var T={data:function(){return{x:Math.floor(2e3*Math.random())}},methods:{displaceImage:function(){}},mounted:function(){var t=document.getElementById("canvas"),e=t.getContext("2d");t.width=window.innerWidth,t.height=window.innerHeight;var i=t.width,n=t.height;console.log(i,n);var s=new Image;function a(){e.drawImage(s,0,0,i,n);for(var t=0;t<50;t++)M()}function M(){var i=Math.round(8*Math.random()-4),n=Math.round(Math.random()*t.height),s=Math.round(4*Math.random()+10),a=e.getImageData(0,n,t.width,s);e.clearRect(0,n,t.width,s),e.putImageData(a,i,n)}s.onload=a,document.addEventListener("mousemove",a),s.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgODg3LjUgMjEyNC41IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4ODcuNSAyMTI0LjU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO30uc3Qxe2ZpbGw6IzY2RkY4Mzt9PC9zdHlsZT48cmVjdCBjbGFzcz0ic3QwIiB3aWR0aD0iODg3LjUiIGhlaWdodD0iMTA2Mi41Ii8+PHJlY3QgeD0iMCIgeT0iMTA2Mi41IiB3aWR0aD0iODg3LjUiIGhlaWdodD0iMTA2Mi41Ii8+PGc+PHBhdGggZD0iTTI0Ny4yLDkwOC40YzAsNTAtMjcuNSw3OS42LTkwLjUsNzkuNkgxNDdjLTYzLDAtOTIuMS0yOS41LTkyLjEtNzkuNnYtNzUxYzAtNTAsMjkuMS03OS42LDkyLjEtNzkuNmg5LjdjNjMsMCw5MC41LDI5LjUsOTAuNSw3OS42VjkwOC40eiBNMTU5LjksMTUxYzAtNy43LTMuMi0xMS42LTguMS0xMS42Yy02LjUsMC05LjcsMy44LTkuNywxMS42djc2Mi42YzAsNy43LDMuMiwxMS41LDkuNywxMS41YzQuOSwwLDguMS0zLjksOC4xLTExLjVWMTUxeiIvPjxwYXRoIGQ9Ik0yNTguNiw4MC40aDkyLjFsMTYuMiw4MTAuOEwzODMsODAuNGg4NC4xbC00NS4zLDkwNUgzMDUuNEwyNTguNiw4MC40eiIvPjxwYXRoIGQ9Ik02MTksODAuNHY2NC4yaC01My4zdjM0MC41aDUwLjF2NjYuN2gtNTAuMVY5MjBoNTV2NjUuNEg0ODB2LTkwNUg2MTl6Ii8+PHBhdGggZD0iTTcyMi40LDk4NS40aC04NS43di05MDVoMTM0LjJjMzMuOSwwLDUzLjMsMTkuMyw1My4zLDUwdjM0NC4zYzAsMjkuNS0xNy44LDM4LjUtMzAuNyw0Mi4zYzEyLjksMy45LDMyLjMsMTYuNywzMi4zLDQxLjF2NDA5LjNjMCw2LjQsMS42LDExLjUsMy4yLDE2Ljd2MS4zaC04NC4xYy0zLjItMi42LTQuOC03LjctNC44LTE2LjdWNTY3LjJjMC02LjQtMy4yLTktMTEuMy05aC02LjVWOTg1LjR6IE03MjIuNCw0OTIuOGg2LjVjOC4xLDAsMTEuMy0zLjgsMTEuMy0xMC4zVjE0OS43YzAtNi40LTMuMi0xMC4zLTkuNy0xMC4zaC04LjFWNDkyLjh6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMjEuNiwyMDUxLjhjLTQ2LjUsMC03MC40LTIyLTcwLjQtNjQuNnYtMzUwaDcwLjR2MzQ2LjRjMCw3LjMsMi43LDExLDYuNiwxMWM1LjMsMCw4LTMuNyw4LTExdi0zMjAuOGMwLTE5LjUtMi43LTI0LjQtMTItMzcuOEw3OS4xLDE1NzBjLTIxLjMtMjguMS0yNi42LTUwLTI2LjYtODcuOHYtMjc0LjRjMC00My45LDE3LjMtNjguMyw3MC40LTY4LjNoMTQuNmM1My4xLDAsNjcuNywyNC40LDY3LjcsNjMuNHYzMDcuNGgtNjcuN3YtMzA2LjFjMC02LjEtMi43LTguNS02LjYtOC41Yy01LjMsMC04LDIuNC04LDguNXYyODNjMCwxOS41LDIuNywyMy4yLDEyLDM2LjZsNDUuMiw1Ni4xYzI1LjIsMjkuMywyNi42LDQ4LjgsMjYuNiw4Ny44djMxNC43YzAsNDYuMy0yMy45LDY5LjUtNzAuNCw2OS41SDEyMS42eiIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMDIuMywxODM0LjdIMjgxbC01LjMsMjE0LjdoLTU5LjhsMzMuMi05MDcuNGg5M2wzMy4yLDkwNy40aC02OS4xTDMwMi4zLDE4MzQuN3ogTTI5MywxMzA3LjhsLTEwLjYsNDY1LjlIMzAxTDI5MywxMzA3Ljh6Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTQ1NSwxMTQxLjl2ODQ1LjJoNDIuNXY2Mi4ySDM4NC42di05MDcuNEg0NTV6Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTU5MC41LDE4MzQuN2gtMjEuM2wtNS4zLDIxNC43aC01OS44bDMzLjItOTA3LjRoOTNsMzMuMiw5MDcuNGgtNjkuMUw1OTAuNSwxODM0Ljd6IE01ODEuMiwxMzA3LjhsLTEwLjYsNDY1LjloMTguNkw1ODEuMiwxMzA3Ljh6Ii8+PC9nPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02NzIuOCwxMTQxLjloOTkuNmMzMy4yLDAsNTUuOCwxNy4xLDU1LjgsNTYuMXY3OTIuOGMwLDM1LjQtMTcuMyw1OC41LTUzLjEsNTguNUg2NzIuOFYxMTQxLjl6IE03NDMuMiwxOTkyaDUuM2M2LjYsMCw5LjMtNC45LDkuMy0xMy40di03NjguNGMwLTguNS0yLjctMTIuMi05LjMtMTIuMmgtNS4zVjE5OTJ6Ii8+PGc+PHJlY3QgeD0iMTUyOC42IiB5PSItMTQzMC4xIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjk3MzggLTAuMjI3MiAwLjIyNzIgMC45NzM4IDMxNS4xNDE4IDQ1Mi41MDMzKSIgY2xhc3M9InN0MSIgd2lkdGg9IjExODguNiIgaGVpZ2h0PSI1NzUuMiIvPjxnPjxnPjxwYXRoIGQ9Ik0xNjkxLjktMTI4Ny43YzczLjctMTcuMiwxMDguOSwxMi41LDEyMi4yLDY5LjJsMTIuNyw1NC4ybC05Ni45LDIyLjZsLTExLjQtNDguOGMtMi45LTEyLjItNy42LTE4LjgtMTkuOC0xNS45Yy0xMS42LDIuNy0xMy41LDEwLjktMTAuNSwyMy43bDIuNywxMS42YzQuNCwxOC45LDExLjIsMjguOSwzMi44LDQxLjJsNjIuNiwzNC4yYzU1LjUsMzEuNCw3Ni43LDU4LjYsODguMiwxMDhsNS4zLDIyLjZjMTYuNSw3MC43LTcuMSwxMjYuMy04NC41LDE0NC40bC0yMS45LDUuMWMtNzAuMSwxNi40LTExMy4zLTguOS0xMjguOC03NS4zbC0xNi45LTcyLjVsOTguNy0yM2wxNC43LDYyLjhjMy41LDE1LjIsOS44LDIyLjgsMjIuNiwxOS44YzEyLjItMi44LDE0LjMtMTMsMTAuMi0zMC42bC0yLjgtMTIuMmMtNi0yNS42LTEwLjUtMzYuOC0zNy4xLTUxLjdsLTYzLjQtMzQuN2MtNDYuNC0yNS4yLTY4LjMtNTguNi03OS4xLTEwNC45bC01LTIxLjNjLTE0LjEtNjAuMywxMi41LTEwNi40LDgzLjItMTIyLjlMMTY5MS45LTEyODcuN3oiLz48cGF0aCBkPSJNMTk4Mi0xMjMxLjRjLTQtMTcuMS0xMi4xLTI0LjItMjQuMy0yMS4zYy0xNCwzLjMtMTYuMywxMi44LTEyLjMsMjkuOWw1NC4yLDIzMi4yYzMuMywxNCwxMC4xLDIxLjQsMjQuMSwxOC4xYzEyLjgtMywxNS43LTEyLjcsMTIuNC0yNi43TDE5ODItMTIzMS40eiBNMjEzOC44LTEwMzAuMmMxOC4zLDc4LjYtMTQuNiwxMzMuMi04My40LDE0OS4zbC0xOS41LDQuNWMtNzMuNywxNy4yLTEyMy43LTE4LTE0Mi4xLTk2LjdsLTUwLjItMjE1LjFjLTE4LjItNzgsMy4xLTEzNS43LDgyLjktMTU0LjNsMTkuNS00LjZjODAuNS0xOC44LDEyNC42LDI0LjMsMTQyLjYsMTAxLjdMMjEzOC44LTEwMzAuMnoiLz48cGF0aCBkPSJNMjI0NS45LTEyOTNjLTQtMTcuMS0xMi4xLTI0LjItMjQuMy0yMS4zYy0xNCwzLjMtMTYuMywxMi44LTEyLjMsMjkuOWw1NC4yLDIzMi4yYzMuMywxNCwxMC4xLDIxLjQsMjQuMiwxOC4xYzEyLjgtMywxNS43LTEyLjcsMTIuNC0yNi43TDIyNDUuOS0xMjkzeiBNMjQwMi44LTEwOTEuOGMxOC4zLDc4LjYtMTQuNiwxMzMuMi04My40LDE0OS4zbC0xOS41LDQuNWMtNzMuOCwxNy4yLTEyMy44LTE4LTE0Mi4xLTk2LjZsLTUwLjItMjE1LjJjLTE4LjItNzgsMy0xMzUuNyw4Mi45LTE1NC4zbDE5LjUtNC41YzgwLjQtMTguOCwxMjQuNSwyNC4zLDE0Mi42LDEwMS43TDI0MDIuOC0xMDkxLjh6Ii8+PC9nPjxwb2x5Z29uIHBvaW50cz0iMjQ0MS44LC0xNDU2LjMgMjU0NC43LC0xMjQ4LjkgMjQ5My41LC0xNDY4LjQgMjU3OS41LC0xNDg4LjQgMjY4NS4zLC0xMDM1IDI1OTYuOSwtMTAxNC40IDI0ODIsLTEyMzYuOSAyNTM3LjIsLTEwMDAuNCAyNDUwLC05ODAuMSAyMzQ0LjIsLTE0MzMuNSAiLz48L2c+PC9nPjwvc3ZnPg=="}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("\n  "+this._s(this.x)+"\n  "),e("canvas",{attrs:{id:"canvas"}})])},staticRenderFns:[]};var I={components:{saladOver:i("VU/8")(y,x,!1,function(t){i("MqFa")},"data-v-2f82b026",null).exports,gyro:i("VU/8")(g,w,!1,function(t){i("fazS")},"data-v-65e21512",null).exports,canvasImage:i("VU/8")(T,h,!1,function(t){i("pGaE")},"data-v-041399ac",null).exports},data:function(){return{clicked:!1,backgroundSize:"contain",scale:1,speed:20*Math.random()}},methods:{clicMe:function(){this.clicked=!this.clicked}},computed:{computedStyle:function(){return{backgroundSize:{backgroundSize:this.backgroundSize,transform:"scale("+this.scale+")"},scale:{transform:"scale("+this.scale+")"}}}},mounted:function(){}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.clickMe}},[this.clicked?e("div",[this._l(4,function(t){return e("salad-over",{key:t})}),this._v(" "),this._m(0)],2):e("canvas-image")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("figure",[e("div",{staticClass:"open--center"})])}]};var D=i("VU/8")(I,m,!1,function(t){i("vWAa")},"data-v-0c268d00",null).exports,_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("link",{attrs:{href:"https://fonts.googleapis.com/css?family=PT+Mono&subset=cyrillic",rel:"stylesheet"}}),t._v(" "),i("div",[i("h2",{staticClass:"box title--week"},[t._v("🌍 неделя #3")])]),t._v(" "),i("div",{staticClass:"homework"},[i("h1",{staticClass:"box blended"},[t._v("Домашнее задание")]),t._v(" "),i("div",[i("ul",{staticClass:"box list"},[i("li",[t._v("Буква")]),t._v(" "),i("li",[t._v("Слово")]),t._v(" "),i("li",[t._v("Предложение")]),t._v(" "),i("li",[t._v("Абзац")]),t._v(" "),i("li",[t._v("Текст (2+ абзаца)")]),t._v(" "),i("li",[t._v("Список всех предыдущих ")])])])]),t._v(" "),i("div",[i("h2",{staticClass:"box blended"},[t._v("Полезные ссылки")]),t._v(" "),i("div",[i("ul",{staticClass:"box list"},[i("li",[i("a",{attrs:{target:"_blank",href:"https://webref.ru/css"}},[t._v("справочник CSS")])]),t._v(" "),i("li",[i("a",{attrs:{target:"_blank",href:"https://webref.ru/html"}},[t._v("справочник HTML")])]),t._v(" "),i("li",[i("a",{attrs:{target:"_blank",href:"https://fonts.google.com"}},[t._v("Google Fonts")])]),t._v(" "),i("li",[i("a",{attrs:{target:"_blank",href:"https://htmlacademy.ru/courses/4/run/1"}},[t._v("Я ничего не понимаю!")])])])])]),t._v(" "),i("div",[i("h2",{staticClass:"box blended"},[t._v("Необходимые программы")]),t._v(" "),i("div",[i("ul",{staticClass:"box list"},[i("li",[i("a",{attrs:{target:"_blank",href:"https://code.visualstudio.com/"}},[t._v("Visual Studio Code")])]),t._v(" "),i("li",[i("a",{attrs:{target:"_blank",href:"https://desktop.github.com/"}},[t._v("Github Desktop")])]),t._v(" "),i("li",[i("a",{attrs:{target:"_blank",href:"https://www.google.com/chrome/canary/"}},[t._v("Google Chrome")])])])])]),t._v(" "),i("div",[i("h2",{staticClass:"box blended"},[t._v("Материал недели")]),t._v(" "),i("div",[i("ul",{staticClass:"box list"},[i("li",[t._v("Интерфейс Visual Studio Code. Сниппеты и расширения")]),t._v(" "),i("li",[t._v("Основа веб страницы")]),t._v(" "),i("li",[t._v("Основные html теги. Линейные. Блочные")]),t._v(" "),i("li",[t._v("Основа CSS. Внутренние и внешние отступы. Форматирование текста")]),t._v(" "),i("li",[t._v("Селекторы. По тегу. По классу")])])])]),t._v(" "),i("div",[i("h2",{staticClass:"box blended"},[t._v("Вдохновение")]),t._v(" "),i("div",[i("div",{staticClass:"box"},[t._v("\n        ❝◐◑❞\n        "),i("ul",{staticClass:"list"},[i("li",[i("a",{attrs:{target:"_blank",href:"https://www.typewolf.com/site-of-the-day"}},[t._v("Typewolf")])]),t._v(" "),i("li",[i("a",{attrs:{target:"_blank",href:"https://hoverstat.es/"}},[t._v("Hover States")])]),t._v(" "),i("li",[i("a",{attrs:{target:"_blank",href:"http://www.ecogex.com/delectable/"}},[t._v("Delectable")])])]),t._v("\n        ❝◐◑❞\n        "),i("ul",{staticClass:"list"},[i("li",[i("a",{attrs:{target:"_blank",href:"https://butdoesitfloat.com/Index"}},[t._v("But Does It Float")])]),t._v(" "),i("li",[i("a",{attrs:{target:"_blank",href:"https://www.itsnicethat.com/"}},[t._v("It's Nice That")])]),t._v(" "),i("li",[i("a",{attrs:{target:"_blank",href:"https://eyeondesign.aiga.org/"}},[t._v("AIGA Eye on Design")])]),t._v(" "),i("li",[i("a",{attrs:{target:"_blank",href:"http://www.manystuff.org/"}},[t._v("Manystuff")])]),t._v(" "),i("li",[i("a",{attrs:{target:"_blank",href:"http://www.rawcolor.nl/welcome/"}},[t._v("Raw Color")])])])])])])])}]};var z=i("VU/8")({data:function(){return{}},mounted:function(){},components:{}},_,!1,function(t){i("aBTP")},"data-v-e6c3e2e6",null).exports;n.a.use(c.a);var C=new c.a({routes:[{path:"/",component:r},{path:"/1",component:L},{path:"/2",component:j},{path:"/3",component:v},{path:"/4",component:D},{path:"/howtomakewebsites",component:z}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:C,components:{App:u},template:"<App/>"})},NTgr:function(t,e){},R5Mu:function(t,e,i){t.exports=i.p+"static/img/2018-11-20 21.09.16.cb9809e.jpg"},aBTP:function(t,e){},aEwg:function(t,e){},fazS:function(t,e){},lZeI:function(t,e){},pGaE:function(t,e){},"t+Zp":function(t,e){},vWAa:function(t,e){},vbJp:function(t,e){}},["NHnr"]);