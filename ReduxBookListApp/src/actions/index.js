//Action Creator that returns an Action
//an object with a type property
export function selectBook(book){
    return {
        type : 'BOOK_SELECTED',
        payload : book
    }
}