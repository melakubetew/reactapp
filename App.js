import React from 'react';
import Header from "./Header/Header"
import Body from "./body/Body"
import Footer from "./footer/Footer"
class App extends React.Component{

render(){
  return (
    <div>
      <h2>Meklit Bekele</h2>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

  
}
export default App;
