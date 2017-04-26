import mongoose from 'mongoose';
import titre from './titre.js';

const titreSchema = new mongoose.Schema({
  equipe: String,
  dates: String
});
const ligue2Schema = new mongoose.Schema({
  equipe: String,
  dates: String
});

let model = mongoose.model('Titre', titreSchema);

export default class Titre {

  create(req, res) {
    model.create(req.body, (err, titre) => {
      if (err) {
        res.status(500).send({
          error: err
        });
      } else {
        res.json({
          success: true,
          titre: titre
        });
      }
    });
  }
  create(req, res) {
    model.create(req.body, (err, ligue2) => {
      if (err) {
        res.status(500).send({
          error: err
        });
      } else {
        res.json({
          success: true,
          ligue2: ligue2
        });
      }
    });
  }

  findAll(req, res) {
  model.find({},
    (err, titres) => {
      if (err || !titres) {
        res.sendStatus(403);
      } else {
        res.json(titres);
        console.log('getAll');
      }
    });
}
}
