var image = document.getElementById("img-bocchi");
var btn = document.getElementById("btn");
var pop = document.getElementById("pop-up");
btn.addEventListener("click", function () {
  image.src =
    "https://i.pinimg.com/736x/cf/23/27/cf2327f1f2acb8d9ecc257f756b3bf2d.jpg";

  pop.style.visibility = "visible";
  setTimeout(function () {
    pop.style.display = "none";
  }, 2000);
});
