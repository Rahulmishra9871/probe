let readmore = document.querySelector(".readmore");
let readless = document.querySelector(".readless");
let moreText = document.querySelector(".more");
var flag = 1;

// readmore.addEventListener("click", function () {
//   if (flag == 1) {
//     moreText.style.display = "inline";
//     flag = 0;
//     readmore.innerHTML = "READ LESS";
//   } else {
//     moreText.style.display = "none";
//     readmore.innerHTML = "READ MORE";

//     flag = 1;
//   }
// });

readmore.addEventListener("click", function () {
  moreText.style.display = "inline";
  readmore.style.display = "none";
});

readless.addEventListener("click", function () {
  moreText.style.display = "none";
  readmore.style.display = "inline";
});
