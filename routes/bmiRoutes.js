const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.post('/bmicalculator', (req, res) => {
    const height = parseFloat(req.body.height);
    const weight = parseFloat(req.body.weight);
    const age = parseInt(req.body.age);
    const gender = req.body.gender;
    const unit = req.body.unit;

    let bmiResult;
    if (unit === 'metric') {
        bmiResult = calculateBMI(height, weight);
    } else {
        bmiResult = calculateBMI(height * 0.0254, weight * 0.453592);
    }
    res.send(`BMI Result: ${bmiResult}`);
});

function calculateBMI(height, weight) {
    return (weight / Math.pow((height/100), 2)).toFixed(2);
}

module.exports = router;
