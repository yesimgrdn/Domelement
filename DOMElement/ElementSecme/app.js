let element
 //element =document.getElementById("ok")
 //<button class="btn btn-success" id="ok"> Ok </button>
// element =document.getElementById("ipt")
// element=document.getElementsByClassName("list-group-item")//html collection
/*
HTMLCollection(5)
0: li.list-group-item
1: li.list-group-item
2: li.list-group-item
3: li.list-group-item
4: li.list-group-item
length: 5
*/ 
//element=document.getElementsByClassName("list-group-item")[0]
//      <li class="list-group-item">Süt</li>
//element=document.getElementsByTagName("li")
/*
HTMLCollection(5)0: li.list-group-item1: li.list-group-item2: li.list-group-item3: li.list-group-item4: li.list-group-itemlength: 5[[Prototype]]: HTMLCollection

//queryselector il buldugu dom
*/ 
//element=document.querySelector("#drinks")
//ul#drinks.list-group
//element=document.querySelector(".list-group-item")
//<li class="list-group-item">Süt</li>
//element=document.querySelector(".list-group")
//element=document.querySelector("li")
//ilk elemanı getirir


//queryselectorall dom
element=document.querySelectorAll(".list-group-item")
//tüm list group-item nodelist tipi for each ile içinde dönülür.
//nodelist dönen değişkenin tipi
element.forEach(function(item){
    console.log(item)
})
console.log(element)