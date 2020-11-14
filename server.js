import app from './app';

const port = 3000;
app.listen(port, () => {
  console.log();
  console.log('Listening on port 3001');
  console.log(`http://localhost:${port}`);
});
