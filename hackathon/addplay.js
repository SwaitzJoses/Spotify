


var retrievedData = localStorage.getItem("add2");

var p=retrievedData.split(",")

console.log(p)




    
for(let i=0; i<p.length; i++) {

   var container=document.createElement("div");
   container.setAttribute("class", "container");
   

   var row=document.createElement("div");
   row.setAttribute("class", "row");
   
   var col=document.createElement("div");
   col.setAttribute("class","col my-3");
   col.setAttribute("style","color:white");
    col.innerHTML=p[i]
  

   

    row.appendChild(col)
   container.appendChild(row);

    document.body.appendChild(container);
}

