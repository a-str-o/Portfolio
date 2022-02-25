import React from 'react';
import Hero from '../img/hero.jpg';
import '../App.css';
import styled from "styled-components";
import Grid from '@mui/material/Grid';

const Heroo = styled.div`
  width: 100%;
  height: 800px;
  background-image: url(${Hero}); no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 1024px) {
    width: auto;
    height: 600px;
  }
  @media screen and (max-width: 640px) {
    width: auto;
    height: 400px;
  }
`;

export default function home() {
  return(
 <div className="container-home">
      <h1 className="hero-text top0">
          YOUNES ELGUERRAOUI <br/>
          <p className="ml-8">softwar</p>
      </h1>
      <Heroo />
      <div className="container-body">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <h1>hello</h1>
            </Grid>
            <Grid item xs={6}>
            <h1>hello</h1>
            </Grid>
            <Grid item xs={6}>
            <h1>hello</h1>
            </Grid>
            <Grid item xs={6}>
            <h1>hello</h1>
            </Grid>
          </Grid>
      </div>
 </div>

  )
}