import express from 'express';

const app = express();

/**
 * GET => Buscar
 * POST => Salvar
 * PUT => Alterar
 * DELETE => deletar
 * PATCH => Alteração especifica
 */

app.get('/', (req, res) => {
    return res.json({ message: "Hello World - NLW 04" });
});
// 1 param => rota(recurso API)
// 2 param => req, res

app.post('/', (req, res) => {
    // recebeu os dados para salvar
    return res.json({ message: "Os dados foram salvos com sucesso!" })
})


app.listen(3333, () => console.log('Server is running!'));