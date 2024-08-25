const fetchTodos = async () => {
  try {
    // Fetch data from the API
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Convert the response to JSON
    const data = await response.json();

    // Get the first 5 items
    const firstFiveTodos = data.slice(0, 5);

    // Select the HTML element where the data will be displayed
    const todoList = document.getElementById("todo-list");

    // Loop through the first 5 items and create <li> elements for each title
    firstFiveTodos.forEach((todo) => {
      const listItem = document.createElement("li");
      listItem.textContent = todo.title;
      todoList.appendChild(listItem);
    });
  } catch (error) {
    // Handle errors here
    console.error("Error fetching data:", error);
  }
};

// Call the function to fetch the data
fetchTodos();
