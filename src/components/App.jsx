import { Component } from 'react';
import Search from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchText: '',
  };

  handleSearch = (searchText) => {
    this.setState({ searchText });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          lineHeight: 0,
        }}
      >
        <Search handleSearch={this.handleSearch} />
        <ImageGallery searchText={this.state.searchText} />
      </div>
    );
  }
}
