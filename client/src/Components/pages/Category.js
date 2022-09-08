import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import recycle from "../images/recycle.png";
import trash from "../images/trash.png";
import transportation from "../images/cycle.png";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import "../styles/Category.css";
  
export default function App() {
  return (
    <div style={{ display: 'block', width: 1300, padding: 30, backgroundColor: 'black'}}>
      <h4 style={{ color: 'white' }}>Categories</h4>
      <Carousel>
         {/* ---------------------- category slides------- */}
        <Carousel.Item >
          <img
            className="d-block w-60" src={recycle} style={{ height: 505 }}
            alt="recycle"
          />          
          <Carousel.Caption>
            <h3>Recycle</h3>
            <p> Reducing, reusing, and recycling cuts down on the amount of raw material 
         needed to create new products, lessening the overall impact on natural resources.</p>
         <Button variant="info"> <Link to="/recycle">Go to Recycle</Link></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-60" src={trash} style={{ height: 555 }}
            alt="trash"/>
          <Carousel.Caption>
            <h3>Pick up trash</h3>
            <p>Every piece of litter intercepted from the beach is one less piece of
               litter that doesn't end up in the ocean</p>
               <Button variant="info"> <Link to="/trash">Pick up trash</Link></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-60" src={transportation} style={{ height: 505 }}
            alt="trash"/>
          <Carousel.Caption>
            <h3>Reduce Your Carbon Footprint</h3>
            <p> Cycling improves cardio-vascular and aerobic fitness, lowers blood pressure, 
        boosts energy, builds muscle, and improves coordination. </p>
        <Button variant="info"> <Link to="/transportation">Reduce Your Carbon Footprint</Link></Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}