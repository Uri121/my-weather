(this["webpackJsonpmy-weather"]=this["webpackJsonpmy-weather"]||[]).push([[0],{10:function(e,t,a){e.exports=a(24)},15:function(e,t,a){},18:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),o=a.n(c),i=(a(15),a(1)),s=a.n(i),l=a(2),m=a(5),u=a(6),d=a(8),h=a(7),f=a(9),p=(a(17),a(18),a(19));var y=function(e){var t=e.reading,a=new Date,r=1e3*t.dt;a.setTime(r);var c,o=function(e){var t;switch(!0){case e>=200&&e<=232:t="wi-thunderstorm";break;case e>=300&&e<=321:t="wi-sleet";break;case e>=500&&e<=531:t="wi-storm-showers";break;case e>=600&&e<=622:t="wi-snow";break;case e>=701&&e<=781:t="wi-fog";break;case 800===e:t="wi-day-sunny";break;case e>=801&&e<=804:t="wi-day-fog";break;default:t="wi-day-fog"}return t}(t.weather[0].id);return n.a.createElement("div",{className:"col-2 mr-4"},n.a.createElement("div",{className:"card"},n.a.createElement("h3",{className:"card-header"},p(a).format("dddd")),n.a.createElement("p",{className:"text-muted pb-2 pt-2"},p(a).format("MMMM Do")),n.a.createElement("i",{className:"wi ".concat(o," display-4")}),n.a.createElement("h3",{className:"pt-4"},(c=t.main.temp,Math.floor(c-275.15)),"\xb0"),n.a.createElement("p",{className:"card-text pb-10"},t.weather[0].description)))};a(21),a(22);var v=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",null,e.error?n.a.createElement("div",{className:"alert alert-danger max-5",role:"alert"},"Please enter a vaild city"):null),n.a.createElement("form",{onSubmit:e.loadWeather},n.a.createElement("div",{className:"row"},n.a.createElement("div",null,n.a.createElement("input",{className:"form-control",type:"text",name:"city",placeholder:"City",autoComplete:"on"})),n.a.createElement("div",{className:"ml-3 text-md-left"},n.a.createElement("button",{className:"btn btn-light"},"Get Weather")))))},w=(a(23),"03682cacdb4175e38fb2811f90b98410"),b=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).getWeather=function(){var t=Object(l.a)(s.a.mark((function t(a){var r,n,c,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a.preventDefault(),r=a.target.elements.city.value,t.next=5,fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(r,"&appid=").concat(w));case 5:return n=t.sent,t.next=8,n.json();case 8:c=t.sent,o=c.list.filter((function(e){return e.dt_txt.includes("18:00:00")})),e.setState({city:c.city.name,error:!1,fullData:c.list,dailyData:o}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),e.setState({error:!0,city:void 0});case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}(),e.getWeatherWithLatLng=function(){var t=Object(l.a)(s.a.mark((function t(a){var r,n,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(a.coords.latitude,"&lon=").concat(a.coords.longitude,"&appid=").concat(w));case 2:return r=t.sent,t.next=5,r.json();case 5:n=t.sent,c=n.list.filter((function(e){return e.dt_txt.includes("18:00:00")})),e.setState({city:n.city.name,error:!1,fullData:n.list,dailyData:c});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleCheckbox=function(t){!0===t.target.checked?(e.setState({check:t.target.checked}),e.getLocation()):e.setState({city:void 0,error:!1,fullData:[],dailyData:[],check:t.target.checked})},e.formatDayCards=function(){return e.state.dailyData.map((function(e,t){return n.a.createElement(y,{reading:e,key:t})}))},e.state={city:void 0,error:!1,check:!1,weatherIcon:void 0,fullData:[],dailyData:[]},e.weatherIcon={Thunderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-storm-showers",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},e}return Object(f.a)(t,e),Object(u.a)(t,[{key:"getLocation",value:function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(this.getWeatherWithLatLng)}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"box-1"},n.a.createElement("div",{className:"custom-control custom-checkbox"},n.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"locationCheck",onChange:this.handleCheckbox}),n.a.createElement("label",{className:"custom-control-label",htmlFor:"locationCheck",style:{color:"white"}},"Get Location"))),n.a.createElement("div",{className:"box-2"},n.a.createElement(v,{loadWeather:this.getWeather,error:this.state.error})),this.state.city?n.a.createElement("h2",{className:"city-header"},this.state.city):null,this.state.city?n.a.createElement("div",{className:"row justify-content-center"},this.formatDayCards()):null))}}]),t}(r.Component);o.a.render(n.a.createElement(b,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.de539acd.chunk.js.map