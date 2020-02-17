// penulisan import react ada 2
// cara 1 (lebih disarankan cara ini)
import React, { Component } from 'react'
const style = {
  color: "blue",
  backgroundColor: "red"
}
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daftar: "Daftar Masakan Nusantara",
      JudulTiga: this.props.subJudul,
      kondisi: true
    };
    this.handlePesan = this.handlePesan.bind(this);
    this.handleKondisi = this.handleKondisi.bind(this);
  }

  handlePesan(isi,e) {
    e.preventDefault();
    alert(this.state.daftar);
    alert(isi);
  }

  handleKondisi() {
    this.setState((state, props) => {
      return {
        kondisi: !this.state.kondisi
      };
    });
  }

  render() {
    return (
      <div>
        {
          this.state.kondisi === true ? (
            <div>
              <h1 style={style}>Selamat Datang</h1>
            </div>
          ) : (
            <div>
              <h1>Selamat Tinggal</h1>
            </div>
          )
        }
        <button onClick={this.handleKondisi}>Klik Disini</button>
      </div>
    );
    // return (
    //   <div>
    //     <h1>
    //       Belajar React JS
    //     </h1>
    //     <h2>{this.state.daftar}</h2>
    //     <h3>{this.state.JudulTiga}</h3>
    //     <a href="/" onClick={(e)=>this.handlePesan("Pesan dari Header",e)}>Klik Ini</a>
    //   </div>
    // );
  }
}
export default Header;

// // cara 2
// import React from 'react'
//
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>
//           ini dari Header.js
//         </h2>
//       </div>
//     );
//   }
// }
// export default Header;
