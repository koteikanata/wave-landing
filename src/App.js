import './App.css';
import React from 'react';
import Cover from './Cover';
import About from './AboutUs';
import YouReceive from './YouReceive';
import ConquerThePeaks from './ConquerThePeaks';
import Gallery from './Gallery';
import Quote from './Quote';
import Numbers from './Numbers';
import Blog from './Blog';
import OurStuff from './OurStuff';
import Services from './Services';
import Map from './Map';
import Submit from './Submit';

function App() {
  return (
    <div className="App">
      <Cover />
      <About />
      <YouReceive />
      <ConquerThePeaks />
      <Gallery />
      <Quote />
      <Numbers />
      <Blog />
      <OurStuff />
      <Services />
      <Map />
      <Submit />
    </div>
  );
}

export default App;
