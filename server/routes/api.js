var express = require('express')
const router = express.Router()
const Item = require('../models/Item')
const Recording = require('../models/Recording')

router.get('/items', function (req, res) {
    Item.find({}).exec(function (err, response) {
        console.log(`get - response - ${response}`)
        res.send(response)
    })
})

router.post('/item', async function (req, response) {
    let item = new Item(req.body)
    console.log(`post - response - ${item}`)
    await item.save()
    response.send('saved to db')
})

router.delete('/item/:id', function (req, res) {
    Item.findOneAndRemove({ key: req.params.id }, function (err) {
        console.log("Successful deletion");
    });
    res.send('item deleted')
})


router.post('/recording', async function (req, response) {
    let recording = new Recording(req.body)
    console.log(`post - response - ${recording}`)
    await recording.save()
    response.send('saved to db')
})

module.exports = router