let currentIndex = 0; // Keep track of the current team index

const teamsData = [
    { place: '1st', team: 'Dark & Skelly', title: 'Soldiers', image: '../content/images/ratw-season-1-duos/Dark & Skelly TR.png'},
    { place: '2nd', team: 'Ash & Lamp',  title: 'Online Friends', image: '../content/images/ratw-season-1-duos/Ash & Lamp TR.png' /* other data */ },
    { place: '3rd', team: 'Chim & Harshi',  title: 'Farmers', image: '../content/images/ratw-season-1-duos/Harshi & Chim (RATW S1) TR.png' /* other data */ },
    { place: '4th', team: 'Emily & Kai',  title: 'Camel Farmers', image: '../content/images/ratw-season-1-duos/Emily & Kai TR.png' /* other data */ },
    { place: '5th', team: 'Noah & Icy',  title: 'Influencers', image: '../content/images/ratw-season-1-duos/Noah & Icy TR.png' /* other data */ },
    { place: '6th', team: 'Husky & Lando',  title: 'Childhood Friends', image: '../content/images/ratw-season-1-duos/Husky & Lando TR.png' /* other data */ },
    { place: '7th', team: 'Anice & Eraloss',  title: 'Actors', image: '../content/images/ratw-season-1-duos/Anice & Eraloss TR.png' /* other data */ },
    { place: '8th', team: 'Ancient & Kandy',  title: 'Goths', image: '../content/images/ratw-season-1-duos/Ancient & Candy TR.png' /* other data */ },
    { place: '9th', team: 'Josh & Jordan',  title: 'Best Friends', image: '../content/images/ratw-season-1-duos/Josh & Jordan TR.png' /* other data */ },
    { place: '10th', team: 'Monkey & Joe',  title: 'Gold Miners', image: '../content/images/ratw-season-1-duos/Monkey & Joe TR.png' /* other data */ },
    { place: '11th', team: 'Pods & Joseph',  title: 'Lawyers', image: '../content/images/ratw-season-1-duos/Pods & Joseph TR.png' /* other data */ },
    { place: '12th', team: 'Sun & Sam',  title: 'Roomates', image: '../content/images/ratw-season-1-duos/Sun & Sam TR.png' /* other data */ },
];

const teamStats = [
    { name: 'Dark & Skelly', legsCompeted: 13, legsWon: 4, countriesVisited: ['French Polynesia', 'India', 'Australia', 'Canada', 'France', 'Brazil', 'South Africa', 'Egypt', 'USA'] },
    { name: 'Ash & Lamp', legsCompeted: 13, legsWon: 4, countriesVisited: ['French Polynesia', 'India', 'Australia', 'Canada', 'France', 'Brazil', 'South Africa', 'Egypt', 'USA'] },
    { name: 'Chim & Harshi', legsCompeted: 13, legsWon: 1, countriesVisited: ['French Polynesia', 'India', 'Australia', 'Canada', 'France', 'Brazil', 'South Africa', 'Egypt', 'USA'] },
    { name: 'Emily & Kai', legsCompeted: 12, legsWon: 0, countriesVisited: ['French Polynesia', 'India', 'Australia', 'Canada', 'France', 'Brazil', 'South Africa', 'Egypt'] },
    { name: 'Noah & Icy', legsCompeted: 11, legsWon: 1, countriesVisited: ['French Polynesia', 'India', 'Australia', 'Canada', 'France', 'Brazil', 'South Africa', 'Egypt'] },
    { name: 'Husky & Lando', legsCompeted: 9, legsWon: 0, countriesVisited: ['French Polynesia', 'India', 'Australia', 'Canada', 'France', 'Brazil', 'South Africa', 'Egypt'] },
    { name: 'Anice & Eraloss', legsCompeted: 8, legsWon: 3, countriesVisited: ['French Polynesia', 'India', 'Australia', 'Canada', 'France', 'Brazil', 'South Africa', 'Egypt'] },
    { name: 'Ancient & Candy', legsCompeted: 6, legsWon: 0, countriesVisited: ['French Polynesia', 'India', 'Australia', 'Canada', 'France', 'Brazil'] },
    { name: 'Josh & Jordan', legsCompeted: 4, legsWon: 0, countriesVisited: ['French Polynesia', 'India', 'Australia', 'Canada'] },
    { name: 'Monkey & Joe', legsCompeted: 3, legsWon: 0, countriesVisited: ['French Polynesia', 'India', 'Australia'] },
    { name: 'Pods & Joseph', legsCompeted: 2, legsWon: 0, countriesVisited: ['French Polynesia', 'India'] },
    { name: 'Sun & Sam', legsCompeted: 1, legsWon: 0, countriesVisited: ['French Polynesia'] },
];

