(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{286:function(e,t,n){"use strict";n(442);var a=n(0),r=n.n(a),o=n(90),c=n(3),l=n(17),i=n(233),m=n(452),u=n(26),s=n(101),f=n(46),g=n(29),d=(n(231),n(2)),E=n(35).a.get("window"),h=E.width,v=E.height,y=h<v?h:v,p=d.a.create({container:{flex:1,justifyContent:"center",alignItems:"center",marginLeft:20,marginTop:20,width:(y-60)/2,height:225,borderColor:"#cccccc",borderWidth:.5,borderRadius:15},photo:{width:(y-60)/2,height:150,borderRadius:15,borderBottomLeftRadius:0,borderBottomRightRadius:0},title:{flex:1,fontSize:17,fontWeight:"bold",textAlign:"center",color:"#444444",marginTop:3,marginRight:5,marginLeft:5},category:{marginTop:5,marginBottom:5}}),b=d.a.create({container:p.container,photo:p.photo,title:p.title,category:p.category});function k(){return r.a.createElement(c.a,null,r.a.createElement(s.a,{vertical:!0,showsVerticalScrollIndicator:!1,numColumns:2,data:C,renderItem:function(e){var t=e.item;return r.a.createElement(g.a,null,r.a.createElement(f.a,{underlayColor:"rgba(73,182,77,0.9)"},r.a.createElement(c.a,{style:{flex:1,margin:10}},r.a.createElement(u.a,{style:{height:100,width:100,borderRadius:15,borderBottomLeftRadius:0,borderBottomRightRadius:0},source:{uri:t.photo_url}}),r.a.createElement(l.a,{style:b.name},t.name))))},keyExtractor:function(e){return""+e.name},contentContainerStyle:b.container}))}for(var C=[],w=0;w<10;w++)C.push({name:"Menu"+w,photo_url:"https://di262mgurvkjm.cloudfront.net/9b5ef465-0f21-4abd-80b3-866a7b1364f0/CFR230520-9_xlarge.jpg"});function x(){return r.a.createElement(c.a,null,r.a.createElement(s.a,{vertical:!0,showsVerticalScrollIndicator:!1,numColumns:1,data:j,renderItem:function(e){var t=e.item;return r.a.createElement(c.a,{style:{alignItems:"center",justifyContent:"center"}},r.a.createElement(u.a,{style:{height:800,width:300},source:{uri:t.photo_url}}),r.a.createElement(l.a,{style:b.name},t.name))},keyExtractor:function(e){return""+e.name}}))}for(var j=[],I=0;I<1;I++)j.push({name:"Menu"+I,photo_url:"https://di262mgurvkjm.cloudfront.net/9b5ef465-0f21-4abd-80b3-866a7b1364f0/CFR230520-9_xlarge.jpg"});function R(e){var t=e.navigation;return r.a.createElement(c.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},r.a.createElement(l.a,null,"Home Screen"),r.a.createElement(c.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},r.a.createElement(o.a,{title:"Sukishi My New Normal",onPress:function(){return t.navigate("Normal")}})),r.a.createElement(c.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},r.a.createElement(o.a,{title:"Overload Comeback",onPress:function(){return t.navigate("Overload")}})),r.a.createElement(c.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},r.a.createElement(o.a,{title:"Promotion",onPress:function(){return t.navigate("Promotion")}})))}function S(e){var t=e.navigation;return r.a.createElement(c.a,null,r.a.createElement(c.a,{style:{alignItems:"center",justifyContent:"center"}},r.a.createElement(l.a,null,"Normal Screen")),r.a.createElement(x,null),r.a.createElement(o.a,{title:"Go back",onPress:function(){return t.goBack()}}))}function P(e){var t=e.navigation;return r.a.createElement(c.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},r.a.createElement(l.a,null,"Overload Screen"),r.a.createElement(k,null),r.a.createElement(o.a,{title:"Go back",onPress:function(){return t.goBack()}}))}function B(e){var t=e.navigation;return r.a.createElement(c.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},r.a.createElement(l.a,null,"Promotion Screen"),r.a.createElement(k,null),r.a.createElement(o.a,{title:"Go back",onPress:function(){return t.goBack()}}))}var N=Object(m.a)();t.a=function(){return r.a.createElement(i.a,null,r.a.createElement(N.Navigator,{initialRouteName:"Home"},r.a.createElement(N.Screen,{name:"Home",component:R}),r.a.createElement(N.Screen,{name:"Normal",component:S}),r.a.createElement(N.Screen,{name:"Overload",component:P}),r.a.createElement(N.Screen,{name:"Promotion",component:B})))}},294:function(e,t,n){n(295),e.exports=n(443)},295:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/sksmenu/expo-service-worker.js",{scope:"/sksmenu/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[294,1,2]]]);
//# sourceMappingURL=app.1e3d2a77.chunk.js.map