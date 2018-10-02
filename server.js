const app = require('express')()
const bodyParser = require('body-parser')
const logger = require('morgan')

const port = process.env.PORT || 3030

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('*', (req, res) => {
  res.send('There it is')
})

app.post("*", (req, res) => {

    let {sessionId, serviceCode, phoneNumber, text} = req.body
  if (text == '') {
    
    let response = ` What can I do for you
    1. My Account
    2. My phone number`
    res.send(response)
  }else if (text == '2') {
    
    let response = `Your phone number is ${phoneNumber}`
    res.send(response)


    

  }else if(text =='1*1')
  {

    let accountNumber = '87647474747'
    let response = `END Your account number is ${accountNumber}`
    res.send(response)


  }else if (text == '1*2') {
  
    let balance = 'R 10,000'

    let response = `Your balance is ${balance}`
    res.send(response)

  }else{
      res.status(400).send("Source not available");
  }



})

app.listen(port, ()=> {
  
    console.log("The server is now up.... at port "+port)

})




