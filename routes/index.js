var express = require('express');
var router = express.Router();

/* GET home page. */
connect.then(() => {

  console.log('Connected correctly to server');

  Campsite.create({
      name: 'React Lake Campground',
      description: 'test'
  })
  .then(campsite => {
      console.log(campsite);
      return Campsite.find();
  })
  .then(campsites => {
      console.log(campsites);
      return Campsite.deleteMany();
  })
  .then(() => {
      return mongoose.connection.close();
  })
  .catch(err => {
      console.log(err);
      mongoose.connection.close();
  });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const connect = mongoose.connect(url, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

connect.then(() => {

  console.log('Connected correctly to server');

  Campsite.create({
      name: 'React Lake Campground',
      description: 'test'
  })
  .then(campsite => {
      console.log(campsite);

      return Campsite.findByIdAndUpdate(campsite._id, {
          $set: { description: 'Updated Test Document' }
      }, {
          new: true
      });
  })
  .then(campsite => {
      console.log(campsite);

      campsite.comments.push({
          rating: 5,
          text: 'What a magnificent view!',
          author: 'Tinus Lorvaldes'
      });

      return campsite.save();
  })
  .then(campsite => {
      console.log(campsite);
      return Campsite.deleteMany();
  })
  .then(() => {
      return mongoose.connection.close();
  })
  .catch(err => {
      console.log(err);
      mongoose.connection.close();
  });
});

module.exports = router;
