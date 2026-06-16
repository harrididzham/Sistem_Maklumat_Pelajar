let allStudents = [];

function filterStudents(students, keyword) {
  return students.filter(s =>
    s.name.toLowerCase().includes(keyword.toLowerCase())
  );
}

async function loadStudents() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  allStudents = await response.json();
  return allStudents;
}

function displayStudents(data) {
  return data.map(s => ({
    id: s.id,
    name: s.name,
    email: s.email
  }));
}

function searchStudent(keyword) {
  return filterStudents(allStudents, keyword);
}

window.onload = loadStudents;

export { loadStudents, filterStudents, searchStudent, displayStudents };