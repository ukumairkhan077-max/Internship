const container = document.getElementById("container");

async function getUser() {

    try {

        
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch users.");
        }

        const users = await response.json();

        users.forEach(user => {

            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Website:</strong> ${user.website}</p>
            `;

            container.appendChild(card);

        });

    }
    catch (error) {

        
        container.innerHTML = "";

        
        const errorCard = document.createElement("div");
        errorCard.classList.add("error-card");

        errorCard.innerHTML = `
            <h2>⚠️ Oops!</h2>
            <p>Something went wrong while loading the users.</p>
            <p><strong>Error:</strong> ${error.message}</p>
            <button onclick="getUser()">Try Again</button>
        `;

        container.appendChild(errorCard);

    }

}

getUser();