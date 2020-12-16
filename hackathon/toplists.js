
// var user_id = "31xkra7sdng7jg27jsnb5hx65eoi";
// ID = 0sNOF9WDwhWunNAHPD3Baj

// var token='BQCdG3ulNSSIHzFJPvQGHcP0PM6nnQA0WoYm_RcvtOSHKe_gtRn25BbmNN0mnb92WzyPoSSjO9cKoFVmwXRHV6Qe202nL8jVa8SDafBhmjXfyXAKTKPalOC4ZUSzyKEC3o-AdJ3nNQF-ZJLq5-b3RbiYGOZwysf9CCIxpdm0fwfOPIAm_y9HDw&refresh_token=AQAtTC5FW8ghJ_q42U3J3tFJ2q9GU0QhxzxGcqkJ326OpYK2MtcrgJTMW9kxsrudb6f0B9PdEGdHRrGoloOsna3nF1HYTP6ZPwv9DQrcfd_FiVn56pycWKBqBJAwHb6aAF0'




















const user = async () => {

	await fetch(`https://api.spotify.com/v1/users/31xkra7sdng7jg27jsnb5hx65eoi`, {
		method: 'GET',
		headers: { 'Authorization' : 'Bearer ' +localStorage.getItem("accessToken") }
})
	.then(function (resp) {
       
        
		return resp.json();
	   
			 })
			 .then(function (jsonString) {
	   
			   document.getElementById("username").innerHTML=jsonString.display_name;
			// document.getElementById("user-image").setAttribute("src",jsonString.images[0].url)
		 console.log(jsonString)
		//  console.log(jsonString.playlists.items[0])
		 })
}

user();



// const _getGenres = async () => {

// 	await fetch(`https://api.spotify.com/v1/browse/categories`, {
// 		method: 'GET',
// 		headers: { 'Authorization' : 'Bearer ' + localStorage.getItem("accessToken")}
// })
// 	.then(function (resp) {
       
        
// 		return resp.json();
	   
// 			 })
// 			 .then(function (jsonString) {
	   
			   
// 		 console.log(jsonString)
// 		 console.log(jsonString.categories.items[0].icons[0])



		// var divbg= document.createElement("div");
		// 	 divbg.setAttribute("class","container bg ");
		// 	 document.getElementById("row1").appendChild(divbg);

		// 	 var rowCard=document.createElement("div");
		// 	 rowCard.setAttribute("class","row");
		// 	 divbg.appendChild(rowCard);


		 
		// for(let i=0; i<=20; i++){
               
		
// 			 var mainCard= document.createElement("div");
// 			 mainCard.setAttribute("class","col-3 haha ");
			  
		

// 			 var mainCard2= document.createElement("div");
// 			 mainCard2.setAttribute("class","col ss");
// 			//  mainCard2.addEventListener("click",goto)
// 			//  mainCard2.setAttribute("src",jsonString.categories.items[i].icons[0].url);
			 

// 			 var mainCard3= document.createElement("img");
// 			 mainCard3.setAttribute("class","col my-1 thumb");
// 			 mainCard3.setAttribute("id","thumbnail");
// 			 mainCard3.setAttribute("src",jsonString.categories.items[i].icons[0].url);
// 			 mainCard3.addEventListener("click",function(){
// 				location = `./hackathon/${jsonString.categories.items[i].id}.html`});


//                 console.log(`https://api.spotify.com/v1/browse/categories/playlists`);
			 
			 
// 			 var mainCard6= document.createElement("div");
// 			 mainCard6.setAttribute("class","col font");
// 			 mainCard6.innerHTML=jsonString.categories.items[i].id
			 
			 
			
			
			
// 			mainCard2.appendChild(mainCard3);
// 			mainCard.appendChild(mainCard2); 
// 			mainCard2.appendChild(mainCard6);

			

// 			rowCard.appendChild(mainCard);
			 


// 			}


// 		 })
// }

// _getGenres();


// const createPlaylist = async () => {

// 	await fetch('https://api.spotify.com/v1/tracks/3f9zqUnrnIq0LANhmnaF0V', {
// 		method: 'GET',
// 		headers: { 'Authorization' : 'Bearer ' + token}
// })
// 	.then(function (resp) {
       
        
// 		return resp.json();
	   
// 			 })
// 			 .then(function (jsonString) {
	   
			  
// 		 console.log(jsonString)
// 		// document.getElementById("m").setAttribute("src",jsonString.uri)
//          })
//              var audio= document.createElement("audio");
             
//              var source= document.createElement("source");
//              source.setAttribute("src","spotify:track:3f9zqUnrnIq0LANhmnaF0V")
//              audio.appendChild(source);
//              document.body.appendChild(audio);
         
         
// }

// createPlaylist();



const createPlaylist = async () => {
    console.log(localStorage.getItem('token'))
	await fetch('https://api.spotify.com/v1/browse/categories/toplists/playlists', {
		method: 'GET',
		headers: { 'Authorization' : 'Bearer ' + localStorage.getItem("token")}
})
	.then(function (resp) {
       
        console.log("hi");


		return resp.json();
	   
			 })
			 .then(function (jsonString) {
	   
			  
         console.log(jsonString)
         

         var divbg= document.createElement("div");
			 divbg.setAttribute("class","container bg ");
			 document.getElementById("row1").appendChild(divbg);

			 var rowCard=document.createElement("div");
			 rowCard.setAttribute("class","row");
			 divbg.appendChild(rowCard);


		 
		for(let i=0; i<=20; i++){
               
		
			 var mainCard= document.createElement("div");
			 mainCard.setAttribute("class","col-3 haha ");
			  
		

			 var mainCard2= document.createElement("div");
			 mainCard2.setAttribute("class","col ss");
			//  mainCard2.addEventListener("click",goto)
            //  mainCard2.setAttribute("src",jsonString.categories.items[i].icons[0].url);
            
            var button= document.createElement("button");
            button.setAttribute("class","button");
            button.innerHTML="Add"
            button.addEventListener("click",add);
            mainCard2.appendChild(button)
			 

			 var mainCard3= document.createElement("img");
			 mainCard3.setAttribute("class","col my-1 thumb");
			 mainCard3.setAttribute("id","thumbnail");
			 mainCard3.setAttribute("src",jsonString.playlists.items[i].images[0].url);
			 mainCard3.addEventListener("click",function(){
				location = `${jsonString.playlists.items[i].external_urls.spotify}`});


                console.log(`https://api.spotify.com/v1/browse/categories/toplists/playlists`);
			 
			 
			 var mainCard6= document.createElement("div");
			 mainCard6.setAttribute("class","col font");
			 mainCard6.innerHTML=jsonString.playlists.items[i].description
			 
			 
			
			
			
			mainCard2.appendChild(mainCard3);
			mainCard.appendChild(mainCard2); 
			mainCard2.appendChild(mainCard6);

			

			rowCard.appendChild(mainCard);
			 
function add(){
    // var added= document.createElement("div");
    // added.innerHTML=mainCard6.innerHTML=jsonString.playlists.items[i].description;
    
    var m =localStorage.setItem("added",mainCard6.innerHTML=jsonString.playlists.items[i].description);
   
    var retrievedData = localStorage.getItem("added");
     
    console.log(retrievedData)
    addplay.push(retrievedData )
    console.log(addplay)
    localStorage.setItem("add2",addplay)

}
var addplay=[];
// module.exports.addplay;
    // localStorage.setItem(add2,addplay)

			}
		
		 })
}

createPlaylist();
module.exports.add2;
// export const addplay;
// console.log(localStorage.getItem("accessToken"))
    
    
    
