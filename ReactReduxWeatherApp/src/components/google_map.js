import React , { Component } from 'react'

class GoogleMap extends Component {

    componentDidMount(){
        //create embedded Google Map inside the document
        new google.maps.Map(this.refs.map, {
            zoom : 12,
            center : {
                lat : this.props.lat,
                lng : this.props.lon
            }
        });
    }

    render(){
        //allows the element to be accessed as this.refs.map
        return <div ref="map" />;
    }
}

export default GoogleMap;