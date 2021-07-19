import React from 'react';
import Header from "./Header"
import Note from "./Note"
import Footer from "./Footer"
import notes from "./notes";



function App(){
    return (
    <div><Header/>
       {notes.map((info) => (
       <Note
     id={info.id}
     key={info.key}
     title={info.title}
     content ={info.content}
    />
       )   
)}
    <Footer/>

    </div>);
}

export default App;