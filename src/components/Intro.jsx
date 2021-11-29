import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container } from "reactstrap";
import imgIntro from "../Assets/img-intro.png";
import "../Styles/Intro.css";

export const Intro = () => {
  return (
    <>
      <div className="intro-bg">
        <Container className="intro">
          <div className="intro-item">
            <p>Encontre e capture seus Pokemons favoritos!</p>
            <NavLink to="/Pokemon">
              <Button color="warning">Encontrar Pokemons</Button>
            </NavLink>
          </div>
          <div className="intro-item">
            <img src={imgIntro} alt="" />
          </div>
        </Container>
      </div>
    </>
  );
};
