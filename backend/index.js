const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./database/database');
const formRoutes = require('./routes/formRoutes');

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
connectDB();




app.use('/api/forms', formRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
