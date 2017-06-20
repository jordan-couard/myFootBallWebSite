import express from 'express';
import Titre from '../models/titre.js';

let router = express.Router();

module.exports = (app) => {


    var titre = new Titre();

    //
    //
    // router.get('/:id', user.findById);

    router.post('/', titre.create);

    router.get('/', titre.findAll);

    // router.put('/:id', titre.update);
    //
    // router.delete('/:id', titre.delete);

    app.use('/titres', router);

};
