(this["webpackJsonpmajidata-gis"]=this["webpackJsonpmajidata-gis"]||[]).push([[0],{200:function(e,t,n){},205:function(e,t){},207:function(e,t){},230:function(e,t,n){},231:function(e,t,n){},301:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(176),s=n.n(o),c=(n(200),n(9)),i=n(177),l=n(136),u=n(62),p=n(109),f=n(187),m=n(190),v=n(142),d=n(141),w=n(155),b=n(108),g=n(135),y=n(184),j=n(185),h=n(186),O=n(192),S=n(61),E=n(178),x=n.n(E),A=n(42),L=(n(228),n(229),n(230),n(306)),_=(n(231),n(54)),R=function(e){var t=e.options;return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(L.a,{className:"layer-select-component",showSearch:!0,clearIcon:!0,placeholder:"Select a layer to edit",optionFilterProp:"children",size:"large",onChange:function(e){console.log("selected ".concat(e))},onSearch:function(e){console.log("search:",e)},filterOption:function(e,t){var n;return(null!==(n=null===t||void 0===t?void 0:t.label)&&void 0!==n?n:"").toLowerCase().includes(e.toLowerCase())},options:t})})},B=function(e){var t=Object(a.useState)(),n=Object(c.a)(t,2),r=n[0],o=n[1],s=Object(a.useState)(),E=Object(c.a)(s,2),L=(E[0],E[1]),B=Object(a.useState)(),C=Object(c.a)(B,2),N=C[0],W=C[1],F=Object(a.useRef)();Object(a.useRef)().current=r;var T=new S.default({title:"Base Maps",fold:"open",layers:[new p.a({title:"Standard",type:"base",visible:!0,opacity:1,source:new w.a}),new p.a({title:"Aerial",type:"base",visible:!1,source:new b.a({url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",maxZoom:19})}),new p.a({title:"Topography",type:"base",visible:!1,source:new b.a({url:"https://tile.opentopomap.org/{z}/{x}/{y}.png"})})]}),I=new S.default({title:"Administrative Boundaries",layers:[new v.a({title:"Kenya Boundary",source:new d.a({crossOrigin:"anonymous",url:"http://102.37.157.16:8080/geoserver/wms",params:{LAYERS:"WASREB:country"},ratio:1,serverType:"geoserver"})}),new v.a({title:"Counties",source:new d.a({crossOrigin:"anonymous",url:"http://102.37.157.16:8080/geoserver/wms",params:{LAYERS:"WASREB:county"},ratio:1,serverType:"geoserver"})})]}),z=new S.default({title:"WASREB Layers",layers:[]});return Object(a.useEffect)((function(){var e=new f.a({source:new m.a}),t=new l.a({layers:[T,I],view:new u.a({projection:"EPSG:4326",center:[37.68,.5],zoom:7}),target:F.current,controls:[new g.a({className:"map-zoom"}),new y.a({className:"map-fullscreen"}),new j.a({minWidth:100}),new h.a({className:"mouse-position",coordinateFormat:function(e){return Object(A.c)(e,"Lon {x}, Lat {y}",4)},projection:"EPSG:4326"}),new O.a({layers:[new p.a({source:new w.a})]})]});o(t),L(e);var n=new x.a({reverse:!0,groupSelectStyle:"group"});return t.addControl(n),function(){t.setTarget(null)}}),[]),Object(a.useEffect)((function(){var e=[];fetch("http://102.37.157.16:8080/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities&namespace=KIAWASCO&authkey=bad69a50-fb45-4a47-9079-ac540c58893c").then((function(e){return e.text()})).then((function(t){var n=Object(i.xml2json)(t);JSON.parse(n).elements[0].elements[1].elements[2].elements.forEach((function(t){if("Layer"==t.name){var n=t.elements[0].elements[0].text;e.push(n)}})),W(e)})).catch((function(e){return console.log(e)}))}),[]),Object(a.useEffect)((function(){if(N){N.forEach((function(e){console.log(JSON.stringify(e));var t=new v.a({title:"".concat(e),source:new d.a({crossOrigin:"anonymous",url:"http://102.37.157.16:8080/geoserver/wms",params:{LAYERS:"".concat(e)},ratio:1,serverType:"geoserver"})});z.getLayers().array_.push(t)})),r.addLayer(z)}return function(){r&&r.removeLayer(z)}}),[N]),Object(_.jsx)("div",{ref:F,className:"map-container",children:Object(_.jsx)(R,{options:[{value:"WASREB:low_income_area_edit",label:"low_income_area_edit"},{value:"WASREB:licensed_service_area",label:"licensed_service_area"}]})})};var C=function(){return Object(_.jsx)("div",{className:"App",children:Object(_.jsx)(B,{})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,307)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};s.a.createRoot(document.getElementById("root")).render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(C,{})})),N()}},[[301,1,2]]]);
//# sourceMappingURL=main.247c1835.chunk.js.map