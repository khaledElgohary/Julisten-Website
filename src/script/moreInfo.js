var information = {
	"description": [
		{ "Us and Them": "Us and Them is a song by the English progressive rock band Pink Floyd, from their 1973 album The Dark Side of the Moon. The music was written by Richard Wright with lyrics by Roger Waters. It is sung by David Gilmour, with harmonies by Wright. The song is 7 minutes and 49 seconds, the longest on the album. Us and Them was released as the second single from The Dark Side of the Moon in the United States, peaking at No. 72 on the Cash Box Top 100 Singles chart in March 1974. The single peaked at No. 85 in the Canadian chart." },
		{ "11": "11 is a song by the Chinese singer GEM, In 2015, G.E.M. released her first full Mandopop album Heartbeat. The following year, she became the only Asian artist featured in the Forbes 30 Under 30. She is the first female Chinese singer to have four music videos that exceed 100 million views on YouTube." }
	]
};

let homePageHTML = null;


function moreInfo_SoD(element) {
	var singer = element.parentElement.querySelectorAll('div')[0].outerHTML;
	var length = element.parentElement.querySelectorAll('div')[1].outerHTML;
	var coverPic = element.parentElement.parentElement.querySelector('img').outerHTML;
	var musicName = element.parentElement.querySelector('h5').textContent;
	var mainPage = document.getElementById("main-container");
	homePage = document.getElementById("main-container");
	var info
	console.log(homePage.children[0]);

	if (!homePageHTML) {
		homePageHTML = mainPage.innerHTML;
	}


	info = searchForKey(information, musicName);

	console.log(info);

	mainPage.innerHTML = `
    <div class="content">
			<button class="btn btn-secondary search-button backbutton" onclick="returnHome()"><h2>&larr;</h2></button>
			<section class="song-of-the-day mb-5">
				<div class="row">
					`+ coverPic + `
					<div class="col">
						<h5>`+ musicName + `</h5>
						`+ singer + `
						`+ length + `
					</div>
				</div>
			</section>
			<hr style="filter: alpha(opacity=100, finishopacity = 0, style=3)" width="100%" color = #fff size = 3></hr>
			<div class="container-fluid" length: 500px>
				<h4>Information</h4>
					<div class="col">
						`+ info + `
					</div>
			</div>
		</div>
	`;
}

function moreInfo(element) {
	hideGenre();
	const musicName = element.parentElement.querySelectorAll('span')[0].outerHTML;
	const singer = element.parentElement.querySelectorAll('span')[1].outerHTML;
	console.log(musicName);
	var lengthMin = (Math.floor(Math.random() * 2) + 3).toString();
	var lengthSec = Math.ceil(Math.random() * 20);
	if (lengthSec < 10) {
		lengthSec = "0" + lengthSec.toString();
	}
	var length = lengthMin + ':' + lengthSec;
	var coverPic = document.createElement("img")
	coverPic.src = element.parentElement.parentElement.querySelector('img').src
	coverPic.alt = element.parentElement.parentElement.querySelector('img').alt;
	coverPic.className = "mr-3 album-art";
	coverPic.draggable = false;
	coverPic = coverPic.outerHTML;
	var mainPage = document.getElementById("main-container");
	var info;


	homePageHTML = mainPage.innerHTML;

	//console.log(homePageHTML);

	info = searchForKey(information, musicName);

	if (info == undefined) {
		info = "This is a general description of " + musicName + "is a good music"
	}

	console.log(info);

	mainPage.innerHTML = `
    <div class="content">
			<button class="btn btn-secondary search-button backbutton" onclick="returnHome()"><h2>&larr;</h2></button>
			<section class="song-of-the-day mb-5">
				<div class="row">
					`+ coverPic + `
					<div class="col">
						<h5>`+ musicName + `</h5>
						`+ singer + `
						<div>`+ length + `</div>
					</div>
				</div>
			</section>
			<hr style="filter: alpha(opacity=100, finishopacity = 0, style=3)" width="100%" color = #fff size = 3></hr>
			<div class="container-fluid" length: 500px>
				<h4>Information</h4>
					<div class="col">
						`+ info + `
					</div>
			</div>
		</div>
	`;
}

function moreInfo_callFromQueue(element) {
	var musicName = element.previousSibling.textContent.split("Artist: ")[0];
	var singer = element.previousSibling.textContent.split("Artist: ")[1];
	var coverPic = element.previousSibling.querySelector('img').outerHTML;
	var mainPage = document.getElementById("main-container");
	var info;

	//homePageHTML = mainPage.innerHTML;
	if (!homePageHTML) {
		homePageHTML = mainPage.innerHTML;
	}

	// console.log(homePageHTML);
	//
	info = searchForKey(information, musicName);
	//
	if (info == undefined) {
		info = "This is a general description of " + musicName + "is a good music"
	}

	console.log(info);

	mainPage.innerHTML = `
     <div class="content">
	 		<button class="btn btn-secondary search-button backbutton" onclick="returnHome()"><h2>&larr;</h2></button>
	 		<section class="song-of-the-day mb-5">
	 			<div class="row">
	 				`+ coverPic + `
	 				<div class="col">
	 					<h5>`+ musicName + `</h5>
	 					Artist: `+ singer + `
	 					<div>`+ length + `</div>
	 				</div>
	 			</div>
	 		</section>
	 		<hr style="filter: alpha(opacity=100, finishopacity = 0, style=3)" width="100%" color = #fff size = 3></hr>
	 		<div class="container-fluid" length: 500px>
	 			<h4>Information</h4>
	 				<div class="col">
	 					`+ info + `
	 				</div>
	 		</div>
	 	</div>
	 `;
}

function returnHome() {
	var mainPage = document.getElementById("main-container");

	// Set the innerHTML of the main page back to the original home page HTML
	console.log(homePageHTML);
	if (homePageHTML) {
		mainPage.innerHTML = homePageHTML;
	}
}

function searchForKey(info, keyToSearch) {
	var result;
	info.description.forEach(function (item) {
		if (item[keyToSearch]) {
			result = item[keyToSearch];
		}
	});
	return result;
}
