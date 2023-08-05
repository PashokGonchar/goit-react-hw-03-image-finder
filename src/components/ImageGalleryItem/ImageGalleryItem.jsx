import { getImages } from 'api/imagesApi';

import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  state = {
    images : []
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      getImages(this.props.searchText)
        .then(response => response.json())
        .then(data => this.setState({ images: data.hits }));
    }
  }

  render() {
    const { images } = this.state;
    return (
      <>
        {images.map(el => {
          return (
            <li
              key={el.id}
              style={{
                listStyle: 'none',
              }}
              id={el.id}
            >
              <img src={el.webformatURL} alt={el.tags} />
            </li>
          );
        })}
      </>
    );
  }
}

export default ImageGalleryItem;
