// I want skills to be highlightable and for every button selected, the 
// possible projects shown should narrow

var skillDisplay = document.getElementById("skill-display");
var projectDisplay = document.getElementById("projects");
var skills = ['HTML/CSS', 'JavaScript', 'JQuery', 'BootStrap', 'AJAX', 'NodeJS', 'Express', 'MySQL'];

var projects = {
    rummage: {
        projectName: 'Rummage',
        projectImage: 'assets/images/Rummage-App.png',
        projectDescription: 'A simple web app where a user can look up cocktail recipes based on ingredients they have at home.',
        projectTags: ''

    },
    grabber: {
        projectName: 'Giphy Grabber',
        projectImage: 'assets/images/Giphy-Grabber.png',
        projectDescription: 'Search for GIFs using AJAX requests on the Giphy API.',
        projectTags: ''
    },
    nightSky: {
        projectName: 'Night Sky',
        projectImage: 'assets/images/Night-Sky.png',
        projectDescription: 'A very work-in-progress passion project. Multiplayer text adventure.',
        projectTags: ''
    }
}

function renderSkills(){
    for (var i = 0; i < skills.length; i ++) {
        var skillTag = document.createElement("button");
        skillTag.innerHTML = skills[i];
        skillTag.className += 'skill';
        skillDisplay.appendChild(skillTag);
    }
}

function renderProjects(){
    for (var proj in projects) {
        var project = document.createElement("div");
        project.className += 'project';

        var projectHeader = document.createElement("h2");
        var headerText = document.createTextNode(projects[proj].projectName);
        projectHeader.appendChild(headerText);
        project.appendChild(projectHeader);

        var projectImg = document.createElement("img");
        projectImg.setAttribute('src', projects[proj].projectImage);
        projectImg.setAttribute('width', '100%');
        // 
        project.appendChild(projectImg);projectImg.setAttribute('height', projects[proj].projectImage);
        
        var projectDesc = document.createElement("p");
        var descText = document.createTextNode(projects[proj].projectDescription);
        projectDesc.appendChild(descText);
        project.appendChild(projectDesc);

        projectDisplay.appendChild(project);

    }
}


// Run App
renderSkills();
renderProjects();