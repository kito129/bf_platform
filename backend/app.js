
// --- IMPORT DEPENDENCIES ---
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const env = require('dotenv').config()
const cors = require('cors')
mongoose.promise = require('bluebird');
mongoose.promise = global.Promise

// -- PM2 --
const pm2 = require('@pm2/io')

pm2.init({
  transactions: true, // will enable the transaction tracing
  http: true // will enable metrics about the http server (optional)
})


let meter = pm2.meter({
  name      : 'req/min',
  samples   : 1,
  timeframe : 60
})

let histogram = pm2.histogram({
  name        : 'latency',
  measurement : 'mean'
})

let latency = 0

setInterval(function() {
  latency = Math.round(Math.random() * 100)
  histogram.update(latency)
}, 100)

// check memory
const maxHeapSz = require('v8').getHeapStatistics().heap_size_limit;
const maxHeapSz_GB = (maxHeapSz / 1024 ** 3).toFixed(1);
console.log(`\n\n-----Memory in use: ${maxHeapSz_GB}GB-----\n\n`);


//mongoose.set('debug', true);

app.use(cors())

let baseUrl = "http://localhost:3000"

exports.baseUrl = baseUrl;


// --- DATABASE ---

//database setting

const CONNECTION_URL =
  "mongodb://"+
  process.env.MONGO_ATLAS_USER +
  ":" +
  process.env.MONGO_ATLAS_PW +
  process.env.MONGO_ATLAS_STRING1 +
  process.env.MONGO_ATLAS_DBNAME +
  process.env.MONGO_ATLAS_STRING2;
  
//new db connection 
//const CONNECTION_URL = "mongodb://kito:65255@localhost:51606/bf_historical";


//database connection option
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 1000,
  poolSize: 10 // Maintain up to 10 socket connections
};

//database connection
try {
  mongoose.connect(CONNECTION_URL,options);
  //handle error
  console.log("\n\n-----Server Connected to " + process.env.MONGO_ATLAS_DBNAME + " database-----\n\n")
  mongoose.connection.on('error',console.error.bind(
    console, '\n-----MongoDB connection error------:\n')
  );
  
} catch (error) {
  console.log("ERROR to connect to " + process.env.MONGO_ATLAS_DBNAME + " database");
  console.log("ERROR:\n" + error);}


// --- MIDDLEWARE ---

//use middleware 
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ limit: '50mb' ,extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));

// --- ROUTES ---

// --- IMPORT ROUTERS ---
const marketsRoutes = require("./api/routes/marketsRoutes");
const runnersRoutes = require("./api/routes/runnersRoutes");
const notesRoutes = require("./api/routes/notesRoutes");
const tennisTournamentRoutes = require("./api/routes/tennisTournamentRoutes");
const reportRoutes = require("./api/routes/reportRoutes");
const newReportRoutes = require("./api/routes/newReportRoutes");
const dbManagerRoutes = require("./api/routes/dbManagerRoutes");
const studyRoutes = require("./api/routes/studyRoutes");
const userRoutes = require("./api/routes/loginRoutes");

// advanced market
const marketsAdvancedRoutes = require("./api/routes/marketsAdvancedRoutes");


// --- MAIN ROUTES ---
app.use('/', express.static('public'))

// Routes which should handle requests
app.use("/api/markets", marketsRoutes);
app.use("/api/runners", runnersRoutes);
app.use("/api/notes", notesRoutes);
app.use("/api/tennisTournament", tennisTournamentRoutes);
app.use("/api/report", reportRoutes);
app.use("/api/newReport", newReportRoutes);
app.use("/api/dbManager", dbManagerRoutes);
app.use("/api/study", studyRoutes);
app.use("/api/user", userRoutes);

app.use("/api/marketsAdvanced", marketsAdvancedRoutes);


// Routes which should be accepted requests
app.use((req, res, next) => {
  //CORS error fix in the header
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});



// --- ERROR ROUTES ---
//error 404 for not found routers
app.use((req, res, next) => {
  const error = new Error("Route Not Exist");
  error.status = 404;
  next(error);
});


//specific error or 500 generic error routers manager
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json(JSON.stringify({
    error: {
      message: error.message
    }
  }));
});


// --- CREATE SERVER ---
//app is listening on PORT
let server = app.listen(process.env.PORT, () => {
  console.log("Server is listening on port: " + process.env.PORT  );
});


// set timeout for study response
let apiTimeout = 6 * 60 * 1000
server.setTimeout(apiTimeout, () => {
  let err = new Error('Request Timeout');
  err.status = 408;
});


