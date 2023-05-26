import express from 'express'

import { connection } from './database/index.js'

const app = express()
const port = 3000


// connect to database mysql
connection.connect()

app.post('/auth', function(request, response) {
	let email = request.body.email;
	let senha = request.body.senha;

  if (email && senha) {
		connection.query('SELECT * FROM users WHERE email = ? AND senha = ?', [email, senha], function(error, results, fields) {
			if (error) throw error;

      if (results.length > 0) {
				request.session.loggedin = true;
				request.session.email = username;
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