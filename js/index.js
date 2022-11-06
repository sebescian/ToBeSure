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

