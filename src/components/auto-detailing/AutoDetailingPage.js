import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Button, Colors } from 'react-foundation';



export class AutoDetailingPage extends Component {

    state = {
        autoDetailing: '',
        isLoaded: false
    }

    componentDidMount() {
        console.log('match:',this.props.match.params.id)
        axios.get(`/wp-json/wp/v2/auto-detailing/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    autoDetailing: res.data,
                    isLoaded: true
                })
                console.log('res' ,res.data);
            })
            .catch(err => console.log(err))
    }

    render() {
        const { autoDetailing, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <Fragment>
                    <Link to="/">Go Back</Link>
                    <h1>{autoDetailing.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{ __html: autoDetailing.content.rendered }}></div>
                    <h4>Price: <strong>{autoDetailing.acf.price} PLN</strong></h4>
                    <Button color={Colors.SUCCESS}>Submit</Button>
                </Fragment>
            )
        }
        return <h3>Loading...</h3>;
    }
}

export default AutoDetailingPage;
