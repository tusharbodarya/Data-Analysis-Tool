document.addEventListener('DOMContentLoaded', function() {
    fetch('/get_data')
        .then(response => response.json())
        .then(data => {
            const labels = data.map(item => item.label_field);
            const values = data.map(item => item.value_field);

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
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Custom Chart Title'
                        },
                        legend: {
                            display: true,
                            position: 'top'
                        },
                    },
                    animation: {
                        duration: 1500,
                        easing: 'easeInOutQuart'
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
