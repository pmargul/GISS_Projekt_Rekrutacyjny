 var mongoose = require('mongoose');

const uri = "mongodb+srv://admin:4pWbLaT8a4T79We@taskdatacluster.fcsk9.mongodb.net/giss_tasks?retryWrites=true&w=majority";

function initializeMongoDb(){
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', (error) => console.error(error));
    db.once('open', () => console.log('Connected to Database'));
}

module.exports = {
    initializeMongoDb,
};
