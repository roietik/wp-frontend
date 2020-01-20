import React, { Component } from 'react';
import axios from 'axios'; 
import CarAudioItem from './CarAudioItem';

export class CarAudio extends Component {

    state = {
        carAudio: [],
        isLoaded: false
    }

    componentDidMount() {
         axios.get("/wp-json/wp/v2/car-audio")
            .then( res => this.setState({
                carAudio: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }

    render() {
        const {isLoaded, carAudio} = this.state;
        console.log('res', this.state);
        if (isLoaded) {
            return (
                <div>
                    {
                        carAudio.map(item => (
                            <CarAudioItem key={item.id} item={item}/>
                        ))
                    }
                </div>
            );
        }
        return <h3>Loading...</h3>
    }
}

export default CarAudio;
