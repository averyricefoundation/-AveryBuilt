import React, {Component} from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import './Gallery.css';


export default class PhotoGallery extends Component {
    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
      }
      openLightbox(event, obj) {
        this.setState({
          currentImage: obj.index,
          lightboxIsOpen: true,
        });
      }
      closeLightbox() {
        this.setState({
          currentImage: 0,
          lightboxIsOpen: false,
        });
      }
      gotoPrevious() {
        this.setState({
          currentImage: this.state.currentImage - 1,
        });
      }
      gotoNext() {
        this.setState({
          currentImage: this.state.currentImage + 1,
        });
      }
    render(){

        const photos =[
            {
                src:require('../assets/img/instagram_5.jpg'),
                width:4,
                height:3,
            },
            {
                src:require("../assets/img/instagram_6.jpg"),
                width:4,
                height:3,
            },
            {
                src:require("../assets/img/instagram_7.jpg"),
                width:2,
                height:2,
            },
            {
                src:require("../assets/img/instagram_8.jpg"),
                width:3,
                height:3,
            },
            {
                src:require("../assets/img/instagram_8.jpg"),
                width:4,
                height:3,
            },
            {
                src:require("../assets/img/instagram_9.jpg"),
                width:1,
                height:1,
            },
            {
                src:require("../assets/img/instagram_10.jpg"),
                width:3,
                height:4,
            },
            {
                src:require("../assets/img/instagram_11.jpg"),
                width:2,
                height:3,
            },
            {
                src:require("../assets/img/instagram_12.jpg"),
                width:4,
                height:3,
            },
            {
                src:require("../assets/img/instagram_13.jpg"),
                width:1,
                height:1,
            },
            {
                src:require("../assets/img/instagram_14.jpg"),
                width:4,
                height:3,
            },
            {
                src:require("../assets/img/instagram_15.jpg"),
                width:2,
                height:1,
            },
            {
                src:require("../assets/img/instagram_16.jpg"),
                width:3,
                height:4,
            },
            {
                src:require("../assets/img/instagram_17.jpg"),
                width:5,
                height:3,
            },
            {
                src:require("../assets/img/instagram_18.jpg"),
                width:3,
                height:4,
            },
            {
                src:require("../assets/img/instagram_1.jpg"),
                width:4,
                height:2,
            },
            {
                src:require("../assets/img/instagram_2.jpg"),
                width:4,
                height:3,
            },

        ]



        return (
        <div>
                <Gallery photos={photos}  onClick={this.openLightbox}/>
                <Lightbox images={photos}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                    />
        </div>
        )
    }
}