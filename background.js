
var contextMenuItem = {
  "id": "İndir",
  "title" : "Merhabalar...",

};
chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
  alert("Merhaba arkadaşlar ilk eklentime hoşgeldiniz");
  alert("Hello Word");

    })
