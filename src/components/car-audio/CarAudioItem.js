import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

export class CarAudioItem extends Component {

    state = {
        imgUrl: '',
        author: '',
        isLoaded: false
    }

    componentDidMount() {
        const {featured_media, author } = this.props.item;
        const getImgUrl = axios.get(`/wp-json/wp/v2/media/${featured_media}`);
        const getAuthor = axios.get(`/wp-json/wp/v2/users/${author}`);
        Promise.all([getImgUrl, getAuthor])
            .then(res => {
                this.setState({
                      imgUrl: res[0].data.media_details.sizes.full.source_url,
                      author: res[1].data.name,
                      isLoaded: true
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        const { title, excerpt, id } = this.props.item;
        const {imgUrl, author, isLoaded} = this.state;
        if(isLoaded) {
            return (
                <div>
                    <h2>{title.rendered}</h2>
                    <img src={imgUrl} alt={author}/>
                    <div dangerouslySetInnerHTML={{__html: excerpt.rendered}}/>
                    <small>Review by <strong>{author}</strong></small>
                    <br/>
                    <Link to={`/car-audio/${id}`}>Read Review</Link>
                </div>
            )
        }
        return <h3>Loading...</h3>
    }

    static propTypes = {
        item: PropTypes.object.isRequired
    }
}

export default CarAudioItem;
