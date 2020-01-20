import React, { Component } from 'react';
import axios from 'axios'; 
import AutoDetailingItem from './AutoDetailingItem';

export class AutoDetailing extends Component {

    state = {
        autoDetailing: [],
        isLoaded: false
    }

    componentDidMount() {
         axios.get("/wp-json/wp/v2/auto-detailing")
            .then( res => this.setState({
                autoDetailing: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }

    render() {
        const {isLoaded, autoDetailing} = this.state;
        console.log('res', this.state);
        if (isLoaded) {
            return (
                <div>
                    {
                        autoDetailing.map(item => (
                            <AutoDetailingItem key={item.id} item={item}/>
                        ))
                    }
                </div>
            );
        }
        return <h3>Loading...</h3>
    }
}

export default AutoDetailing;
