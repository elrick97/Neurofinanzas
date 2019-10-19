import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

//Material UI

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const axios = require('axios').default;

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();

  /**
   * 
   * @param {*} event from form
   * 
   * Aqui mandamos el correo del form
   * 
   * Validamos
   */
  function sendForm(event) {
    event.preventDefault();

    const body = {
      application: {
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value
      }
    }



    event.target.name.value = ""
    event.target.email.value = ""
    event.target.message.value = ""

    const url = "https://us-central1-neurofinanzaswebpage.cloudfunctions.net/sendMail"

    axios.post(url, body);
  }

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>¡Únete al equipo de Neurofinanzas!</h2>
          <h4 className={classes.description}>
          Ayuda a más personas a educarse para lograr la autonomía financiera y aprende mucho en la marcha.
          ¡Genera relaciones a largo plazo,  y construye patrimonio propio! 
          ¡JUNTOS ES POSIBLE!
          </h4>
          <form onSubmit={sendForm}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Nombre Completo"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Correo Electronico"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="¿Porque quieres ser parte de Neurofinanzas?"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                  <Button color="primary" type="submit">¡Enviar!</Button>
                </GridItem>
              </GridContainer>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
