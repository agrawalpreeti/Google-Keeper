import React from 'react';

function Footer(){
    var time = new Date();
    var currentYear = time.getFullYear()
    return <footer><p>Copyright @ {currentYear} </p></footer>
}

export default Footer;