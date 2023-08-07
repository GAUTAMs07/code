// oLobeu1olmBq8HTU7-v4PzFktO4v7guNm0J45Nw6U4A

// api== https://api.unsplash.com/search/photos?page=1&query=office

const accessKey ="oLobeu1olmBq8HTU7-v4PzFktO4v7guNm0J45Nw6U4A";
const searchform = document.getElementById("search-form");
const searchbox = document.getElementById("search-box");
const searchresult = document.getElementById("search-result");


let keyword ="";
let page=1;
async function searchImages(){
	keyword =searchbox.value;
	const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=21`;
    
	const response = await fetch(url);
	const data = await response.json();
	if(page===1)
	{
		searchresult.innerHTML="";
	}
	const results = data.results;

	results.map((result) =>{
		const image = document.createElement("img");
		image.src = result.urls.small;
		const imagelink = document.createElement("a");
		imagelink.href = result.links.html;
		imagelink.target = "_blank";

		imagelink.appendChild(image);
        searchresult.appendChild(imagelink);
	})


}

searchform.addEventListener("submit",(e)=>
{
	e.preventDefault();
	page=1;
	searchImages();
})