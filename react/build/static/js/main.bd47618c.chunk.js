(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(57)},32:function(e,t,n){},33:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),i=n.n(r),c=(n(32),n(3)),u=n(4),s=n(6),l=n(5),p=n(7),m=(n(33),n(20)),d=n(10),h=n.n(d),v=(n(34),n(22)),f=n(21),w=n.n(f);function b(){var e=Object(m.a)(["\n  width: $(props -> props.width);\n  height: $(props -> props.height);\n"]);return b=function(){return e},e}var j=v.a.div(b()),O=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"dataLoader",value:function(){}},{key:"componentDidMount",value:function(){var e=this;this.map=h.a.map("map",{center:{lat:37.77,lng:-122.43},zoom:15,zoomControl:!1}),h.a.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",{detectRetina:!0,maxZoom:20,maxNativeZoom:17}).addTo(this.map),setTimeout(function(){return e.map.invalidateSize()},10),w.a.get("localhost:8080/api/comma-data").then(function(e){console.log("DATA",e)})}},{key:"render",value:function(){return o.a.createElement(j,{id:"map"})}}]),t}(a.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(O,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.bd47618c.chunk.js.map