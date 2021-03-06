global.fetch = require('node-fetch');
const config = require('universal-config');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const express = require('express');
const path = require('path');

const unsplash = new Unsplash({
    applicationId: config.get('APPLICATION_ID'),
    secret: config.get('SECRET'),
    callbackUrl: config.get('CALLBACK_URL')
});

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/photos', (req, res)=>{
    unsplash.photos
        .listPhotos(req.query.start, req.query.count)
        .then(toJson)
        .then(json => res.json(json));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));