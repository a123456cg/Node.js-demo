var express = require('express');
var router = express.Router();

const Todo = require('../models/Todo');

const asyncfunc = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  }
}

/* GET home page. */
router.get('/', async(req, res) => {

  let doc = await Todo.find();
  res.render('index', {
    route: 'home',
    data: doc
  });
});

router.get('/api/todo', async(req, res) => {
  res.json({
    status: "ok"
  });
});

router.post('/api/todo', async(req, res) => {

  console.log(req.body)
  const myTodo = new Todo({
    item: req.body.item,
    done: false,
  });

  // myTodo.save().then((doc) => {
  //   console.log('post');
  //   res.json(doc.toJSON());
  // }); 
  const doc = await myTodo.save();
  console.log(doc);
  res.json(doc);
});

router.put('/api/todo', async function (req, res, next) {
  const doc = await Todo.findByIdAndUpdate(req.body.id, {
    done: req.body.done
  });
  console.log(doc);
  res.json(doc);
});

router.delete('/api/todo/:id', async function (req, res, next) {
  const doc = await Todo.findByIdAndRemove(req.params.id);
  console.log(doc);
  res.json(doc);
});

module.exports = router;