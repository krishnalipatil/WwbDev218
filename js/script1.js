// document.getElementById("heading").textContent="Welcome";

// let heading=document.getElementById("title");
// console.log(heading);

// let result=document.querySelector(".message");
// console.log(result);

// let result1=document.querySelectorAll(".message");
// console.log(result1);

// document.getElementById("box").innerHTML="<b>Welcome Student</b>";

// let name=document.getElementById("username").value;
// console.log(name);
// document.getElementById("username").value="css";


// function showMessage()
// {
//     alert("Welcome to html");
// }
// document.getElementById("mybutton").addEventListener("click",function()
// {
//     alert("Button clicked");
// });



// let name1=["Rahul","Priya","Amit"];
// name1.forEach(function(i)
// {
//     console.log(i);
// });


// let str="Welcome to JS";
// console.log(str.length);
// console.log(str.replace("JS","CSS"));
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.charAt(6));


// let quantity="10";//string
// let result2=parseInt(quantity);//5
// console.log(result2+2);
// let price="246.05";
// // let res=parseFloat(price);
// console.log(price+10);


// let  fooditem=["Pizza","Burger","Pasta"];
// fooditem.push("Fries")
// fooditem.splice(0,1);// splice add ->(index,0,item_name)  //splice remove >(index,1)
// console.log(fooditem);


// let cart=
// [
//     {
//     name:"Pizza",
//     price:249,
//     quantity:1
// },
// { name:"Burger",
//     price:150,
//     quantity:1

// }
// ];
// let r=cart.find(function(item)
// {
//     return item.name==="Burger";
// })
// console.log(r);

// let cart1=["Pizza","burger","Pasta"];
// let cartlist=document.getElementById("cart-list");
// cart1.forEach(function(item)
// {
//     let li=document.createElement("li");
//     li.textContent=item;
//     cartlist.appendChild(li);
// })




function changeMode()
{
    document.body.classList.toggle("dark");
    console.log(document.body.classList.contains("dark"));
}

function getValue()

{
    const name=document.getElementById("myinput").value;
    document.getElementById("mypg").textContent=name;
}

