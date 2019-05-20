const userService = require('../services/userService.js');

const BASE = '/user';

function addRoutes(app) {

  app.post(`${BASE}/signup`, async (req, res) => {
    console.log('signup')
    const credentials = req.body;
    let user = await userService.signup(credentials);
    return res.json(user);
  });

}

module.exports = addRoutes;