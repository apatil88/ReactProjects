import React, { Component } from 'react';

//Functional Component
/*const SearchBar = () => {
    return <input />
};*/

//Class-based Component
class SearchBar extends Component {
    render(){
        return <input onChange={this.onInputChange}/>
    }

    onInputChange(event){
        console.log(event.target.value);
    }
}

export default SearchBar;