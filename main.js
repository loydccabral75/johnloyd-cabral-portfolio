// List of Naruto's projects
const hobby = [
    "coding",
    "basketball",
    "dancing",
    "watching anime",
];

const projectList = document.getElementById('project-list');

// Render each project as list item
projects.forEach(project => {
    const li = document.createElement('li');
    li.textContent = project;
    projectList.appendChild(li);
});

