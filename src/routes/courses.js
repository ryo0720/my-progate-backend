// server/src/routes/courses.js
const express = require('express');
const router = express.Router();
const { getCourses, getCourseById } = require('../controllers/courseController');

// @route    GET api/courses
// @desc     Get all courses
// @access   Public
router.get('/', getCourses);

// @route    GET api/courses/:id
// @desc     Get course by ID
// @access   Public
router.get('/:id', getCourseById);

module.exports = router;
