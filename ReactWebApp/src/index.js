import _ from 'lodash'
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';    //import SearchBar component from search_bar.js
import VideoList from './components/video_list';    //import VideoList component from video_list.js
import VideoDetail from './components/video_detail'; //import VideoDetail component from video_detail.js

const API_KEY = 'AIzaSyA8nyLWrBhwWncslVJlwJhrGe2hI5_Prhs';


/*
//Create a new component. This component should produce some HTML.
const App = function(){
    //Render SearchBar component within App component
    return (
        <div>
            <SearchBar /> 
        </div>
    );
}
*/


class App extends Component{
    constructor(props){
        super(props);

        this.state = { 
            videos : [],
            selectedVideo : null 
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term){
        //When the app first loads, user sees a list of videos
        YTSearch({key : API_KEY, term : term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo : videos[0]      //Show a video when the app first boots up
            });   //this.setState({videos : videos})  
            console.log(videos);
        });
    }

    render(){
        //Pass props to VideoList component
        //Pass the selected video to the VideoDetail component
        //Pass search term callback as a prop to SearchBar component
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);  //Throttle the search input requests
        return (
            <div>
                <SearchBar onSearchTermChange= { videoSearch } />
                <VideoDetail video={ this.state.selectedVideo } />
                <VideoList 
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                    videos={ this.state.videos }
                />
            </div>
        );
    }
}


//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));