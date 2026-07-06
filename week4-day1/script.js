const mockUsers = [
    {
        name: "Umair",
        role: "Admin",
        status: "Active"
    },
    {
        name: "Zubair",
        role: "User",
        status: "Inactive"
    },
    {
        name: "Ahsan",
        role: "Admin",
        status: "Active"
    },
    {
        name: "Ali",
        role: "User",
        status: "Active"
    }
];

// Filter active users
const activeUsers = mockUsers.filter(user => user.status === "Active");

// Map active users' names
const activeUserNames = activeUsers.map(user => user.name);

console.log(activeUserNames);

// Count admins using reduce
const adminCount = mockUsers.reduce((count, user) => {
    if (user.role === "Admin") {
        return count + 1;
    }
    return count;
}, 0);

console.log(adminCount);