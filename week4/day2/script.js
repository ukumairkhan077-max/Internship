const container = document.getElementById("container");

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
.then((users) => {

    users.forEach((user) => {

        const card = document.createElement("div");

        card.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> ${user.website}</p>
        `;

        container.appendChild(card);

    });

})
.catch((error) => {
    console.log("Error:", error);
});