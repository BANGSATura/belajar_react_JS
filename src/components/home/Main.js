import React, { Component } from 'react';
import menuMakanan from './lib/Food'

class Main extends Component {
  constructor() {
    super();
    this.state = {
      title: "Menu Makanan",
      title2: "Menu Minuman",
      nama: "",
      kota: ""
    }
    this.klikSaya = this.klikSaya.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  //penulisan setState ada 2
  //cara 1
  // klikSaya() {
  //   this.setState({title: "Pilih Makanan"})
  // }

  //cara 2 (lebih disarankan)
  klikSaya() {
    this.setState((state, props) => {
      return {title: this.state.title2, title2: this.state.title};
    });
  }

  handleChange(value,isi) {
    this.setState({
      [value]: isi.target.value
    });
  }

  // componentDidMount() {
  //   console.log("Berjalan");
  // }
  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <h3>{this.state.title2}</h3>
        <button onClick={this.klikSaya} >Klik Saya</button>
        <br/>
        <br/>
        <input placeholder="Nama" type="text" value={this.state.nama} onChange={(isi) => this.handleChange("nama",isi)}/>
        <br/>
        <br/>
        <input placeholder="Kota" type="text" value={this.state.kota} onChange={(isi) => this.handleChange("kota",isi)}/>
        {menuMakanan.map((value, index) => {
            // console.log(value);
            // console.log(index);
            return (
              <div key={index}>
                <p>Menu: {value.nama}</p>
                <p>Harga: {value.harga}</p>
              </div>
            );
          })
        }
      </div>
    );
  }
}
export default Main;
