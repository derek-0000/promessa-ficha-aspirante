import { useState } from "react";
import { Icon } from "@iconify/react";

import {
  Box,
  Grid,
  Stack,
  Button,
  Container,
  TextField,
  Typography,
  IconButton,
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
  const [documents, setDocuments] = useState<string[]>([]);
  const handleAddDocument = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDocuments([
      ...documents,
      (event.currentTarget.elements[0] as HTMLInputElement).value,
    ]);
    event.currentTarget.reset();
  };

  const handleFileDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    const title = event.currentTarget.id;
    setDocuments(documents.filter((doc) => doc !== title));
  };

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
              <TextField
                multiline
                label="Fortalezas"
                color="success"
                sx={{ borderColor: "success.main" }}
              />
              <TextField
                multiline
                label="Areas de Oportunidad"
                color="warning"
                sx={{ borderColor: "warning.main" }}
              />
              <TextField
                multiline
                label="Avisos y Alertas"
                color="error"
                sx={{ borderColor: "error.main" }}
              />
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
              Documentos que se Anexan
            </Typography>
            <form onSubmit={handleAddDocument}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                gap={2}
              >
                <TextField
                  required
                  label="Documentos que se Anexan"
                  fullWidth
                />
                <IconButton
                  type="submit"
                  sx={{
                    transition: "all .2s",
                    ":hover": { color: "primary.light" },
                  }}
                >
                  <Icon icon="uil:plus-circle" />
                </IconButton>
              </Stack>
            </form>
            {documents.length ? (
              <Box sx={{ p: 2, border: "1px solid #D1D1D1", borderRadius: 1 }}>
                {documents.map((document, index) => (
                  <Box width="100%" key={document + index}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      gap={2}
                    >
                      <Typography>{document}</Typography>
                      <IconButton
                        id={document}
                        onClick={handleFileDelete}
                        sx={{
                          transition: "all .2s",
                          ":hover": { color: "error.light" },
                        }}
                      >
                        <Icon icon="uil:trash-alt" />
                      </IconButton>
                    </Stack>
                  </Box>
                ))}
              </Box>
            ) : null}
          </Box>
        </PrintComponent>
      </Container>
    </Box>
  );
}

export default App;
