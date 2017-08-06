import { combineReducers } from 'redux'
import {
	LOGIN,
	LOGOUT,
	CREATEOFFER,
	GETDATA
} from 'actions'

function login(state = LOGIN_FAILED, action){
	switch (action.type){
		case LOGIN:
			return action.text
		case LOGOUT:
			return action.success
		default: return state
	}
}

function CreateOffer(state, action){
	switch (action.type){
		case CREATEOFFER:
			return action.success
		default: state
	}
}

function GetData(state, action){
	switch (action.type){
		case GETDATA:
			return action.data
		default: state
		}
}


const myApp = combineReducers({
	login,
	CreateOffer,
	GetData
})