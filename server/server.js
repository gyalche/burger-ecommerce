import app from './app.js';

app.get('/', (req, res, next) => {
  res.send('Working...');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
