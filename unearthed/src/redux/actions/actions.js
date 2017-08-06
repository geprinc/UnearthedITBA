/*
 * Action types 
*/

export const LOGIN  	  = 'LOGIN'
export const LOGOUT 	  = 'LOGOUT'
export const CREATEOFFER  = 'CREATEOFFER'
export const GETDATA 	  = 'GETDATA'

/*
 * Other constants 
*/
//Esto no es necesario, no?
export const Data = {
	GETUSERDATA : 'GETUSERDATA'
	GETOFFERDATA: 'GETOFFERDATA'
}


//Login action, success defines if login was successful or not

function loginAction(text, success){
	return {
		type: LOGIN,
		text,
		success
	}
}

function logoutAction(){
	return{
		type: LOGOUT,
		success: false
	}
}

function createOffer(success){
	return{
		type: CREATEOFFER,
		success
	}
}

function getData(data){
	return{
		type: GETDATA,
		data
	}
}
