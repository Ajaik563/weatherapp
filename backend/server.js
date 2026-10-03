require('dotenv').config();
const express = require('express');
const cors = require('cors');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Weather API is running' });
});


app.use('/api/weather', weatherRoutes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
