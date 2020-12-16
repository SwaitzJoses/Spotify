
// var user_id = "31xkra7sdng7jg27jsnb5hx65eoi";
// ID = 0sNOF9WDwhWunNAHPD3Baj



const clientId ='787dd07950464aab9c4595871896e13a';
const redirectURI ='http://127.0.0.1:5501/hackathon/index.html';
let accessToken;

 const Spotify ={
    getAccessToken(){
        if(accessToken){
            return accessToken;
        }
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if(accessTokenMatch && expiresInMatch){
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken
        }else{
                const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location  = accessUrl;
        }
    },
    userProfile(){
        accessToken = Spotify.getAccessToken();
        return fetch('https://api.spotify.com/v1/me',{ headers: {
            Authorization : `Bearer ${accessToken}`
        }}).then(resp => resp.json()).then(jsonResponse=>jsonResponse)
        // return userProfileReq
        
         
        
                     
    }
        ,
    search(term){
        console.log('1');
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
        {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }
        }).then(response => response.json())
        .then(jsonResponse =>{
            if(!jsonResponse.tracks){
                return 'No matches found'
            }
            return jsonResponse.tracks.items.map(track=>{
                return ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri

                })
            });
        })
    },
    // async savePlaylist(name, trackUris){
    //     const accessToken = Spotify.getAccessToken();
    //     const headers = {Authorization: `Bearer ${accessToken}`};
    //     if(!name || !trackUris){
    //         return
    //     }

    //     const userId = await fetch('https://api.spotify.com/v1/me',{headers: headers})
    //     .then(response=> response.json())
    //     .then(jsonResponse=> jsonResponse.id);
      
    //     const playListId = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`,{
    //         headers: headers,
    //         method: 'POST',
    //         body: JSON.stringify({name: name})
    //     }).then(response=> response.json())
    //     .then(jsonResponse=> jsonResponse.id);
    //     console.log(playListId);
    //     return axios.post(`https://api.spotify.com/v1/users/${userId}/playlists/${playListId}/tracks`,
    //          {uris: trackUris},
    //          {headers: headers},
    //          {onUploadProgress: function (progressEvent) {
    //             // Do whatever you want with the native progress event
    //             console.log(progressEvent)
    //           }})

    // }
}

class SpotifyData {
    constructor(){
        this.user;
    }
    updateUser(data){
        this.user = data
    }
    getUser(){
        return this.user
    }

}


const instance = new SpotifyData();
document.getElementById('hit').addEventListener('click',async ()=>{
    const data = await Spotify.userProfile()
    instance.updateUser(data)
	console.log(accessToken)
	
    localStorage.setItem("token",accessToken);
    
	_getGenres();


    if(instance.getUser()){
        document.getElementById('hit').innerText = 'Logged In'
        document.getElementById('hit').removeEventListener('click',()=>{})
    }
})


























// var token='BQCdG3ulNSSIHzFJPvQGHcP0PM6nnQA0WoYm_RcvtOSHKe_gtRn25BbmNN0mnb92WzyPoSSjO9cKoFVmwXRHV6Qe202nL8jVa8SDafBhmjXfyXAKTKPalOC4ZUSzyKEC3o-AdJ3nNQF-ZJLq5-b3RbiYGOZwysf9CCIxpdm0fwfOPIAm_y9HDw&refresh_token=AQAtTC5FW8ghJ_q42U3J3tFJ2q9GU0QhxzxGcqkJ326OpYK2MtcrgJTMW9kxsrudb6f0B9PdEGdHRrGoloOsna3nF1HYTP6ZPwv9DQrcfd_FiVn56pycWKBqBJAwHb6aAF0'

const user = async () => {

	await fetch(`https://api.spotify.com/v1/users/31xkra7sdng7jg27jsnb5hx65eoi`, {
		method: 'GET',
		headers: { 'Authorization' : 'Bearer ' +accessToken  }
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



const _getGenres = async () => {

	await fetch(`https://api.spotify.com/v1/browse/categories`, {
		method: 'GET',
		headers: { 'Authorization' : 'Bearer ' + accessToken}
})
	.then(function (resp) {
       
        
		return resp.json();
	   
			 })
			 .then(function (jsonString) {
	   
			   
		 console.log(jsonString)
		 console.log(jsonString.categories.items[0].icons[0])



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
			 

			 var mainCard3= document.createElement("img");
			 mainCard3.setAttribute("class","col my-1 thumb");
			 mainCard3.setAttribute("id","thumbnail");
			 mainCard3.setAttribute("src",jsonString.categories.items[i].icons[0].url);
			 mainCard3.addEventListener("click",function(){
				location = `hackathon/${jsonString.categories.items[i].id}.html`});


		console.log(`https://api.spotify.com/v1/browse/categories/playlists`);
			 
			 
			 var mainCard6= document.createElement("div");
			 mainCard6.setAttribute("class","col font");
			 mainCard6.innerHTML=jsonString.categories.items[i].id
			 
			 
			
			
			
			mainCard2.appendChild(mainCard3);
			mainCard.appendChild(mainCard2); 
			mainCard2.appendChild(mainCard6);

			

			rowCard.appendChild(mainCard);
			 


			}


		 })
}

// _getGenres();


const createPlaylist = async () => {

	await fetch('https://api.spotify.com/v1/browse/categories/toplists/playlists', {
		method: 'GET',
		headers: { 'Authorization' : 'Bearer ' + accessToken}
})
	.then(function (resp) {
       
        
		return resp.json();
	   
			 })
			 .then(function (jsonString) {
	   
			  
		 console.log(jsonString)
		
		 })
}

createPlaylist();

