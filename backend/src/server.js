import express from 'express'

import { connection } from './database/index.js'

const app = express()
const port = 3000


// connect to database mysql
connection.connect()

// create routes
app.get('/', (req, res) => {
  res.send('Hackathon!')

  connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) {
      throw err
    }
    
    console.log('The solution is: ', rows[0].solution)
  })
})

app.post('/auth', function(request, response) {
	let username = request.body.email;
	let password = request.body.senha;

  if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (error) throw error;

      if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
				response.send('E-mail e/ou senha inválidos!');
			}			
			response.end();
		});
	} else {
		response.send('Por favor, digite o e-mail e senha');
		response.end();
	}
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})