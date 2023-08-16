const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
        let queryString = `
        SELECT 
        "id", "title", "start_time", "due_time", "repeatTask","notes", "url",
        "priority", "list", "icon",
        TO_CHAR("due_date", 'fmDay, fmDDth fmMonth YYYY') AS "frm_due_date",
        TO_CHAR("due_date", 'YYYY-MM-fmDD') AS "due_date",
        TO_CHAR("start_date", 'fmDay, fmDDth fmMonth YYYY') AS "start_date", "complete"
        FROM "tasklist"
        ORDER BY "due_date" ASC;
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
            res.sendStatus(500);
        })
})


// PUT - Updates complete column only
router.put('/complete/:id', (req, res) => {
    let id = req.params.id;
    let queryString = `
            UPDATE "tasklist"
            SET "complete" = NOT "complete"
            WHERE "id" = $1;`;
            pool.query(queryString, [id])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.error(`Error making query ${queryString}`, error);
        res.sendStatus(500);
    })
})

router.put('/edit/:id', (req, res) => {
    let id = req.params.id;
    let queryString = `
        UPDATE "tasklist"
        SET "title" = $1, "due_date" = $2, "due_time" = $3, "notes" = $4
        WHERE "id" = $5;`;
    pool.query(queryString, [req.body.title, req.body.due_date, req.body.due_time, req.body.notes, id])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.error(`Error making query ${queryString}`, error);
        res.sendStatus(500);
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
    res.sendStatus(500);
    })

})


module.exports = router;
