// Write your code below:
const fruits = document.getElementsByClassName("fruit");
for (let i = 0; i < fruits.length; i++)
{
    fruits[i].style.fontWeight = "bold";
    if (i == 2)
        fruits[i].style.backgroundColor = "yellow";
}