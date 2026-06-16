let students = [];

// load data API
async function loadStudents() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        students = await response.json();
        displayStudents(students);
    } catch (error) {
        console.error("Error load data:", error);
    }
}

// display table
function displayStudents(data) {
    const table = document.getElementById("studentTable");
    table.innerHTML = "";

    data.forEach(student => {
        table.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.phone}</td>
            </tr>
        `;
    });
}

// search function
function searchStudent() {
    const keyword = document.getElementById("searchInput").value.toLowerCase();

    const filtered = students.filter(student =>
        student.name.toLowerCase().includes(keyword)
    );

    displayStudents(filtered);
}

// auto load bila page buka
window.onload = loadStudents;