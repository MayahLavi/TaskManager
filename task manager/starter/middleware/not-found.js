const notFound = (req, res) =>
  res.status(404).send('<h1>404 <a href="/">go back</a> </h1>');
module.exports = notFound;
