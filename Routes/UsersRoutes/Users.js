const express = require("express");
const users1 = require('../../Users')
const router = express();
router.get('/', (req, res) => {
    res.json(users1)
})
router.get('/:id', (req, res) => {
    let id = parseInt(req.params.id)
    console.log(id)
    let result = users1.filter((item) => item.id == id)
    res.json(result[0])
})
module.exports = router