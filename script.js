document.addEventListener('DOMContentLoaded', () => {
    // Select the .ai-list-item element
    const aiListItem = document.querySelector('.ai-list-item');

    // Check if the element exists
    if (aiListItem) {
        // Add an event listener for click events
        aiListItem.addEventListener('click', () => {
            // Fetch data from the API endpoint
            fetch('http://localhost:11434/api/tags')
                .then(response => response.json())
                .then(data => {
                    // Extract model names and create a list
                    if (data.models && Array.isArray(data.models)) {
                        const namesList = data.models.map(model => model.name).join('<br>');
                        
                        // Update the .ai-list-item element with the list of names
                        aiListItem.innerHTML = namesList;
                    } else {
                        console.error('Invalid data format:', data);
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        });
    } else {
        console.log('.ai-list-item element not found');
    }
});
