//Action Creator that returns an Action
//an object with a type property
export function selectBook(book){
    return {
        type : 'BOOK_SELECTED',   //Describes the purpose of the action
        payload : book            //A piece of data that describes the action undertaken
    }
}