(function(t){function e(e){for(var r,o,s=e[0],i=e[1],u=e[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],r=!0,s=1;s<a.length;s++){var i=a[s];0!==n[i]&&(r=!1)}r&&(c.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},c=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/Interactive-weather-website/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=i;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"06b8":function(t,e,a){"use strict";var r=a("cf85"),n=a.n(r);n.a},"116c":function(t,e,a){},"1f02":function(t,e,a){},"20d5":function(t,e,a){},"23b7":function(t,e,a){"use strict";var r=a("116c"),n=a.n(r);n.a},"4c00":function(t,e,a){"use strict";var r=a("1f02"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"day-box"},[a("cLoading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"top",style:t.styleTopBackground},[t.darkDay?a("div",{staticClass:"moon"}):t._e(),a("div",{staticClass:"weather"},[t.showWeatherIcon("rain")?a("div",{staticClass:"raining"},[a("div",{staticClass:"rain"}),a("div",{staticClass:"rain rain2"}),a("div",{staticClass:"rain rain3"})]):t._e(),t.showWeatherIcon("sun")?a("div",{staticClass:"sun"},[a("svg",{attrs:{viewBox:"-75 -75 150 150"}},[a("circle",{attrs:{cx:"0",cy:"0",r:"45"}})])]):t._e(),t.showWeatherIcon("sun-cloud")?a("div",{staticClass:"sun-cloud"},[a("svg",{attrs:{viewBox:"-75 -75 150 150"}},[a("circle",{attrs:{cx:"20",cy:"-10",r:"30"}}),a("g",[a("circle",{attrs:{cx:"10",cy:"10",r:"25"}}),a("circle",{attrs:{cx:"-20",cy:"0",r:"25"}}),a("circle",{attrs:{cx:"-30",cy:"25",r:"25"}}),a("circle",{attrs:{cx:"30",cy:"25",r:"25"}}),a("rect",{attrs:{x:"-30",y:"0",width:"60",height:"50"}})])])]):t._e(),t.showWeatherIcon("cloud")?a("div",{staticClass:"cloud"},[a("svg",{attrs:{viewBox:"-75 -75 150 150"}},[a("g",[a("circle",{attrs:{cx:"10",cy:"0",r:"25"}}),a("circle",{attrs:{cx:"-20",cy:"-10",r:"25"}}),a("circle",{attrs:{cx:"-30",cy:"15",r:"25"}}),a("circle",{attrs:{cx:"30",cy:"15",r:"25"}}),a("rect",{attrs:{x:"-30",y:"-10",width:"60",height:"50"}})])])]):t._e()]),a("svg",{staticClass:"tem-svg"},t._l(t.points,(function(e,r){return a("g",{key:r},[a("circle",{attrs:{cx:e.x,cy:t.tmpLineY(r),r:"3"}}),a("text",{attrs:{x:e.x,y:t.tmpLineY(r)}},[t._v(t._s(e.value)+"°")]),r!==t.points.length-1?a("line",{attrs:{x1:t.points[r].x,y1:t.tmpLineY(r),x2:t.points[r+1].x,y2:t.tmpLineY(r+1)}}):t._e()])})),0),a("div",{staticClass:"text-area"},[t.weatherData?[a("div",{staticClass:"temperature"},[t._v(t._s(t.weatherData[0].date))]),a("div",{staticClass:"info"},[a("div",{staticClass:"address"},[t._v(t._s(t.location))]),a("div",{staticClass:"time"},[t._v("星期"+t._s(t.dataToTraditional(t.weatherData[0].day)))])])]:t._e()],2)]),a("div",{staticClass:"bottom"},t._l(t.weatherData,(function(e,r){return t.weatherData?a(t.currentWeather(r),{key:r,tag:"component",attrs:{day:t.dateToString(e.day)}}):t._e()})),1)],1)])},c=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loading-box",class:!0===t.active?"":"un-active"},[a("svg",{staticClass:"loading",attrs:{viewBox:"0 0 24 30"}},[a("rect",{attrs:{x:"0",y:"0",width:"4",height:"10"}},[a("animateTransform",{attrs:{attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})],1),a("rect",{attrs:{x:"10",y:"0",width:"4",height:"10"}},[a("animateTransform",{attrs:{attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0.2s",dur:"0.6s",repeatCount:"indefinite"}})],1),a("rect",{attrs:{x:"20",y:"0",width:"4",height:"10"}},[a("animateTransform",{attrs:{attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0.4s",dur:"0.6s",repeatCount:"indefinite"}})],1)])])},s=[],i={name:"cLoading",props:{active:{type:Boolean,default:!1}},components:{},data:function(){return{}},methods:{},computed:{},beforeCreate:function(){},created:function(){},beforeMounted:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},Destroy:function(){}},u=i,l=(a("5ffa"),a("2877")),d=Object(l["a"])(u,o,s,!1,null,"a8186836",null),f=d.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"day-weather"},[a("h3",[t._v(t._s(t.day))]),a("svg",{attrs:{viewBox:"-50,-50,100,100"}},[a("circle",{staticClass:"sun",attrs:{cx:"0",cy:"0",r:"22"}})])])},h=[],v={name:"cDayWeather-sun",props:{day:{type:String,required:!0}},components:{},data:function(){return{}},methods:{},computed:{},beforeCreate:function(){},created:function(){},beforeMounted:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},Destroy:function(){}},y=v,g=(a("9091"),Object(l["a"])(y,p,h,!1,null,"4b0b2516",null)),b=g.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"day-weather"},[a("h3",[t._v(t._s(t.day))]),a("svg",{attrs:{viewBox:"-63,-30,100,100"}},[a("line",{staticClass:"rain",attrs:{x1:"-35",y1:"15",x2:"-35",y2:"35"}}),a("line",{staticClass:"rain rain2",attrs:{x1:"-14",y1:"5",x2:"-14",y2:"25"}}),a("line",{staticClass:"rain rain3",attrs:{x1:"0",y1:"20",x2:"0",y2:"45"}}),a("circle",{staticClass:"cloud",attrs:{cx:"0",cy:"30",r:"20"}}),a("circle",{staticClass:"cloud",attrs:{cx:"-15",cy:"30",r:"20"}}),a("circle",{staticClass:"cloud",attrs:{cx:"-30",cy:"30",r:"20"}}),a("circle",{staticClass:"cloud",attrs:{cx:"-25",cy:"10",r:"15"}}),a("circle",{staticClass:"cloud",attrs:{cx:"-7",cy:"15",r:"15"}})])])},x=[],C={name:"cDayWeather-rain",props:{day:{type:String,required:!0}},components:{},data:function(){return{}},methods:{},computed:{},beforeCreate:function(){},created:function(){},beforeMounted:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},Destroy:function(){}},w=C,_=(a("06b8"),Object(l["a"])(w,m,x,!1,null,"2fd4ba9c",null)),D=_.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"day-weather"},[a("h3",[t._v(t._s(t.day))]),a("svg",{attrs:{viewBox:"-63,-30,100,100"}},[a("circle",{staticClass:"cloud",attrs:{cx:"0",cy:"30",r:"20"}}),a("circle",{staticClass:"cloud",attrs:{cx:"-15",cy:"30",r:"20"}}),a("circle",{staticClass:"cloud",attrs:{cx:"-30",cy:"30",r:"20"}}),a("circle",{staticClass:"cloud",attrs:{cx:"-25",cy:"10",r:"15"}}),a("circle",{staticClass:"cloud",attrs:{cx:"-7",cy:"15",r:"15"}})])])},k=[],T={name:"cDayWeather-cloud",props:{day:{type:String,required:!0}},components:{},data:function(){return{}},methods:{},computed:{},beforeCreate:function(){},created:function(){},beforeMounted:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},Destroy:function(){}},O=T,S=(a("4c00"),Object(l["a"])(O,W,k,!1,null,"2033ba02",null)),M=S.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"day-weather"},[a("h3",[t._v(t._s(t.day))]),a("svg",{attrs:{viewBox:"-50,-50,100,100"}},[a("circle",{staticClass:"sun",attrs:{cx:"0",cy:"0",r:"22"}}),a("circle",{staticClass:"cloud",attrs:{cx:"0",cy:"30",r:"20"}}),a("circle",{staticClass:"cloud",attrs:{cx:"-15",cy:"30",r:"20"}}),a("circle",{staticClass:"cloud",attrs:{cx:"-30",cy:"30",r:"20"}}),a("circle",{staticClass:"cloud",attrs:{cx:"-25",cy:"10",r:"15"}}),a("circle",{staticClass:"cloud",attrs:{cx:"-7",cy:"15",r:"15"}})])])},I=[],B={name:"cDayWeather-sun-cloud",props:{day:{type:String,required:!0}},components:{},data:function(){return{}},methods:{},computed:{},beforeCreate:function(){},created:function(){},beforeMounted:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},Destroy:function(){}},L=B,E=(a("23b7"),Object(l["a"])(L,j,I,!1,null,"4ececc84",null)),P=E.exports,U={name:"vApp",props:{},components:{cLoading:f,cDayWeatherSun:b,cDayWeatherRain:D,cDayWeatherCloud:M,cDayWeatherSunCloud:P},data:function(){return{points:[{x:0,value:20},{x:0,value:23},{x:0,value:28},{x:0,value:27.5},{x:0,value:22},{x:0,value:29},{x:0,value:20}],desktopPoints:[40,90,140,190,240,290,340],loading:{weather:!1,temperature:!1},dateConvertString:["SUN","MON","TUE","WED","THU","FRI","SAT"],dateConvertTraditional:["日","一","二","三","四","五","六"],weatherData:null,curWeather:null,location:null,darkDay:!1,deviceIsMobile:!0}},methods:{getWeatherCallback:function(){var t=this;t.loading.weather=!0,t.axios({method:"get",url:"".concat("https://vue-weather-server.herokuapp.comnpm","/get-weather")}).then((function(e){switch(console.log("Weather: ",e),t.loading.weather=!1,t.weatherData=e.data.data,t.location=e.data.location,parseInt(t.weatherData[0].value,10)){case 1:t.curWeather="sun";break;case 2:case 3:t.curWeather="sun-cloud";break;case 4:case 5:case 6:case 7:t.curWeather="cloud";break;default:t.curWeather="rain";break}})).catch((function(e){t.loading.weather=!1,console.error(e)}))},getTemperatureCallback:function(){var t=this;t.loading.temperature=!0,t.axios({method:"get",url:"".concat("https://vue-weather-server.herokuapp.comnpm","/get-temperature")}).then((function(e){console.log("Temperature: ",e),t.loading.temperature=!1;for(var a=0;a<e.data.data.length;a+=1){var r=parseInt(e.data.data[a].value,10);t.points[a].value=r}})).catch((function(e){t.loading.temperature=!1,console.error(e)}))}},computed:{isLoading:{get:function(){var t=this;return t.loading.temperature||t.loading.weather}},tmpLineY:{get:function(){var t=this;return function(e){var a=Math.abs(30),r=Math.abs(-50);return 100-t.points[e].value/a*r}}},currentWeather:{get:function(){var t=this;return function(e){var a=parseInt(t.weatherData[e].value,10);switch(a){case 1:return"cDayWeather-sun";case 2:case 3:return"cDayWeather-sun-cloud";case 4:case 5:case 6:case 7:return"cDayWeather-cloud";default:return"cDayWeather-rain"}}}},showWeatherIcon:{get:function(){var t=this;return function(e){return t.curWeather===e}}},dateToString:{get:function(){var t=this;return function(e){return t.dateConvertString[e]}}},dataToTraditional:{get:function(){var t=this;return function(e){return t.dateConvertTraditional[e]}}},styleTopBackground:{get:function(){var t=new Date,e=t.getHours(),a=e/24;return{"background-position-x":"".concat(100*a,"%")}}}},beforeCreate:function(){},created:function(){},beforeMounted:function(){},mounted:function(){var t=this;t.getWeatherCallback(),t.getTemperatureCallback();var e=new Date;function a(){try{return document.createEvent("TouchEvent"),!0}catch(t){return!1}}if((e.getHours()>=18||e.getHours()<6)&&(t.darkDay=!0),a()){t.deviceIsMobile=!0;for(var r=0;r<t.points.length;r+=1)t.points[r].x=t.desktopPoints[r]-12}else{t.deviceIsMobile=!1;for(var n=0;n<t.points.length;n+=1)t.points[n].x=t.desktopPoints[n]}},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},Destroy:function(){}},$=U,N=(a("a6e9"),Object(l["a"])($,n,c,!1,null,null,null)),Y=N.exports,q=a("bc3a"),H=a.n(q),A=a("a7fe"),J=a.n(A);r["a"].use(J.a,H.a),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(Y)}}).$mount("#app")},"5ffa":function(t,e,a){"use strict";var r=a("9bdf"),n=a.n(r);n.a},9091:function(t,e,a){"use strict";var r=a("bd77"),n=a.n(r);n.a},"9bdf":function(t,e,a){},a6e9:function(t,e,a){"use strict";var r=a("20d5"),n=a.n(r);n.a},bd77:function(t,e,a){},cf85:function(t,e,a){}});
//# sourceMappingURL=app.c4fbd094.js.map