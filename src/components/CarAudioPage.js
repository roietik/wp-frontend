import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Button, Colors } from 'react-foundation';



export class CarAudioPage extends Component {

    state = {
        carAudio: '',
        isLoaded: false
    }

    componentDidMount() {
        console.log('this.props:',this.props.match.params.id)
        axios.get(`/wp-json/wp/v2/car-audio/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    carAudio: res.data,
                    isLoaded: true
                })
                console.log('res' ,res.data);
            })
            .catch(err => console.log(err))
    }

    render() {
        const { carAudio, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <Fragment>
                    <Link to="/">Go Back</Link>
                    <h1>{carAudio.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{ __html: carAudio.content.rendered }}></div>
                    <h4>Price: <strong>{carAudio.acf.price} PLN</strong></h4>
                    <Button color={Colors.SUCCESS}>Submit</Button>
                </Fragment>
            )
        }
        return <h3>Loading...</h3>;
    }
}

export default CarAudioPage;
