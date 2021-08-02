
export default function(app){

  app.get('/ping', (req, res) => {
    res.send('pong')
  })

}
