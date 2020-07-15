import { combineReducers } from 'redux'

const user = (state = null) => state

// add switch statements in here
const cars = (state = [], action) => {
        //refer to your actions involving cars here inorder to change the cars field in the redux store
        switch(action.type) {
            case "ADD_CAR":
                return [...state, action.value] // whenever changing state be sure that you are actually returning a brand new state
                //representations (dont just return the old state parameter if thers a change)
            case "REMOVE_CAR":
                const newState = [...state]
                return newState.splice(action.value, 1)
        }
    return state
}

export default combineReducers({ user, cars });