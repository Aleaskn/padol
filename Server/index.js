const express = require('express');
const app = express();
const axios = require('axios');
const port = process.env.PORT || 3000;
const cors = require('cors');
const router = express.Router();
const db = require('./db');

const cittaController = require('./controllers/cittaController'); 
/*const strutturaController = require('./controllers/strutturaController');
const campoController = require('./controllers/campoController');
const prenotazioneController = require('./controllers/prenotazioneController');
const userController = require('./controllers/userControllers');
const userVerifyId = require('./middleware/userVerifyId'); */                             


app.use(cors()); //Per consentire alle nostre API la condivisione di risorse cross-origin


app.use(express.urlencoded({   //Per consentire alle nostre API a ricevere dati dal client
  extended: true
}));

//router.route("/").axios.get(cittaController).post(cittaController);

app.use('/', [
  require('./controllers/cittaController')
]);





app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})