// Write your code below:
/*
const fruits = document.getElementsByClassName("fruit");
for (let i = 0; i < fruits.length; i++)
{
    fruits[i].style.fontWeight = "bold";
    if (i == 2)
        fruits[i].style.backgroundColor = "yellow";
} 
    */

// Write your code below:
/*
const liTagElem = document.getElementsByTagName("li");
for (let i = 0; i < liTagElem.length; i++)
{
    liTagElem[i].style.fontStyle = "italic";
    if (i == liTagElem.length - 1)
        liTagElem[i].style.color = "red";
}
     */ 

// Write the code as shown in the video below:
/*
const mainHeading = document.querySelector("#main-heading");
mainHeading.style.textAlign = "right";

const basketheading = document.querySelector("#basket-heading");
basketheading.style.color = "brown";
basketheading.style.margin = "30px";

const fruits = document.querySelector(".fruits");
fruits.style.backgroundColor = "gray";
fruits.style.padding = "30px";
fruits.style.margin = "30px";
fruits.style.width = "50%";
fruits.style.borderRadius = "5px";
fruits.style.listStyle = "none";

const fruit = document.querySelectorAll(".fruit");
for (let i = 0; i < fruit.length; i++)
{
    fruit[i].style.padding = "10px";
    fruit[i].style.margin = "10px";
    if (i % 2 == 0)
        fruit[i].style.backgroundColor = "white"
    else {
        fruit[i].style.backgroundColor = "brown";
        fruit[i].style.color = "white";
    }
    fruit[i].style.borderRadius = "5px";
}
    */
// Write answer to the questions asked below: 
// Write your code below:
const divs = document.getElementsByTagName("div");
const headDiv = divs[0];
const secDiv = divs[1];

//sub-heading,textnode
const subheading = document.createElement("h3"); 
const subtextnode = document.createTextNode("Buy high quality organic fruits online");

//append textnode into sub-heading
subheading.appendChild(subtextnode);
subheading.style.fontStyle = "italic";
//now append this into headDiv and let it be the part of dom
headDiv.appendChild(subheading); 

//para tag ,paratext
const para = document.createElement("p");
para.id = "fruits-total";
const paratext = document.createTextNode("Total fruits: 4");
//append paratext into para
para.appendChild(paratext);
//append this into second div before.....
//select unorderedList
const fruits = document.querySelector(".fruits");
secDiv.insertBefore(para, fruits);

