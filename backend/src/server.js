import express from 'express'
import cors from 'cors'

import { connection } from './database/index.js'

const app = express()
const port = 3000

app.use(cors({
	origin: '*',
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))

app.use(express.json());

// connect to database mysql
connection.connect();

// obter todos usuarios.
app.get('/comunicacao', (req, res) => {
	connection.query(`SELECT * FROM comunicacao as c
	LEFT JOIN assinantes as a ON a.id_comunicacao = a.id_comunicacao
	LEFT JOIN receptores as r ON r.id_comunicacao = a.id_comunicacao`, (error, results) => {
	  if (error) throw error;
	  res.json(results);
	});
});

//adicionar uma nova comunicacao
app.post('/comunicacao', (req, res) => {
	const { emissor, data_criacao, assunto, mensagem, observacao, emitido_por, modo, tipo } = req.body;
	connection.query('INSERT INTO comunicacao (emissor, data_criacao, assunto, mensagem, observacao, emitido_por, modo, tipo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [emissor, data_criacao, assunto, mensagem, observacao, emitido_por, modo, tipo], (error, results) => {
	  if (error) throw error;
	  res.json({ message: 'Comunicacao Criada com Sucesso!', id: results.insertId });
	});
});

// obter uma comunicacao por id.
app.get('/comunicacao/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM comunicacao WHERE id = ?', id, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).json({ message: "Comunicação não encontrada" });
    }
  });
});

//atualizar uma comunicacao
app.put('/comunicacao/:id', (req, res) => {
	const { id } = req.params;
	const { emissor, data_criacao, assunto, mensagem, observacao, emitido_por, modo, tipo } = req.body;
	connection.query('UPDATE users SET emissor = ?, data_criacao = ?, assunto = ?, mensagem = ?, observacao = ?, emitido_por = ?, modo = ?, tipo = ?, id = ?', [emissor, data_criacao, assunto, mensagem, observacao, emitido_por, modo, tipo], (error) => {
	  if (error) throw error;
	  res.json({ message: 'Comunicação editada com Sucesso!' });
	});
});
  

app.post('/auth', function(request, response) {
	if (!request.body || !request.body.email || !request.body.senha) {
		response.send('Por favor, digite o e-mail e senha');
		response.end();
	}

	let email = request.body.email;
	let senha = request.body.senha;

  if (email && senha) {
		connection.query('SELECT * FROM users WHERE email = ? AND senha = ?', [email, senha], function(error, results, fields) {
			if (error) throw error;

      if (results.length > 0) {
				response.send(results);
				response.end();
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
