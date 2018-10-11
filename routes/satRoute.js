const jwt = require('jsonwebtoken')

module.exports = function(app){
    var satMem = require('../controllers/memController')

    //satJon routes
    app.route('/members')
    .get(satMem.list_all_mem)
    .post(satMem.create_a_mem)
    app.route('/members/:memId')
    .get(satMem.read_a_mem)
    .put(satMem.update_a_mem)
    .delete(satMem.delete_a_mem)
    app.route('/login')
    .post(satMem.login_mem)


    var satBel = require('../controllers/belController')

    app.route('/belajars')
    .get(satBel.list_all_bel)
    .post(satBel.create_a_bel)
    app.route('/belajars/:belId')
    .get(satBel.read_a_bel)
    .put(satBel.update_a_bel)
    .delete(satBel.delete_a_bel)

    var satKon = require('../controllers/konController')
    app.route('/konversis')
    .get(satKon.list_all_kon)
    .post(satKon.create_a_kon)
    app.route('/konversis/:konId')
    .get(satKon.read_a_kon)
    .put(satKon.update_a_kon)
    .delete(satKon.delete_a_kon)

    var satTest = require('../controllers/testController')
    app.route('/tests')
    .get(satTest.list_all_test)
    .post(satTest.create_a_test)
    app.route('/tests/:testId')
    .get(satTest.read_a_test)
    .put(satTest.update_a_test)
    .delete(satTest.delete_a_test)
}