//state here is not the application state, only the state this reducer is responsible for.
export default function(state = null, action){  //When the app first boots up and no book is selected, return state as null

    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;  //payload here is the selected book
    }
    return state;  //base case : if we don't care about the action, return the state
}