const usernames =[
    {name: 'Dark', username: 'darkpvpzinho'},
    {name: 'Skelly', username: 'MrNinjaSkelly'},
    {name: 'Ash', username: 'Ash100985'},
    {name: 'Lamp', username: 'lampentelectrabuzz'},
    {name: 'Chim', username: 'xXxChimzZz'},
    {name: 'Harshi', username: 'Harshiboyyy'},
    {name: 'Emily', username: 'XxS1MPLY_EMILYxX'},
    {name: 'Kai', username: 'foodking3'},
    {name: 'Noah', username: 'TheRealTeals2'},
    {name: 'Icy', username: 'thehunk128'},
    {name: 'Husky', username: 'huskylover234565'},
    {name: 'Lando', username: 'LandoFlorida14'},
    {name: 'Anice', username: 'aniceboyperson'},
    {name: 'Eraloss', username: 'AmoniLovesRoblox'},
    {name: 'Ancient', username: 'iiAncient_Bear'},
    {name: 'Candy', username: 'chad13516'},
    {name: 'Josh', username: 'Blame_Joshua'},
    {name: 'Jordan', username: 'MVPJordan7'},
    {name: 'Monkey', username: 'XxMonkeyBoii'},
    {name: 'Joe', username: 'adadman1'},
    {name: 'Pods', username: 'coolgard781'},
    {name: 'Joseph', username: 'Lightning42356'},
    {name: 'Sun', username: 'sjokogirl'},
    {name: 'Sam', username: 'samayomide'}
];


// Initialize the current team index
let currentTeamIndex = 0;

// Function to show the next team
function showNextTeam() {
    currentTeamIndex = (currentTeamIndex + 1) % teamsData.length;
    updateTeamInfo(currentTeamIndex);
}

// Function to show the previous team
function showPreviousTeam() {
    currentTeamIndex = (currentTeamIndex - 1 + teamsData.length) % teamsData.length;
    updateTeamInfo(currentTeamIndex);
}

// Function to update team information based on the index
function updateTeamInfo(index) {
    const teamsContainer = document.getElementById('teamsContainer');
    const team = teamsData[index];

    // Set different text color based on placement
    let textColor = '#000';
    let backgroundColor = 'transparent';
    if (team.place === '1st') {
        textColor = 'gold';
        backgroundColor = 'gray';
    } else if (team.place === '2nd') {
        textColor = 'silver';
        backgroundColor = 'gray';
    } else if (team.place === '3rd') {
        textColor = 'brown';
        backgroundColor = 'gray';
    }

    // Update the content of the teamsContainer with information about the current team
    teamsContainer.innerHTML = `<div id="teamsContainer" style="display: flex; align-items: center;">
                                    <div style="color: ${textColor}; background-color: ${backgroundColor}; padding: 5px; border: 2px solid black; box-shadow: 3px 3px 5px #888888;">
                                        <h2>${team.team}</h2>
                                        <p style="font-size: 14px; height: 2px;">${team.title}</p>
                                        <p>${team.place} Place</p>
                                    </div>
                                    <div id="stage" style="flex-shrink: 0; margin-left: 10px;">
                                        <img src="${team.image}" alt="${team.team}" style="max-width: 700px;">
                                    </div>
                                </div>`;
}

document.addEventListener('DOMContentLoaded', function () {
    // Function to generate the HTML table
    function castListTable(data) {
        const tableContainer = document.getElementById('castList');
        const table = document.createElement('table');

        // Adding the custom style for the castlist table
        table.classList.add('castList-table');


        // Create the table header
        const headerRow = table.insertRow();
        const nameHeader = headerRow.insertCell(0);
        const usernameHeader = headerRow.insertCell(1);
        nameHeader.innerHTML = '<b>Name</b>';
        usernameHeader.innerHTML = '<b>Username</b>';

        // Populate the table with data
        data.forEach(user => {
            const row = table.insertRow();
            const nameCell = row.insertCell(0);
            const usernameCell = row.insertCell(1);
            nameCell.textContent = user.name;
            usernameCell.textContent = user.username;
        });

        // Append the table to the container
        tableContainer.appendChild(table);
    }

    // Call the function with the provided data
    castListTable(usernames);
});


function statsTable(data) {
    const tableContainer = document.getElementById('castList');
    const table = document.createElement('table');

    // Adding the custom style for the castlist table
    table.classList.add('statsTable');

    // Create the table header
    const headerRow = table.insertRow();
    const nameHeader = headerRow.insertCell(0);
    const legsCompetedHeader = headerRow.insertCell(1);
    const legsWonHeader = headerRow.insertCell(2);
    const countriesVisitedHeader = headerRow.insertCell(3);
    
    nameHeader.innerHTML = '<b>Name</b>';
    legsCompetedHeader.innerHTML = '<b>Legs Competed</b>';
    legsWonHeader.innerHTML = '<b>Legs Won</b>';
    countriesVisitedHeader.innerHTML = '<b>Countries Visited</b>';

    // Populate the table with data
    data.forEach(team => {
        const row = table.insertRow();
        const nameCell = row.insertCell(0);
        const legsCompetedCell = row.insertCell(1);
        const legsWonCell = row.insertCell(2);
        const countriesVisitedCell = row.insertCell(3);

        nameCell.textContent = team.name;
        legsCompetedCell.textContent = team.legsCompeted;
        legsWonCell.textContent = team.legsWon;
        countriesVisitedCell.textContent = Array.isArray(team.countriesVisited) ? team.countriesVisited.join(', ') : team.countriesVisited;
    });

    // Append the table to the container
    tableContainer.appendChild(table);
}


// Call the function with your team Stats when the page loads
document.addEventListener('DOMContentLoaded', function () {
    statsTable(teamStats);
});


// Initial call to show the first team when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Update the team information for the initial team (in this case, the first team)
    updateTeamInfo(currentTeamIndex);
});