// ROUTER
const express = require('express');
const router = express.Router();

// Misisons Model
const missions = require('../models/marsMissions');

// INDEX Route
router.get('/', (req, res) => {
    res.render('missions/indexMissions', {
      missions: missions
    });
  });

// SHOW Route
router.get('/:missionIndex', (req, res) => {
    const missionIndex = req.params.missionIndex;
    const mission = missions[missionIndex];
  
    if (missions[missionIndex]) {
      res.render('missions/showMissions', {
        mission: mission,
        missionIndex: missionIndex
      });
    } else {
      res.render('missions/showMissions', {
        mission: {name: 'Does not exist'},
      });
    }
  });

module.exports = router;