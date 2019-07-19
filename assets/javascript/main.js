// I want skills to be highlightable and for every button selected, the 
// possible projects shown should narrow

var skillDisplay = document.getElementById("skill-display");
var projectDisplay = document.getElementById("projects");
var skills = ['HTML/CSS', 'JavaScript', 'JQuery', 'BootStrap', 'AJAX', 'NodeJS', 'Express', 'MySQL'];

var projects = {
    onTheFly: {
        projectId: 1,
        projectName: 'On The Fly',
        projectImage: 'assets/images/OnTheFly.png',
        projectLink: 'https://on-the-fly-staff.herokuapp.com/',
        githubLink: 'https://github.com/dscarlin/group-project-3.git',
        projectDescription: 'One stop shop for restaurant applicants to mass apply while providing a simple centralized solution for restaurant owners to acquire talent quickly built with React.',
        projectTags: ''
    },
    playDate: {
        projectId: 2,
        projectName: 'Play Date',
        projectImage: 'assets/images/PlayDate.png',
        projectLink: 'https://gentle-forest-99048.herokuapp.com/#/',
        githubLink: 'https://github.com/bryvl/project-2.git',
        projectDescription: 'A work in progress app for finding playdates for pet owners built with Vue and Sequelize ORM.',
        projectTags: ''

    },
    rummage: {
        projectId: 3,
        projectName: 'Rummage',
        projectImage: 'assets/images/Rummage-App.png',
        projectLink: '',
        githubLink: '',
        projectDescription: 'A simple web app where a user can look up cocktail recipes based on ingredients they have at home. Built with JQuery',
        projectTags: ''

    },
    googleBookSearch: {
        projectId: 4,
        projectName: 'Google Books React Search',
        projectImage: 'assets/images/react-books.png',
        projectLink: ' https://fierce-dusk-42786.herokuapp.com/',
        githubLink: 'https://github.com/bryvl/react-books.git',
        projectDescription: 'A React and Bootstrap built CRUD app for finding books and saving them using the Google Books API. Uses Mongoose ORM.',
        projectTags: ''
    },
    leagueOfClicks: {
        projectId: 5,
        projectName: 'League of Clicks',
        projectImage: 'assets/images/clicky-league.png',
        projectLink: 'https://bryvl.github.io/clicky-game-react2/',
        githubLink: 'https://github.com/bryvl/clicky-game-react2',
        projectDescription: 'A simple experiment meant to explore React through a simple memory game.',
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

        var linkP = document.createElement("p");
        linkP.setAttribute('class', "linkP");
        
        var projectLinkSpan = document.createElement("span");
        projectLinkSpan.setAttribute('class', "pLinkText");
        var projectLinkURL = document.createElement("a");
        projectLinkURL.setAttribute('href', projects[proj].projectLink);
        var projectLinkText = document.createTextNode("Demo");
        projectLinkURL.appendChild(projectLinkText);

        projectLinkSpan.appendChild(projectLinkURL);
        linkP.appendChild(projectLinkSpan);

        var githubLinkSpan = document.createElement("span");
        githubLinkSpan.setAttribute('class', "gLinkText");
        var githubLinkURL = document.createElement("a");
        githubLinkURL.setAttribute('href', projects[proj].githubLink);
        var githubLinkText = document.createTextNode("Github Repo");
        githubLinkURL.appendChild(githubLinkText);

        githubLinkSpan.appendChild(githubLinkURL);
        linkP.appendChild(githubLinkSpan);

        var projectHeader = document.createElement("h2");
        var headerText = document.createTextNode(projects[proj].projectName);
        projectHeader.appendChild(headerText);
        project.appendChild(projectHeader);

        projectHeader.appendChild(linkP);

        var projectImg = document.createElement("img");
        projectImg.setAttribute('src', projects[proj].projectImage);
        projectImg.setAttribute('width', '100%');
        // 
        project.appendChild(projectImg);projectImg.setAttribute('height', projects[proj].projectImage);
        
        var projectDesc = document.createElement("p");
        projectDesc.setAttribute('class', 'par');
        var descText = document.createTextNode(projects[proj].projectDescription);
        projectDesc.appendChild(descText);
        project.appendChild(projectDesc);

        projectDisplay.appendChild(project);

    }
}


// Run App
renderSkills();
renderProjects();