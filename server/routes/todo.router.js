const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
        let queryString = `
            SELECT 
            "id", "title", "start_time", "due_time", "repeatTask", "notes", "url",
            "priority", "list", "icon",
            TO_CHAR("due_date", 'fmDay, fmDDth fmMonth YYYY') AS "due_date",
            TO_CHAR("start_date", 'fmDay, fmDDth fmMonth YYYY') AS "start_date"
            FROM "tasklist";
            `;
    pool.query(queryString)
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
    })

})
// POST

// PUT

// DELETE

module.exports = router;
