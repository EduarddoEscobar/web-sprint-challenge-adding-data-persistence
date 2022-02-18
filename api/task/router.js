// build your `/api/tasks` router here
const {Router} = require('express');
const router = Router();
const Tasks = require('./model');

router.get('/:id', async (req, res, next) => {

})

module.exports = router;
