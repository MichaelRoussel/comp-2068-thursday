/* eslint-disable no-console */
const express = require(`express`);

const app = express();

app.get(`/`, (req, res) => {
    res.send(`Hey world`);
});

app.get(`/about`, (req, res) => {
    res.send(`I like long walks on the beach`);
})
const port = (process.emv.PORT || 4000);
app.listen((process.emv.PORT || 4000), () => console.log(`Listening on ${port}`));