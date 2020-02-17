import React from 'react';

const Top = (e) => {
  function handlePesan(pesan,e) {
    e.preventDefault();
    alert("Ini Halaman Top");
    alert(pesan);
  }
  return (
    <div>
      <a href="/" onClick={(e)=>handlePesan("Pesan Dari Top",e)}>Halaman Top</a>
    </div>
  );
}
export default Top;
