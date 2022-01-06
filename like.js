const likeBtn = document.querySelector(".like-button i");
const Count = document.querySelector(".Number");

likeBtn.addEventListener("click", function() {
	likeBtn.classList.toggle("far");
	likeBtn.classList.toggle("fas");
	if (likeBtn.classList.contains("fas")) {
		Count.innerHTML = Number(Count.innerHTML) + 1;
	} else {
		Count.innerHTML = Number(Count.innerHTML) - 1;
	}
});




