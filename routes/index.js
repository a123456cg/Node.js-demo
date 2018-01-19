var express = require('express');
var router = express.Router();

const Todo = require('../models/Todo');

const asyncfunc = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  }
}

/* GET home page. */
router.get('/', async (req, res) => {
  const data = await Todo.find();
  res.render('index', { title: 'Express', data: data });
});

router.get('/api/todo', async (req, res) => {
  res.json({ status: "ok" });
});

router.post('/api/todo', async (req, res) => {
  const myTodo = new Todo({
    item: "GyGod",
    done: false,
  });

  // myTodo.save().then((doc) => {
  //   console.log('post');
  //   res.json(doc.toJSON());
  // });

  const doc = await myTodo.save();
  res.json(doc.toJSON());
});

router.put('/api/todo', function (req, res, next) {
  console.log('put');
  res.json(req.body);
});

router.patch('/api/todo', function (req, res, next) {
  console.log('patch');
  res.json(req.body);
});

router.delete('/api/todo', function (req, res, next) {
  console.log('delete');
  res.json(req.body);
});

module.exports = router;
