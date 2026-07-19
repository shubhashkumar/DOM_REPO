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
// Write answer to the questions asked below:
