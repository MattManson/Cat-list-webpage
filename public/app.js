var cats_array = [
  { name: "Boba", favFood: "Sock fluff", image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
  { name: "Barnaby", favFood: "Tuna", image: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"},
  { name: "Max", favFood: "Whiskas Temptations", image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
  { name: "satan", favFood: "salmon", image: "http://i.imgur.com/YPSjOCA.jpg" },
  { name: "jim", favFood: "stuff", image: "https://images-na.ssl-images-amazon.com/images/I/61qY-QXvlsL.jpg" }
];


var app = function(){
  addCats(cats_array);
}

var addCats = function(cats_array){
  var location = document.getElementById("cats");
  cats_array.forEach(function(element){
    var newLi = document.createElement("li")
    newLi.innerText = `Name: ${element.name}`;
    var secondLI = document.createElement("li")
    secondLI.innerText = `Favourite food: ${element.favFood}`;
    var thirdLi = document.createElement("li")
    var image = document.createElement("img");
    image.src = element.image;
    image.width = "500";

    var newCat = document.createElement("ul");

    thirdLi.appendChild(image);
    newCat.appendChild(newLi);
    newCat.appendChild(secondLI);
    newCat.appendChild(thirdLi);
    location.appendChild(newCat);
  })

}
document.addEventListener("DOMContentLoaded", app);
