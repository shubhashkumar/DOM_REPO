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
const liTagElem = document.getElementsByTagName("li");
for (let i = 0; i < liTagElem.length; i++)
{
    liTagElem[i].style.fontStyle = "italic";
    if (i == liTagElem.length - 1)
        liTagElem[i].style.color = "red";
}