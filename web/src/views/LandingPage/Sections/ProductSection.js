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
          <h2 className={classes.title} style={{color: "#35a849"}}>NUESTRO PROPÓSITO</h2>
          <h3 className={classes.description}>
          Construimos prosperidad Social de Persona en persona, de Familia en Familia.
          </h3>
          <h5 className={classes.description}>
          Somos una Asociación Civil cuya oferta promueve un modelo disruptivo de Educación Financiera.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title=" Foro de Neurofinanzas"
              description="Cada tercer miércoles de mes, charlamos sobre finanzas en un espacio incluyente y libre de ventas. ¡Toda la familia es bienvenida!"
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Educación Financiera para empresas"
              description="Tenemos una metodología con programas registrados ante la STPS para que el dinero deje de ser un factor de estrés para el personal de tu empresaa."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Taller “Dinero a tu favor”"
              description="Taller de 8 sesiones, para cambiar la forma en que te relacionas con el dinero y tomar mejores desiciones financieras para una vida próspera."
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
