import express from 'express';
import data from './data';
const app = express();
app.get('/api/products', (req,res)=>{
    res.send(data.products);
  });
  app.listen(2000, () => {
    console.log('Server started at http://localhost:2000');
  });