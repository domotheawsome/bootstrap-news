// please note this was largely adapted from news api documentation on scraping article from the url
// the other option was purchasing a business level plan which is 500 per month
// i do not have $500 to blow on an api, so im scrapign the page instead

// this is their documentation: https://newsapi.org/docs/guides/how-to-get-the-full-content-for-a-news-article

// note that because we are doing this in a react app, we need to create a proxy serevr to handle scraping and parsing
// using node and express to do this, and then sending the data to the react app


const express = require('express');
const axios = require('axios');
const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');
const cors = require('cors');

// express server
const app = express();
app.use(cors());

// handle article scraping
app.get('/scrape', async (req, res) => {

  // extract url from query
  const url = req.query.url;

  try {
    // fetch webpage content
    const response = await axios.get(url);

    // converting contnent into dom object
    const dom = new JSDOM(response.data, { url: url });

    // parse dom object, extract article content
    const article = new Readability(dom.window.document).parse();

    // send article content as json repsonse
    res.json(article);

  } catch (error) {
    // error handling
    console.error('Error scraping:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// listening on port 3001 ... change as needed
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});