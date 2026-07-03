let toggle_button = document.getElementById("menu-toggle");
let sidebar = document.getElementById("sidebar");

let togglefunction = () => {
    if (sidebar.style.display == "block") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block";
    }
};

let greeted = false;

function timefunction() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    let hour = date.getHours();

    document.getElementById("time").innerText = time;

    if (!greeted) {
        if (hour >= 6 && hour < 12) {
            alert("Good Morning Sir");
        } else if (hour >= 12 && hour < 17) {
            alert("Good Afternoon Sir");
        } else if (hour >= 17 && hour < 21) {
            alert("Good Evening Sir");
        } else {
            alert("Good Night Sir");
        }

        greeted = true;
    }
}


timefunction();

setInterval(timefunction, 1000);



toggle_button.addEventListener("click", togglefunction);


