const app = require('express')();

app.get('/', (req, res) =>
  res.json({ message: 'Docker é incrivel'}) 
  );
  
  const port = process.env.PORT || 8080;
  app.listen(port, () => console.log (`app escutando em http:localhost:${port}`));

