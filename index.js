const express = require('express');
const axios = require('axios');
var cors = require('cors')

const app = express()
const port = 5000
app.use(cors())
app.get('/posts', async (req, res) => {
    const { per_page, page } = req.query;
    const url = `https://techcrunch.com/wp-json/wp/v2/posts?per_page=${per_page}&context=embed&page=${page}`;
    
    try {
      const response = await axios.get(url);
      res.send(response.data);
    } catch (error) {
      res.status(500).send('Error fetching data from API');
    }
  });

app.listen(port, () => {
    console.log(`Deca notes backend app listening on port ${port}`)
})