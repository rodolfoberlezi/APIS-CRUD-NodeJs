const students = require('../controllers/studentsController');

module.exports = app => {
    app.get('/', (req, res) => {
        res.send("Hello folks!");
    });
    
    app.route('/students')
        .get(students.selectAll);

    app.route('/students/:id')
        .get(students.selectById);
};