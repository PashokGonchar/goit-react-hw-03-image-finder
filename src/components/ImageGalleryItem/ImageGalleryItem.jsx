import { getImages } from 'api/imagesApi';

const { Component } = require('react');

class CreateImageGallery extends Component {
  state = {};

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props);
    if (prevProps.searchText !== this.props.searchText) {
      getImages(this.props.searchText);
    }
  }

  render() {
    return (
      <li
        style={{
          listStyle: 'none',
        }}
      >
        <img src="" alt="" />
      </li>
    );
  }
}

export default CreateImageGallery;
