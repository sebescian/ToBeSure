document.getElementById("calatorie").addEventListener("click",function(){
  document.getElementById("calatorie").classList.add("show")
  document.getElementById("istoric").classList.remove("show")
  document.getElementById("cont").classList.remove("show")
  document.getElementById("calatorieNoua").classList.replace("hideContent", "showContent")
  document.getElementById("istoricCalatorii").classList.replace("showContent", "hideContent")
  document.getElementById("contulMeu").classList.replace("showContent", "hideContent")
  });
  
  document.getElementById("istoric").addEventListener("click",function(){
  document.getElementById("calatorie").classList.remove("show")
  document.getElementById("cont").classList.remove("show")
  document.getElementById("istoric").classList.add("show")
  document.getElementById("istoricCalatorii").classList.replace("hideContent", "showContent")
  document.getElementById("calatorieNoua").classList.replace("showContent", "hideContent")
  document.getElementById("contulMeu").classList.replace("showContent", "hideContent")
  });
  
  document.getElementById("cont").addEventListener("click",function(){
  document.getElementById("calatorie").classList.remove("show")
  document.getElementById("istoric").classList.remove("show")
  document.getElementById("cont").classList.add("show")
  document.getElementById("contulMeu").classList.replace("hideContent", "showContent")
  document.getElementById("istoricCalatorii").classList.replace("showContent", "hideContent")
  document.getElementById("calatorieNoua").classList.replace("showContent", "hideContent")
  });
  
  function plecare() {
      var county = document.getElementById("inputPlecare").value;
      if (county === "Brasov") {
          var array = ["Brasov", "Bran", "Zarnesti", "Sacele", "Fagaras", "Rasnov"]
          }
          else if (county === "Bistrita-Nasaud"){
          var array = ["Bistrita", "Beclean", "Colibita", "Nasaud", "Saratel", "Coldau"]
          }
          else if (county === "Cluj"){
          var array = ["Cluj-Napoca", "Gherla", "Dej", "Apahida", "Jucu", "Bontida"]
         }
         else {
          var array = [];
         }
  
     var string = "";
     for (i = 0; i < array.length; i++) {
      string = string+ "<option>"+array[i]+"</option>";
     }
     string="<select name='city'>"+string+"</>";
     document.getElementById("outputPlecare").innerHTML=string;
  }
  function sosire() {
      var county = document.getElementById("inputSosire").value;
      if (county === "Brasov") {
      var array = ["Brasov", "Bran", "Zarnesti", "Sacele", "Fagaras", "Rasnov"]
      }
      else if (county === "Bistrita-Nasaud"){
      var array = ["Bistrita", "Beclean", "Colibita", "Nasaud", "Saratel", "Coldau"]
      }
      else if (county === "Cluj"){
      var array = ["Cluj-Napoca", "Gherla", "Dej", "Apahida", "Jucu", "Bontida"]
     }
     else {
      var array=[""];
     }
  
     var string = "";
     for (i = 0; i < array.length; i++) {
      string = string+ "<option>"+array[i]+"</option>";
     }
     string="<select name='city'>"+string+"</>";
     document.getElementById("outputSosire").innerHTML=string;
  }
  
  
  
function deleteNote(noteId) {
  fetch("/delete-note", {
    method: "POST",
    body: JSON.stringify({ noteId: noteId }),
  }).then((_res) => {
    window.location.href = "/";
  });
}
function _class(name) {
  return document.getElementsByClassName(name);
}

let tabPanes = _class("tab-header")[0].getElementsByTagName("div");

for (let i=0; i < tabPanes.length; i++) {
  tabPanes[i].addEventListener("click", function() {
      _class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
      tabPanes[i].classList.add("active");

      _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
      _class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");
  })
}
