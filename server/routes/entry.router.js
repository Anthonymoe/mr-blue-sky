const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
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