const app = require('./app');

app.listen(3001, () => {
    console.log("Running");
});

module.exports = app;