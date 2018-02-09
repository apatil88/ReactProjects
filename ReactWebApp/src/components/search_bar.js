import React, { Component } from 'react';

//Functional Component
/*const SearchBar = () => {
    return <input />
};*/

//Class-based Component
class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = { term : ''};   

    }

    render(){
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}  //Controlled component - input receives its value from state
                    onChange={event => this.onInputChange(event.target.value) }
                />
            </div>
        );
    }

    onInputChange(term){
       this.setState({term});
       this.props.onSearchTermChange(term);
    }
}

export default SearchBar;