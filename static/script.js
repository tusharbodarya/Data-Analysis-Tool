document.addEventListener('DOMContentLoaded', function() {
    fetch('/get_data')
        .then(response => response.json())
        .then(data => {
            const labels = data.map(item => item.label_field); // Replace label_field with your field name
            const values = data.map(item => item.value_field); // Replace value_field with your field name

            let ctx = document.getElementById('myChart').getContext('2d');
            let myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Data Visualization',
                        data: values,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true // Start y-axis from zero
                            // Other y-axis options: min, max, stepSize, etc.
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Custom Chart Title'
                        },
                        legend: {
                            display: true,
                            position: 'top' // Position: top, bottom, left, right
                        },
                    },
                    animation: {
                        duration: 1500, // Animation duration in milliseconds
                        easing: 'easeInOutQuart' // Easing function for animation
                    },
                    tooltips: {
                        enabled: true,
                        mode: 'index',
                        intersect: true
                        // Other tooltip options: callbacks, backgroundColor, etc.
                    },
                    // Other options for layout, interaction, etc.
                }
            });
            
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
