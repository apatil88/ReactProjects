import React from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar';  //import SearchBar component from search_bar.js

const API_KEY = 'AIzaSyC0U64QRQN5nImi-mejkSPtmLOhOa6w4KE';

//Create a new component. This component should produce some HTML.
const App = function(){
    //Render SearchBar component within App component
    return (
    <div>
        <SearchBar /> 
    </div>);
}


//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));