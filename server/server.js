const express = require('express')
const db = require('./db/mongoDb')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

const service = require('./api/service');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

app.use('/', service.route);



app.listen(8000, () => {
    db.initializeMongoDb()
    console.log('Server listening on port 8000!')
});

