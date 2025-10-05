// Step 1: Define the async function
async function fetchUserData() {
    // Step 2: Define API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Step 3: Select the container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 5: Clear loading message
        dataContainer.innerHTML = '';

        // Step 6: Create list element
        const userList = document.createElement('ul');

        // Step 7: Loop through each user and append to list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Step 8: Add the list to the container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Step 9: Handle errors
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Step 10: Run the function after DOM loads
document.addEventListener('DOMContentLoaded', fetchUserData);
