const searchbtn = document.getElementById("searchbtn");
let search;

searchbtn.addEventListener("click",function(){
	search = document.getElementById("search").value;
	location.href = "https://www.google.com/search?q="+ search;
})

document.addEventListener("keydown",function(e){
	if(e.key == "Enter"){
		search = document.getElementById("search").value;
		if(search == ""){
			
		}else if(search == "　"){

		}else if(search == " "){

		}else{
			location.href = "https://www.google.com/search?q="+ search;
		}
		
	}
})