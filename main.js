

name_of_item = ["Chocolate Mikshake", "Strawberry Milkshake", "Mango Milkshake"];



function add()
{   var item = document.getElementById("name1").value;
    name_of_item.push(item);
    console.log(name_of_item);
    
    
    
}

function show()
{   document.getElementById("name1").innerHTML = (" ");
    document.getElementById("display_name").innerHTML= name_of_item;
    document.getElementById("display_name").innerHTML =   name_of_item.join("<br>");
    
   
    
}
