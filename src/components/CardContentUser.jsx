import React from "react";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";

//Componente que contiene el contenido de las cards de cada usuario
const CardContentUser = ({user}) => {
  return (
    
      <CardContent>
          {user.nombre.toUpperCase()}
      
        <Grid container>
          <Grid item xs={9}>
              Dias planificados
              <br/>
              Cant. tiendas planificados
          </Grid>

          <Grid item xs={3}>
              {user.dias_plani}
            <br/>
              {user.tiendas_plani}
          </Grid>
        </Grid>
      </CardContent>
  
  );
};

export default CardContentUser;
