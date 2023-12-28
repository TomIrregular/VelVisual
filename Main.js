
// Method buttons

    function DistanceTime() {
    var distancebased = document.getElementById("distancebased");
    var accelerationTime = document.getElementById("accelerationTime");

    distancebased.style.display = "block";
    accelerationTime.style.display = "none";

    document.querySelectorAll('.Methodbutton').forEach(function(button) {
            button.classList.remove('active');
        });
        document.querySelector('.Methodbutton.Distance').classList.add('active');
}

    function AccelerationTime() {
    var distancebased = document.getElementById("distancebased");
    var accelerationTime = document.getElementById("accelerationTime");

    distancebased.style.display = "none";
    accelerationTime.style.display = "block";

    document.querySelectorAll('.Methodbutton').forEach(function(button) {
            button.classList.remove('active');
        });
        document.querySelector('.Methodbutton.AccTime').classList.add('active');
    }
// Getting ค่า parts (Distance)
function calculateDis() {
    var distance = parseFloat(document.getElementById("distance").value);
    var time = parseFloat(document.getElementById("Distime").value);

// Calculating parts (Distance)
if (!isNaN(distance) && !isNaN(time) && time !== 0) {
            var velocity = distance / time;
            document.getElementById("resultDis").innerHTML = "Velocity: " + velocity.toFixed(2) + " m/s";
            updateVelGraph(time,distance);
        } 
}
// Getting ค่า parts (Acceleration)
function calculateAcc() {
    var startvel = parseFloat(document.getElementById("startvel").value);
    var acceleration = parseFloat(document.getElementById("acceleration").value);
    var time = parseFloat(document.getElementById("AccTime").value)

// Calculating parts (Acceleration)
if (!isNaN(startvel) && !isNaN(acceleration) && !isNaN(time) && time !== 0) {
            var velocity = startvel + acceleration * time;
            document.getElementById("resultAcc").innerHTML = "Final velocity: " + velocity.toFixed(2) + " m/s";
            updateVelGraph(time,velocity);
        }
}
// Graph parts
function updateVelGraph(time, value) {
    var VelGraph = document.getElementById("VelGraph");
    var GenGraph = document.createElement("canvas");
            GenGraph.width = 300;
            GenGraph.height = 220;
            VelGraph.innerHTML = "";
            VelGraph.appendChild(GenGraph);
    var myChart = new Chart(GenGraph.getContext('2d'), {
                type: 'line',
                data: {
                    labels: [0, time],
                    datasets: [{
                        label: 'Velocity',
                        data: [{
                            x: 0,
                            y: 0
                        }, {
                            x: time,
                            y: value
                        }],
                        borderColor: 'orange',
                        borderWidth: 2,
                        fill: false
                    }]
                },
                options: {
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom'
                        },
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }