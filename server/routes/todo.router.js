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
            TO_CHAR("start_date", 'fmDay, fmDDth fmMonth YYYY') AS "start_date", "complete"
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
router.post('/', (req, res) => {
    let queryString = `
        INSERT INTO "tasklist" ("title", "due_date", "due_time", "notes", "complete")
        VALUES ($1, $2, $3, $4, $5)`;
    pool.query(queryString, 
        [req.body.title, 
            req.body.due_date, 
            req.body.due_time, 
            req.body.notes,
            req.body.complete])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.error(`Error making query ${queryString}`, error);
        })
})


// PUT - Updates complete column only
router.put('/complete/:id', (req, res) => {
    let id = req.params.id;
    let queryString = `
            UPDATE "tasklist"
            SET "complete" = NOT "complete"
            WHERE "id" = $1;`;
        
            console.log('ID', id);
    
            pool.query(queryString, [id])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.error(`Error making query ${queryString}`, error);
    })
})



// DELETE
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    let queryString = `
        DELETE FROM "tasklist" WHERE "id" = $1;`;
    pool.query(queryString, [id])
    .then((response) => {
        res.sendStatus(200);
    }).catch((error) => {
    console.error(`Error making query ${queryString}`, error);
    })

})


module.exports = router;
