import React, {/* useEffect */ useState} from "react";
import { Button, Grid } from "@mui/material";
import FullCalendarCustom from "../components/FullCalendarCustom";
import ListTasks from "../components/ListTasks";

const users1 = [
  {
    nombre: "prueba 55",
    idus: 1,
    color: "ff0000",
    tiendas_plani: 1,
    dias_plani: 1
  },
  {
    nombre: "elemento 2",
    idus: 2,
    color: "ff0000",
    tiendas_plani: 2,
    dias_plani: 2
  },
  {
    nombre: "test 3",
    idus: 3,
    color: "ff0000",
    tiendas_plani: 3,
    dias_plani: 3
  }
]


//Pagina principal que renderiza el calendario
const CalendarPage = () => {

  //estado que guarda los eventos
  const [event, setEvent] = useState([]);

  //Estado que contiene los usuarios
  const [users, setUsers] = useState(users1);

  //Renderizo la lista de usuarios, el input de busqueda y el calendario cada uno con las props necesarias
  return (
    <Grid container spacing={3} >

      {/*Lista de Tareas*/}
      <Grid item lg={3} sm={3} md={3} xs={3}>
        <ListTasks users={users} setUsers={setUsers}/>
      </Grid>

      {/*Calendario*/}
      <Grid item lg={9} sm={9} md={9} xs={9}>
        <FullCalendarCustom event={event} setEvent={setEvent}/>
        <Button sx={{mt: 2}} variant="outlined" >Guardar</Button>
      </Grid>

    </Grid>
  );
};

export default CalendarPage;
