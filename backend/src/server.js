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

// formatar os dados para uso no gráfico
app.get('/comunications/count', (req, res) => {
	const { period } = req.query;

	// Defina a consulta SQL com base no período selecionado (day, month ou year)
	let sql = '';
	let dateFormat = '';
	let groupBy = '';

	switch (period) {
		case 'day':
			sql = 'SELECT DATE(data_criacao) AS date, COUNT(*) AS count FROM comunicacao GROUP BY DATE(data_criacao)';
			dateForm = 'YYYY-MM--DD';
			groupBy = 'date';
			break;

		case 'month':
			sql = 'SELECT DATE_FORMAT(created_at, "%Y-%m") AS date, COUNT(*) AS count FROM communications GROUP BY DATE_FORMAT(created_at, "%Y-%m")';
			dateFormat = 'YYYY-MM';
			groupBy = 'date';
			break;

		case 'year':
			sql = 'SELECT DATE(data_criacao) AS date, COUNT(*) AS count FROM comunicacao GROUP BY YEAR(data_criacao)';
			dateFormat = 'YYYY'
			groupBy = 'date';
			break;
		default:
			res.status(400).json({ message: 'Periodo invalido'});
			return;
	}

	connection.query(sql, (error, results) => {
		if (error) throw error;

		//formatar os dados para uso no gráfico
		const labels = results.map((row) => moment(row.date).format(dateFromat));
		const data = results.map((row) => row.count);

		res.json({ labels, data, groupBy});
	});
});
//
app.listen(port, () => {
	console.log(`App Listening on port ${port}`);
});


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

  //Adicionar uma nova tag
  app.post('/tags', (req, res) => {
	const { id, nome, id_user } = req.body;
	connection.query('INSERT INTO comunicacao (id, nome_tags, id_user) VALUES (?, ?, ?)', [id, nome, id_user], (error, results) => {
	  if (error) throw error;
	  res.json({ message: 'Tag Criada com Sucesso!', id: results.insertId });
	});
  });

  //deletar uma tag
  app.delete('/tags/:id', (req, res) => {
	const {id} = req.params;
	const {nome_tags, id_user} = req.body;
	connection.query('UPADATE users SET emissor =?, id, nome_tags, id_user', [id, nome_tags, id_user], (error) => {
		if(error) throw error;
		res.json({ message: 'Tag Deletada com Sucesso!' });
	});
});

//alterar tag -- Somente NV (5)
app.put('/tags/:id', (req, res) => {
	const { id } = req.params;
	const {nome_tags, id_user} = req.body;
	connection.query('UPADATE users SET emissor =?, id, nome_tags, id_user', [id, nome_tags, id_user], (error) => {
		if (error) throw error;
	  res.json({ message: 'Tag editada com Sucesso!' });
	});
  });


//Autorizar a authenticação de login.
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
