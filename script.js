document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Document fully loaded and parsed');
    document.getElementById('startCapture').addEventListener('click', startCapture);
    document.getElementById('stopCapture').addEventListener('click', stopCapture);
});

let capturing = false;
let trafficData = [];

function startCapture() {
    console.log('Start Capture button clicked');
    capturing = true;
    trafficData = [];
    document.getElementById('trafficList').innerHTML = '';
    simulateTrafficCapture();
}

function stopCapture() {
    console.log('Stop Capture button clicked');
    capturing = false;
}

function simulateTrafficCapture() {
    if (capturing) {
        console.log('Simulating traffic capture');
        const trafficSample = generateTrafficSample();
        trafficData.push(trafficSample);
        displayTraffic(trafficSample);
        setTimeout(simulateTrafficCapture, 1000);
    }
}

function generateTrafficSample() {
    const types = ['HTTP', 'HTTPS', 'FTP', 'SSH', 'DNS'];
    const suspiciousTypes = ['SSH', 'FTP'];
    const type = types[Math.floor(Math.random() * types.length)];
    const isSuspicious = suspiciousTypes.includes(type);
    return {
        type: type,
        size: Math.floor(Math.random() * 1000) + 'KB',
        source: `192.168.1.${Math.floor(Math.random() * 255)}`,
        destination: `192.168.1.${Math.floor(Math.random() * 255)}`,
        suspicious: isSuspicious
    };
}

function displayTraffic(data) {
    const trafficList = document.getElementById('trafficList');
    const listItem = document.createElement('li');
    listItem.textContent = `Type: ${data.type}, Size: ${data.size}, Source: ${data.source}, Destination: ${data.destination}, Suspicious: ${data.suspicious}`;
    if (data.suspicious) {
        listItem.style.color = 'red';
    }
    trafficList.appendChild(listItem);
    console.log('Traffic data displayed:', data);
}
