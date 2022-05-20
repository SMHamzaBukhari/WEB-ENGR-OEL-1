
let foods = [{
    No: 1,
    foodName: "Soup",
    cat: "Starters",
    img: "../images/soup.jpg"
  }, {No: 2,
    foodName: "Burger",
    cat: "Fast Food",
    img: '../images/burger.jpg'
  },{
    No: 3,
    foodName: "Tikka",
    cat: "BBQ",
    img: "../images/soup.jpg"
  }];
let foodList = document.getElementById("foodList");
for (let i = 0; i < foods.length; i++) {
  let obj = foods[i];
  foodList.innerHTML +=
    "<tr><td>" +
    obj.No +
    "</td><td>" +
    obj.foodName +
    "</td><td>" +
    obj.cat +
    "</td><td>";
}
function searchFood() {
  let inpVal = document.getElementById("inpVal");
  for (let i = 0; i < foods.length; i++) {
    let obj = foods[i];
    if (inpVal.value == obj.cat) {
      console.log(obj);
      foodSearch.innerHTML =
      "<tr><td>" +
      obj.No +
      "</td><td>" +
      obj.foodName +
      "</td><td>" +
      obj.cat +
      "</td><td>" ;
    }
  }
}