import React from 'react';

 // penulisan function cara 1 (lebih Disarankan)
const Footer = (props) => {
  return (
    <div>
      <small>By {props.name}</small>
    </div>
  );
}
// penulisan function cara 2
// function Footer() {
//   return (
//     <div>
//       <small>By Satura</small>
//     </div>
//   );
// }
export default Footer;
