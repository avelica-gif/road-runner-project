const express = require('express');

const app = express();

//We want Heroku to figure out the port
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes to the files inside the the "routes" folder
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


//Listening to the whatever PORT it is on
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
});

 