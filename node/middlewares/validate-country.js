export default function(req, res, next) {
  const serviceCountries = ['ng', 'ke', 'za', 'gh'];
  const country = req.query.country?.toLowerCase();
console.log("country", req.query)
  if(!serviceCountries.includes(country)) {
    return res.status(500).json({
      status: 'error',
      message: 'country code is required'
    });
  }

  next()
}