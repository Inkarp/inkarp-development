const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');


const subscribeRoute = require('./routes/subscribe');
const careersRouter = require('./routes/careerRoutes');
const contactRouter = require('./routes/contactRoutes');
const catalystRouter = require('./routes/catalystRoutes');
const webinarRouter = require('./routes/webinarRoutes');
const enquiryRoute = require("./routes/enquiry");
const serviceEnquiryRoute = require('./routes/serviceEnquiry');

// Load environment variables
dotenv.config();

// Connect to MongoDB
const startServer = async () => {
  const connectDB = require('./models/database.js');
  await connectDB();
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port ${process.env.PORT || 8000}`);
  });
};

const app = express();
app.set('trust proxy', true);

// --------------------
// CORS configuration
// --------------------
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      'http://localhost:5173',
      'https://inkarp.co.in',
      'https://www.inkarp.co.in',
      'https://inkarppersonal.vercel.app',
      'https://inkarp-personal-demo.vercel.app',
      "https://inkarp-development.vercel.app/"
    ];

    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS: ' + origin));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/subscribe', subscribeRoute);
console.log('Subscribe Routes Loaded');

app.use('/api/careers', careersRouter);
console.log('Career Routes Loaded');

app.use('/api/contact', contactRouter);
console.log('Contact Routes Loaded');

app.use('/api/enquiry', enquiryRoute);
console.log('Enquiry Routes Loaded');

app.use('/api/catalyst', catalystRouter);
console.log('Catalyst Routes Loaded');

app.use('/api/webinar', webinarRouter);
console.log('Webinar Routes Loaded');

app.use('/api/service', serviceEnquiryRoute);
console.log('Service Routes Loaded');

app.get('/', (req, res) => {
  res.send('Inkarp Backend is running');
});

app.get('/api/enquiry', (req, res) => {
  res.send('ENQUIRY API IS WORKING');
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || 'Something went wrong!'
  });
});

startServer();
module.exports = app;
