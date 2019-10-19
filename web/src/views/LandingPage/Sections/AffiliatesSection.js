import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import tecFoto from "assets/img/logoTec.png";
import inmobilariaLuxFoto from "assets/img/inmobilariaLuxLogo.jpeg";
import zongaFoto from "assets/img/zongaLogo.png";
import udemFoto from "assets/img/udemLogo.jpg";
import secretariaFoto from "assets/img/secretariaEconomiaLogo.png";
import ticketopolisFoto from "assets/img/ticketopolisLogo.png";



const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    //classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Alianzas</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src= {tecFoto} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Tec de Monterrey
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={inmobilariaLuxFoto} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Inmobiliaria Lux
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src= {zongaFoto} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Zonga
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src="../../../assets/img/perfil.jpg" alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Embajada de USA en México
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={secretariaFoto} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Secretaría de Economía de N. L
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={udemFoto} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                UDEM
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src="../../../assets/img/perfil.jpg" alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Marketplace Literacy Project
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src= {ticketopolisFoto} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Ticketopolis
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src="../../../assets/img/perfil.jpg" alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Fotophy
                <br />
              </h4>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
