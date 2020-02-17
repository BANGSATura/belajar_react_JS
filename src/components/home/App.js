import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
// import List from './List'
import Top from './Top'
// import Main from './Main'
// import Form from './Form'
import CustomInput from './CustomInput'

//penulisan nama class yaitu huruf awal kapital
class App extends Component {
  render() {
    return (
      <div>
        <Header subJudul="3 Terbaik"/>
          <Top/>
          <CustomInput/>
        <Footer name="Satura"/>
      </div>
    );
  }
}

export default App;
