import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Nuestra misión</h2>
          <h5 className={classes.description}>
          Lograr autonomía financiera a través de activos que trabajan y brindan rendimientos y son propios.
          Manejar de forma saludable las finanzas personales generando bienestar emocional y tranquilidad en el presente y futuro.
          En un pensamiento de la abundancia reconocer que el dinero es un medio para alcanzar otras metas y aprender a que “fluya” : 
          ganando, invirtiendo y manejando de mejor manera la deuda.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Activos que brindan rendimientos"
              description="Aqui va una mejor descripcion y asi asdfljhasl kdjflas dflhja sdljfh asjhd f,a sdf,j asdfj, ,asjdhf lasjdhf lasdjhf laksjhdf ,jhasdf "
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Manejar tus finanzas"
              description="Aqui va una mejor descripcion y asi asdfljhasl kdjflas dflhja sdljfh asjhd f,a sdf,j asdfj, ,asjdhf lasjdhf lasdjhf laksjhdf ,jhasdf "
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Bienestar Emocional y Tranquilidad"
              description="Aqui va una mejor descripcion y asi asdfljhasl kdjflas dflhja sdljfh asjhd f,a sdf,j asdfj, ,asjdhf lasjdhf lasdjhf laksjhdf ,jhasdf "
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
