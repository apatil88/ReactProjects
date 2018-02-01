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
            <div>
                <input 
                    value={this.state.term}  //Controlled component - input receives its value from state
                    onChange={event => this.setState({term : event.target.value})}
                />
            </div>
        );
    }

}

export default SearchBar;