async function e(e="8.8.8.8"){const n=await fetch(`\n        https://geo.ipify.org/api/v2/country,city?apiKey=at_arxAosnBG7doMiAY0SuQ0Bwg8lnxb&ipAddress=${e}`);return await n.json()}const n=document.querySelector(".search-bar__input"),t=document.querySelector("button");document.addEventListener("DOMContentLoaded",u(52.6,-2));const o=document.querySelector("#ip"),i=document.querySelector("#location"),a=document.querySelector("#timezone"),r=document.querySelector("#isp");function c(){var t;t=n.value,(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(t)||(alert("You have to enter a valid IP addres"),0))&&e(n.value).then(d)}function u(e,n){const t=new google.maps.Map(document.getElementById("map"),{center:{lat:e,lng:n},zoom:9});new google.maps.InfoWindow;window.setTimeout((()=>{new google.maps.Marker({position:{lat:e,lng:n},map:t,animation:google.maps.Animation.DROP})}),500)}function d(e){const{lat:n,lng:t,country:c,region:d,timezone:l}=e.location;o.innerText=e.ip,i.innerText=c+"\n"+d,a.innerText="\n"+l,r.innerText=e.isp,u(n,t)}t.addEventListener("click",c),n.addEventListener("keydown",(function(e){"Enter"===e.key&&c()}));
//# sourceMappingURL=index.3270f624.js.map