const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware')


//this route gets all entries for the current user
router.get('/:id', rejectUnauthenticated, (req, res) => {
  console.log('in entry get', req.params.id);
  const query = `SELECT * FROM "entry"
  WHERE "user_id" = $1
  ORDER BY "id" DESC`;
  pool.query(query, [req.params.id])
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get user history', err);
      res.sendStatus(500)
    })
  });

  //this route gets the selected entry for the current user in order to display the details on the view/delete/edit page
  router.get('/', rejectUnauthenticated, (req, res) => {
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


//this route adds a new entry
router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code here
  console.log('in entry.router sending:', req.body );
  //naming query to make it easier to reference
  const insertEntryQuery = ` 
  INSERT INTO "entry" ( "user_id", "mood", "weather", "comment", "date" )
  VALUES ( $1, $2, $3, $4, $5 )`;

  //This query will add the entry object to the entry table
  pool.query(insertEntryQuery, [req.body.user_id, req.body.mood, req.body.weather, req.body.comment, req.body.date])
  .then( (results) => {
      res.sendStatus( 200 );
  }).catch( (err) => {
      console.log(err);
      res.sendStatus( 500 );
  })//end of post route
});

//this route deletes the selected entry
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  console.log('in entry delete', req.params.id);
  const query = `DELETE FROM "entry"
  WHERE "id"=$1 `;
  pool.query(query, [req.params.id])
    .then( result => {
      console.log( 'you have successfuly deleted the entry');
      res.sendStatus(200)
    })
    .catch(err => {
      console.log('ERROR: could not delete entry', err);
      res.sendStatus(500)
    })
  });


  //this route makes edits made to the selected entry
  router.put('/', rejectUnauthenticated, (req, res) => {
    console.log('in entry update put route', req.body);
    const query = `UPDATE "entry"
    SET "comment" = $1
    WHERE "id" = $2;`;
    pool.query(query, [req.body.comment, req.body.id] )
      .then( result => {
        console.log( 'you have successfuly updated the entry');
        res.sendStatus(200)
      })
      .catch(error => {
        console.log('ERROR: could not update entry', error);
        res.sendStatus(500)
      })
    });


module.exports = router;