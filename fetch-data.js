// fetching userdata
async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data"); //HTML element where the API data will be displayed

  // try-catch block to handle the fetching process and potential errors.
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    dataContainer.innerHTML = ""; // clear its existing content
    const userList = document.createElement("ul"); //creates a ul html tag

    //  Looping through the users array
    users.forEach((element) => {
      const listItems = document.createElement("li");
      listItems.textContent = element; //Sets the text content of the <li> to the user’s name.
      userList.appendChild(listItems); //Appends the <li> to userList.
      dataContainer.appendChild(userList); //Appends the userlist to the dataContainer
    });
  } catch (error) {
    dataContainer.innerHTML = "";
    dataContainer.textContent = "Failed to load user data.";
  }
  //   end of the try-catch block
}

// (DOMContentLoaded) This ensures your data fetching logic runs once the HTML document has fully loaded.
document.addEventListener("DOMContentLoaded", fetchUserData());

