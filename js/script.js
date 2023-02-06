var imgState = 0;

var imgTag = document.getElementById("imgClickAndChange");

imgTag.addEventListener("click", function (event) {
  imgState = (++imgState % 3);
	event.target.src = images[imgState];
});
