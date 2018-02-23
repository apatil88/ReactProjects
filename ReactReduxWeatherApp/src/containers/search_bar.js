import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = { term : '' }

        this.onInputChange = this.onInputChange.bind(this);  //bind the context so that onInputChange is available on 'this' context

        this.onFormSubmit = this.onFormSubmit.bind(this); //bind the context so that onFormSubmit is available on 'this' context
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({ term : event.target.value });
    }

    onFormSubmit(event){
        event.preventDefault();   //Prevent submitting the form

        //Fetch weather data
        this.props.fetchWeather(this.state.term);  //Make the AJAX request with the user's search term (city)

        this.setState({term : ' '}); //Set the user input to empty after making the request
    }

    render(){
        return (
            <form onSubmit={ this.onFormSubmit } className="input-group">
                <input 
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}  //context binding in constructor allows event handler to be invoked directly
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary"> Search </button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);  //Ensure action passes through all reducers
}

export default connect(null, mapDispatchToProps)(SearchBar);