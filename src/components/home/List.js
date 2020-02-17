import React, { Component } from 'react';
import Image from './Image'
class List extends Component {
  render() {
    return (
      <div>
        <ol>
          <Image gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" ukuran="500"/>
          <li>Nasi Padang</li>
          <Image gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" ukuran="300"/>
          <li>Sate</li>
          <Image gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" ukuran="200"/>
          <li>Soto Lamongan</li>
        </ol>
      </div>
    );
  }
}
export default List
