const { Router } = require('express');
const { getAll, search, create, updated, remove } = require('../controllers/product.controller');
const router = Router();

router.get('/',getAll);
router.get('/:id',search);
router.post('/',create);
router.patch('/',updated);
router.delete('/:id',remove);

module.exports = router;