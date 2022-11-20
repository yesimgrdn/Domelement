// var el =document.getElementById("txt").textContent="sMerhaba"//güvenlik için daha iyi

//var el=document.getElementById("Mavi").innerHTML="Masmavi"
//var el = document.getElementById("Mavi")
var el = document.getElementById("Mavi").children[0]
el.setAttribute("style", "background-color:red;")
el.innerHTML="Kıpkırmızı"
console.log(el)
// var el=document.getElementById("Mavi").textContent="Masmavi"

//innerhtml oldugu gibi yazar ve özellik tanımlanmaz.
//textcontext ekstra özellik ve oldugu gibi yazar.
//innertext güzel bir şekilde yazar ve ekstra özellik(en temizi)



