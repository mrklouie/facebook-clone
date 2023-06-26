const notFound = (req, res) => {
  res.send(`<h1>404 Page not found</h1>
  <a style="display: block;" href="/">Go back to homepage</a>
  `);
};

module.exports = notFound;
