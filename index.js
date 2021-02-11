const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {                        //Listening to the whatever PORT it is on
    console.log(`App is listening on PORT ${PORT}`);
});