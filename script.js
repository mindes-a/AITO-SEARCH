const searchbtn = document.getElementById("searchbtn");
searchbtn.addEventListener("click",function(){
	let search = document.getElementById("search").value;
	location.href = "https://www.google.com/search?q="+ search
})

document.addEventListener("keydown",function(e){
	alert(e.key);
})