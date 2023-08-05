import { getImages } from 'api/imagesApi';
import Button from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  state = {
    images: [],
    page: 1,
    perPage: 12,
    isLoading: false,
    isModalOpen: false,
    selectedImageUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({
        images: [],
        page: 1,
      });
      this.fetchImages(this.props.searchText, 1);
    }
  }

  fetchImages = (searchText, page) => {
    const { perPage } = this.state;
    this.setState({ isLoading: true });
    getImages(searchText, page, perPage)
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          images: prevState.images.concat(data.hits),
          page: page,
        }));
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  handleLoadMore = () => {
    const { searchText } = this.props;
    const { page } = this.state;
    const nextPage = page + 1;
    this.fetchImages(searchText, nextPage);
  };

  handleImageClick = imageUrl => {
    this.setState({
      isModalOpen: true,
      selectedImageUrl: imageUrl,
    });
  };

  handleCloseModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { images, isLoading, isModalOpen, selectedImageUrl } = this.state;
    const hasImages = images.length > 0;
    const hasMoreImages = images.length % 12 === 0;

    return (
      <>
        {isLoading && <Loader />}
        {images &&
          images.map(el => {
            return (
              <li
                style={{
                  listStyle: 'none',
                }}
                key={el.id}
                id={el.id}
                onClick={() => this.handleImageClick(el.largeImageURL)}
              >
                <img src={el.webformatURL} alt={el.tags} />
              </li>
            );
          })}
        {hasImages && hasMoreImages && (
          <Button onClick={this.handleLoadMore} />
        )}
        {isModalOpen && (
          <Modal imageUrl={selectedImageUrl} onClose={this.handleCloseModal} />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
