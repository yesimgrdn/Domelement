const table=document.getElementById('table')
let element

table.classList.add("table-danger")
table.classList.add("table-bordered")
table.classList.remove("table-bordered")
element=table

link=document.getElementById("link")
element=link;
element=link.getAttribute("href")
link.setAttribute("href","www.https://cisco.com")

element=link.hasAttribute("class")
console.log(element)


