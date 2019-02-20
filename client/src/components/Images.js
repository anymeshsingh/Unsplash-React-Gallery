import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-component';
import Image from './Image';

export class Images extends Component {
    state = {
        images: [],
        count: 30,
        start: 1
    }

    masonryOptions = {
        transitionDuration: 0
    };
     
    imagesLoadedOptions = { background: '.my-bg-image-el' }
    

    componentDidMount(){
        const { count, start } = this.state;
        axios
            .get(`/api/photos?count=${count}&start=${start}`)
            .then(res => this.setState({ images: res.data }))
    }

    fetchImages = () => {
        const { count, start } = this.state;
        this.setState({ start: this.state.start + count });
        axios
          .get(`/api/photos?count=${count}&start=${start}`)
          .then(res =>
            this.setState({ images: this.state.images.concat(res.data) })
          );
    };
    

    render() {
        return (
            <div>
                <InfiniteScroll
                dataLength={this.state.images.length}
                next={this.fetchImages}
                hasMore={true}
                loader={<h4 className={'text-center'}>Loading...</h4>}
                >
                <Masonry
                    className={'images'} // default ''
                    elementType={'ul'} // default 'div'
                    //options={this.masonryOptions} // default {}
                    //disableImagesLoaded={false} // default false
                    //updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
                    //imagesLoadedOptions={this.imagesLoadedOptions}
                >
                    {this.state.images.map(image => (
                        <li className="single-photo">
                            <Image key={image.id} image={image} />
                        </li>
                    ))}
                </Masonry>
                </InfiniteScroll>
            </div>
        );
      }
}

export default Images
