const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
  console.log('in entry get', req.params.id);
  const query = `SELECT * FROM "entry"
  WHERE "user_id" = $1`;
  pool.query(query, [req.params.id])
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get user history', err);
      res.sendStatus(500)
    })
  });

  router.get('/', (req, res) => {
    const queryId = Number(req.query.entryId);
    console.log(queryId);
    console.log('in selectedEntry get', req.query.entryId);
    const queryString = `SELECT * FROM "entry"
    WHERE "id" = $1`;
    pool.query(queryString, [req.query.entryId])
      .then( result => {
        console.log(result.rows);
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get selectedEntry', err);
        res.sendStatus(500)
      })
    });


/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  console.log('in entry.router sending:', req.body );
  //naming query to make it easier to reference
  const insertEntryQuery = ` 
  INSERT INTO "entry" ( "user_id", "mood", "comment" )
  VALUES ( $1, $2, $3 )`;

  //This query will add the entry object to the entry table
  pool.query(insertEntryQuery, [req.body.user_id, req.body.mood, req.body.comment])
  .then( (results) => {
      res.sendStatus( 200 );
  }).catch( (err) => {
      console.log(err);
      res.sendStatus( 500 );
  })//end of post route
});

module.exports = router;