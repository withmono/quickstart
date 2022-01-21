// import the module
import Mono from 'mono-node'
import isValidCountry from '../middlewares/validate-country.js';

// Setup and configure the Mono API Client
const monoClient = (country) => new Mono.Mono({
  secretKey: function() {
    switch(country) {
      case "ng":
        return process.env.MONO_SECRET;
      case "ke":
        return process.env.MONO_SECRET_KE;
      case "za":
        return process.env.MONO_SECRET_ZA;
      case "gh":
        return process.env.MONO_SECRET_GH;
    }
  }(),
})

export default function(app){

  // Initial authentication with Mono Widget and backend
  // https://docs.mono.co/reference/authentication-endpoint
  app.get('/api/exchangetoken', isValidCountry, (req, res) => {
    const {country} = req.query;
    monoClient(country).auth.getAccountId({code: req.query.token},(err, results) => {
        if (err) {
            console.log(err)
            res.status(500).json(err)
        }
        else if (results){
            console.log(results)
            res.status(200).json(results)
        }
    })

  })

  // Get an authenticated users bank account details
  // https://docs.mono.co/reference/bank-account-details
  app.get('/api/accounts/:id', isValidCountry, (req, res) => {
    const {country} = req.query;

    monoClient(country).account.getAccountInformation({accountId: req.params.id}, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).json(err)
        }
        else if (results){
            console.log(results)
            res.status(200).json(results)
        }
    })

  })

  // Query an account's bank statement
  // https://docs.mono.co/reference/bank-statement
  app.get('/api/accounts/:id/statement', isValidCountry, (req, res) => {
    const {country} = req.query;

    monoClient(country).account.getAccountStatement({accountId: req.params.id, output: 'json'}, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).json(err)
        }
        else if (results){
            console.log(results)
            res.status(200).json(results)
        }
    })

  })

  // View an account's bank transaction history
  // https://docs.mono.co/reference/transactions
  app.get('/api/accounts/:id/transactions', isValidCountry, (req, res) => {
    const {country} = req.query;

    monoClient(country).account.getAccountTransactions({accountId: req.params.id}, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).json(err)
        }
        else if (results){
            console.log(results)
            res.status(200).json(results)
        }
    })

  })

  // Get an estimated income for an account
  // https://docs.mono.co/reference/income
  app.get('/api/accounts/:id/income', isValidCountry, (req, res) => {
    const {country} = req.query;

    monoClient(country).account.getIncome({accountId: req.params.id}, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).json(err)
        }
        else if (results){
            console.log(results)
            res.status(200).json(results)
        }
    })

  })

  // Get an account's KYC and indentity information
  // https://docs.mono.co/reference/identity
  app.get('/api/accounts/:id/identity', isValidCountry, (req, res) => {
    const {country} = req.query;

    monoClient(country).account.getIdentity({accountId: req.params.id}, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).json(err)
        }
        else if (results){
            console.log(results)
            res.status(200).json(results)
        }
    })

  })

  // Unlink an account upon request
  // https://docs.mono.co/reference/mono-unlink-account
  app.post('/api/accounts/:id/unlink', isValidCountry, (req, res) => {
    const {country} = req.query;

    monoClient(country).account.unlinkAccount({accountId: req.params.id}, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).json(err)
        }
        else if (results){
            console.log(results)
            res.status(200).json(results)
        }
    })

  })

  // View your Mono wallet balance
  // https://docs.mono.co/reference/fetch-balance
  app.get('/api/users/stats/wallet', (req, res) => {
    const {country} = req.query;

    monoClient(country).user.walletBalance((err, results) => {
        if (err) {
            console.log(err)
            res.status(500).json(err)
        }
        else if (results){
            console.log(results)
            res.status(200).json(results)
        }
    })

  })

  // View Mono's bank coverage
  // https://docs.mono.co/reference/list-institutions
  app.get('/api/coverage', (req, res) => {
    const {country} = req.query;

    monoClient(country).misc.institutions((err, results) => {
        if (err) {
            console.log(err)
            res.status(500).json(err)
        }
        else if (results){
            console.log(results)
            res.status(200).json(results)
        }
    })

  })

}
