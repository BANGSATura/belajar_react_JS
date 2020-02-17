import React, { Component } from 'react';

class Image extends Component  {
  render() {
    return (
      <img src={this.props.gambar} title="Makanan" alt="Makanan" width={this.props.ukuran}/>
    );
  }
}
export default Image;
