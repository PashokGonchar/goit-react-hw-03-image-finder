import { getImages } from 'api/imagesApi';

import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  state = {
    images: [],
    page: 1,
    perPage : 12,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      this.fetchImages(this.props.searchText, 1);
    }
  }

  fetchImages = (searchText, page) => {
    const { perPage } = this.state;
    getImages(searchText, page, perPage)
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          images: prevState.images.concat(data.hits),
          page: page,
        }));
      });
  };

  handleLoadMore = () => {
    const { searchText } = this.props;
    const { page } = this.state;
    const nextPage = page + 1;
    this.fetchImages(searchText, nextPage);
  };

  render() {
    const { images } = this.state;

    return (
      <>
        {images &&
          images.map(el => {
            return (
              <li
                style={{
                  listStyle: 'none',
                }}
                key={el.id}
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
