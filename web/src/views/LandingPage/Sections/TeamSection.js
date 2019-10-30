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

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";
import cutePic from "assets/img/cute.png"


const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const names = ["Persona 0",
                 "Persona 1",
                 "Persona 2",
                 "Persona 3",
                 "Persona 4",
                 "Persona 5",
                 "Persona 6",
                 "Persona 7",
                 "Persona 8",
                 "Persona 9",
                 "Persona 10"];

  return (
    <div className={classes.section}>
      <h2 className={classes.title} style={{color: "#35a849"}}>Conoce al equipo</h2>
      <div>
        <GridContainer>
            {names.map((name) => {
              return(
                <GridItem xs={12} sm={12} md={4}>
                  <Card plain>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={cutePic} alt="..." className={imageClasses} />
                    </GridItem>
                      <h4 className={classes.cardTitle}>
                        {name}
                      <br />
                      <small className={classes.smallTitle}>Model</small>
                    </h4>
                  </Card>
                </GridItem>
              )
            })}
        </GridContainer>
      </div>
    </div>
  );
}
