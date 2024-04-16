import { Icon } from "@iconify/react";

import {
  Box,
  Grid,
  Stack,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";

import PrintComponent from "./components/PrintComponent";

const personalInformation = [
  "Promotoria",
  "Tipo Aspirante",
  "Edad",
  "Estado Civil",
  "Celular",
  "No. de Dependientes",
  "Telefono Particular",
  "E-mail",
  "Estudios",
  "Domicilio Particular",
  "Domicilio Fiscal",
  "Fecha Examen",
  "Folio de Cedula",
  "Vigencia Inicial",
  "Cedula Vigente",
  "Vigencia Final",
];

function App() {
  return (
    <Box sx={{ py: 3 }}>
      <Container>
        <PrintComponent
          childrenHidden={false}
          wrapper={
            <Button
              disableElevation
              variant="contained"
              sx={{ textTransform: "capitalize", mt: 3 }}
              startIcon={<Icon icon="uil:save" />}
            >
              Guardar/Imprimir
            </Button>
          }
        >
          <Box p={4}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h4" fontWeight={700}>
                Ficha tecnica del Aspirante
              </Typography>
            </Stack>
            <Typography variant="h6" mb={2} mt={2}>
              Datos Personales
            </Typography>
            <Grid container columns={12} spacing={2}>
              {personalInformation.map((label) => (
                <Grid item xs={6} key={label}>
                  <TextField multiline label={label} sx={{ width: "100%" }} />
                </Grid>
              ))}
            </Grid>
            <Typography variant="h6" mb={2} mt={2}>
              Datos Sieph
            </Typography>
            <Stack gap={2}>
              <TextField multiline label="Fortalezas" />
              <TextField multiline label="Areas de Oportunidad" />
              <TextField multiline label="Avisos y Alertas" />
            </Stack>
            <Typography variant="h6" mb={2} mt={2}>
              Experiencia Laboral
            </Typography>
            <TextField multiline label="Experiencia Laboral" fullWidth />
            <Typography variant="h6" mb={2} mt={2}>
              Informacion General
            </Typography>
            <TextField multiline label="Informacion General" fullWidth />
            <Typography variant="h6" mb={2} mt={2}>
              Recomendaciones del Promotor
            </Typography>
            <TextField
              multiline
              label="Recomendaciones del Promotor"
              fullWidth
            />
            <Typography variant="h6" mb={2} mt={2}>
              Datos Sieph
            </Typography>
            <TextField multiline label="Documentos que se Anexan" fullWidth />
          </Box>
        </PrintComponent>
      </Container>
    </Box>
  );
}

export default App;
