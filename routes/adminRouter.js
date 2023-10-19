"use strict"

import express from 'express';


let router = express.Router();

router.use(express.static('public'));






export default router;