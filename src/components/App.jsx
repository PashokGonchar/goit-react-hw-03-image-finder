import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchText: '',
  };

  handleSearch = searchText => {
    this.setState({ searchText });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
          lineHeight: 0,
          flexDirection: 'column',
        }}
      >
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery searchText={this.state.searchText} />
      </div>
    );
  }
}