function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const unit = document.getElementById('unit').value;

    if (isNaN(height) || isNaN(weight)) {
        alert('Please enter valid height and weight.');
        return;
    }

    let bmi;
    if (unit === 'metric') {
        bmi = calculateBMIForMetric(height, weight);
    } else {
        bmi = calculateBMIForImperial(height, weight);
    }
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `BMI Result: ${bmi}`;

    const classification = getBMIClassification(bmi);
    const classificationResultElement = document.getElementById('classificationResult');
    classificationResultElement.innerHTML = `BMI Classification: ${classification}`;
}

function calculateBMIForMetric(height, weight) {
    return (weight / Math.pow((height/100), 2)).toFixed(2);
}

function calculateBMIForImperial(height, weight) {
    return ((weight / Math.pow((height), 2)) * 703).toFixed(2);
}

function getBMIClassification(bmi) {
    if (bmi < 16) {
        return 'Severe Thinness';
    } else if (bmi >= 16 && bmi < 17) {
        return 'Moderate Thinness';
    } else if (bmi >= 17 && bmi < 18.5) {
        return 'Mild Thinness';
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal';
    } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight';
    } else if (bmi >= 30 && bmi < 35) {
        return 'Obese Class I';
    } else if (bmi >= 35 && bmi < 40) {
        return 'Obese Class II';
    } else {
        return 'Obese Class III';
    }
}
