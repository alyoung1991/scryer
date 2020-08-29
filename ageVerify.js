$('.modal').modal('show');

function displayUnderageError(){
	var modalBody = document.querySelector(".modal-body");
	modalBody.innerHTML = "We're sorry, but you are not permitted to access this site.";
	modalBody.style.color = "red";
	modalBody.classList.add('shake');
}