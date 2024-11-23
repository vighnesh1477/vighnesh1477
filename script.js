document.getElementById("healthForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get all sensor data from the form
    const hrv = parseFloat(document.getElementById("hrv").value);
    const emg = parseFloat(document.getElementById("emg").value);
    const accelerometer = parseFloat(document.getElementById("accelerometer").value);
    const thermography = parseFloat(document.getElementById("thermography").value);
    const eda = parseFloat(document.getElementById("eda").value);
    const spO2 = parseFloat(document.getElementById("spO2").value);
    const bioimpedance = parseFloat(document.getElementById("bioimpedance").value);
    const conductance = parseFloat(document.getElementById("conductance").value);

    // Prepare the input data to be passed to the prediction model
    const sensorData = [hrv, emg, accelerometer, thermography, eda, spO2, bioimpedance, conductance];
    
    // Call the prediction function (you will need to integrate ML model here)
    const healthStatus = predictHealth(sensorData);
    
    // Show the result on the next page or within the current page
    displayReport(healthStatus);
});

// Prediction function (replace with actual prediction model)
function predictHealth(sensorData) {
    // Example prediction logic, replace with actual model
    const [hrv, emg, accelerometer, thermography, eda, spO2, bioimpedance, conductance] = sensorData;
    
    if (spO2 < 90 || hrv < 40 || thermography > 38.5) {
        return "Poor Health - Seek medical attention";
    } else if (spO2 >= 90 && spO2 <= 95 && hrv >= 40 && hrv <= 60) {
        return "Moderate Health - Rest and Monitor";
    } else {
        return "Good Health - Keep up the healthy lifestyle";
    }
}

function displayReport(status) {
    // Display health report on the next page or below form
    const reportPage = `
        <h3>Health Status Report</h3>
        <p>${status}</p>
        <button onclick="goBack()">Enter New Data</button>
    `;
    
    document.body.innerHTML = reportPage;
}

function goBack() {
    // Go back to input page to enter new data
    window.location.href = 'index.html'; // or load the form again dynamically
}
