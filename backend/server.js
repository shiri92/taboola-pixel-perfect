const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


const addUserRoutes = require('./routes/userRoutes');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});
app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

addUserRoutes(app);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));