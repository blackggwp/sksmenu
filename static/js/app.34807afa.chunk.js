(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{285:function(e,t,n){"use strict";n(442);var a=n(0),r=n.n(a),o=n(90),c=n(3),i=n(17),l=n(232),m=n(452),u=n(28),s=n(153),f=n(47),g=n(29),d=(n(441),n(2)),E=n(35).a.get("window"),h=E.width,v=E.height,y=h<v?h:v,p=d.a.create({container:{flex:1,justifyContent:"center",alignItems:"center",marginLeft:20,marginTop:20,width:(y-60)/2,height:225,borderColor:"#cccccc",borderWidth:.5,borderRadius:15},photo:{width:(y-60)/2,height:150,borderRadius:15,borderBottomLeftRadius:0,borderBottomRightRadius:0},title:{flex:1,fontSize:17,fontWeight:"bold",textAlign:"center",color:"#444444",marginTop:3,marginRight:5,marginLeft:5},category:{marginTop:5,marginBottom:5}}),b=d.a.create({container:p.container,photo:p.photo,title:p.title,category:p.category});function k(){return r.a.createElement(c.a,null,r.a.createElement(s.a,{vertical:!0,showsVerticalScrollIndicator:!1,numColumns:2,data:w,renderItem:function(e){var t=e.item;return r.a.createElement(g.a,null,r.a.createElement(f.a,{underlayColor:"rgba(73,182,77,0.9)"},r.a.createElement(c.a,{style:{flex:1,margin:10}},r.a.createElement(u.a,{style:{height:100,width:100,borderRadius:15,borderBottomLeftRadius:0,borderBottomRightRadius:0},source:{uri:t.photo_url}}),r.a.createElement(i.a,{style:b.name},t.name))))},keyExtractor:function(e){return""+e.name},contentContainerStyle:b.container}))}for(var w=[],x=0;x<10;x++)w.push({name:"Menu"+x,photo_url:"https://di262mgurvkjm.cloudfront.net/9b5ef465-0f21-4abd-80b3-866a7b1364f0/CFR230520-9_xlarge.jpg"});function C(e){var t=e.navigation;return r.a.createElement(c.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},r.a.createElement(i.a,null,"Home Screen"),r.a.createElement(c.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},r.a.createElement(o.a,{title:"Sukishi My New Normal",onPress:function(){return t.navigate("Normal")}})),r.a.createElement(c.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},r.a.createElement(o.a,{title:"Overload Comeback",onPress:function(){return t.navigate("Overload")}})),r.a.createElement(c.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},r.a.createElement(o.a,{title:"Promotion",onPress:function(){return t.navigate("Promotion")}})))}function j(e){var t=e.navigation;return r.a.createElement(c.a,{style:{alignItems:"center",justifyContent:"center"}},r.a.createElement(i.a,null,"Normal Screen"),r.a.createElement(k,null),r.a.createElement(o.a,{title:"Go back",onPress:function(){return t.goBack()}}))}function R(e){var t=e.navigation;return r.a.createElement(c.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},r.a.createElement(i.a,null,"Overload Screen"),r.a.createElement(k,null),r.a.createElement(o.a,{title:"Go back",onPress:function(){return t.goBack()}}))}function S(e){var t=e.navigation;return r.a.createElement(c.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},r.a.createElement(i.a,null,"Promotion Screen"),r.a.createElement(k,null),r.a.createElement(o.a,{title:"Go back",onPress:function(){return t.goBack()}}))}var I=Object(m.a)();t.a=function(){return r.a.createElement(l.a,null,r.a.createElement(I.Navigator,{initialRouteName:"Home"},r.a.createElement(I.Screen,{name:"Home",component:C}),r.a.createElement(I.Screen,{name:"Normal",component:j}),r.a.createElement(I.Screen,{name:"Overload",component:R}),r.a.createElement(I.Screen,{name:"Promotion",component:S})))}},293:function(e,t,n){n(294),e.exports=n(443)},294:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/sksmenu/expo-service-worker.js",{scope:"/sksmenu/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[293,1,2]]]);
//# sourceMappingURL=app.34807afa.chunk.js.map