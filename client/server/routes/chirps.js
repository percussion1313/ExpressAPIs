const express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
    res.send('chirps'); //send resource
});
module.exports = router;


// router.get('/:id', (req, res) => {
//     //retrieve 1 if id, all if no id
//     res.json(data); //send resource
// });

// router.post('/', (req, res) => {
//     //save resource
//     res.json(isd); //or sendStatus(200)
// });

// router.put('/:id', (req, res) => {
//     //update resource
//     res.sendStatus(200); 
// });

// router.delete('/:id', (req, res) => {
//     //delete resource
//     res.json(data); 
// })

// module.exports = router;