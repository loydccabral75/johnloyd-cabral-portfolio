// List of Naruto's projects
const projects = [
    "Shadow Clone Technique Website",
    "Rasengan Animation Demo",
    "Hidden Leaf Village Map App",
    "Ninja Academy Learning Platform"
];

const projectList = document.getElementById('project-list');

// Render each project as list item
projects.forEach(project => {
    const li = document.createElement('li');
    li.textContent = project;
    projectList.appendChild(li);
});

