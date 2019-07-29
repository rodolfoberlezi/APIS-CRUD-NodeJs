import alunos from "../controllers/alunoController.js";

export default (app) => {

    app.get('/', (req, res) => {
        res.render('../src/views/index.ejs');
    });

    app.get('/api/mensagem', function (req, res) {
        res.send({ express: 'Hello from Express' });
    });

    //pensa no banco de dados, como um excel, onde você só tira as informações
    app.route('/api/v1/alunos')
        .get(alunos.getAllAlunos)
        .post(alunos.createAluno);
}