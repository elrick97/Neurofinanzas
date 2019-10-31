import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
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
  const teamMembers = [
    {
      name: "Cristina",
      role: "Fundadora",
      picPath: require("assets/img/Team-Pics/team-cristina@3x.png")
    },
    {
      name: "Alejandra",
      role: "Logística",
      picPath: require("assets/img/Team-Pics/team-ale@3x.png")
    },
    {
      name: "Yolanda",
      role: "Talento Creativo",
      picPath: require("assets/img/Team-Pics/team-yola@3x.png")
    },
    {
      name: "Fernando",
      role: "Logística",
      picPath: require("assets/img/Team-Pics/team-fernando@3x.png")
    },
    {
      name: "Blanca",
      role: "Logística",
      picPath: require("assets/img/Team-Pics/team-blanca@3x.png")
    },
    {
      name: "Angela",
      role: "Talento Creativo",
      picPath: require("assets/img/Team-Pics/team-angela@3x.png")
    },
    {
      name: "Ricardo",
      role: "Organizador",
      picPath: require("assets/img/Team-Pics/team-ricardo@3x.png")
    },
    {
      name: "Concepción",
      role: "Servicio Social",
      picPath: require("assets/img/Team-Pics/team-conchita@3x.png")
    },
    {
      name: "Priscila",
      role: "Logística",
      picPath: require("assets/img/Team-Pics/team-priscila@3x.png")
    },
    {
      name: "Nombre",
      role: "Sistematización",
      picPath: require("assets/img/Team-Pics/team-nombre@3x.png")
    },
    {
      name: "Nombre",
      role: "Funcion",
      picPath: require("assets/img/Team-Pics/team-nombre@3x.png")
    }
  ]
  return (
    <div className={classes.section}>
      <h2 className={classes.title} style={{color: "#35a849"}}>Conoce al equipo</h2>
      <div>
        <Grid container justify="center" alignItems="center">
          {teamMembers.map((member) => {
            return(
              <Grid item xs={2}>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={member.picPath} alt="..." className={imageClasses} />
                </GridItem>
                  <h4 className={classes.cardTitle}>
                    {member.name}
                  <br />
                  <small className={classes.smallTitle}>{member.role}</small>
                </h4>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  );
}
