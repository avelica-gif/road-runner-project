
//app passed as an argument to the function
module.exports = (app) => {
    app.get('/api/shipments', (req, res) => {
        res.json({ message: 'Hello World'})
    });
};

