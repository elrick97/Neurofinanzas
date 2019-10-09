import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Neurofinanzas"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      {/* TODO <Parallax>: 
              1.- Checar que imagen poner 
              2.- Vamos ocupar boton? 
                2.1.- A donde llevara el boton?
              */}
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Empieza a cambiar tu historia con Neurofinanzas</h1>
              <h4>
                Creemos que el éxito está más allá de los miedos.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/channel/UCHQ9ajHUx8UsWKI_B5ibWow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Canal de YT
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection /> {/* TODO: Descripcion de sus productos y cambiar iconos */}
          {/* TODO: Affiliation section */}
          <TeamSection /> {/* TODO: Fotos, nombres e informacion de los miembros */}
          <WorkSection /> {/* TODO:  Informacion sobre voluntariado y descripcion*/}
        </div>
      </div>
      <Footer /> {/* TODO: Informacion de Neurofinanzas*/}
    </div>
  );
}