import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function Registro() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    age: "",
    name: ""
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      ` Email: ${user.email} Senha: ${user.password} Idade: ${user.age}  Nome: ${user.name} `
    );
  };

  return (
    <Container component="main" maxWidth="xl" >
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ margin: 1, backgroundcolor: "rgb(154, 154, 154)" }}>
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastro
        </Typography>
        <Box
          component="form"
          sx={{ margin: 1 }}
          onSubmit={handleSubmit}
          noValidate
          
        >
         <TextField
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            margin="normal"
            color = "rgb(154, 154, 154)"
            value={user.email}
            onChange={onChange}
          />
          
          <TextField
            required
            fullWidth
            id="password"
            label="Senha"
            name="password"
            margin="normal"
            color = "rgb(154, 154, 154)"
            type="password"
            value={user.password}
            onChange={onChange}
          />

            <TextField
            required
            fullWidth
            id="age"
            label="Idade"
            name="age"
            margin="normal"
            color = "rgb(154, 154, 154)"
            value={user.age}
            onChange={onChange}
          />

           <TextField
            required
            fullWidth
            id="name"
            label="Nome"
            name="name"
            margin="normal"
            color = "rgb(154, 154, 154)"
            value={user.name}
            onChange={onChange}
          />
          <Button
            sx={{ mt: 3, mb: 2, backgroundColor: "rgb(154, 154, 154)" }}
            fullWidth
 e         type="submit"
            variant="contained"
          >
            Cadastrar
          </Button>
        </Box>
        Desenvolvido por: Leonardo, Guilherme e Hyago
      </Box>
    </Container>
  );
}

export default Registro;
