const express = require('express');
const path = require('path')

const app = express();
const PORT = 3000;


///A IA disse para eu colocar este código, pois ele deixaria o estilo funcionar novamente
app.use(express.static('public'));

// Rota inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "Public/HTML/login.html"));
});

///Indo para o home
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, "Public/HTML/home.html"));
});


///Isso, fará com que o servidor fique aberto
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});