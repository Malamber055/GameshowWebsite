let currentIndex = 0; // Keep track of the current team index

const teamsData = [
    { place: '1st', team: 'Dark & Skelly', image: '../content/images/ratw-season-1-duos/Dark & Skelly TR.png'},
    { place: '2nd', team: 'Ash & Lamp', image: '../content/images/ratw-season-1-duos/Ash & Lamp TR.png' /* other data */ },
    { place: '3rd', team: 'Chim & Harshi', image: '../content/images/ratw-season-1-duos/Harshi & Chim (RATW S1) TR.png' /* other data */ },
    { place: '4th', team: 'Emily & Kai', image: '../content/images/ratw-season-1-duos/Emily & Kai TR.png' /* other data */ },
    { place: '5th', team: 'Noah & Icy', image: '../content/images/ratw-season-1-duos/Noah & Icy TR.png' /* other data */ },
    { place: '6th', team: 'Husky & Lando', image: '../content/images/ratw-season-1-duos/Husky & Lando TR.png' /* other data */ },
    { place: '7th', team: 'Anice & Eraloss', image: '../content/images/ratw-season-1-duos/Anice & Eraloss TR.png' /* other data */ },
    { place: '8th', team: 'Ancient & Kandy', image: '../content/images/ratw-season-1-duos/Ancient & Candy TR.png' /* other data */ },
    { place: '9th', team: 'Josh & Jordan', image: '../content/images/ratw-season-1-duos/Josh & Jordan TR.png' /* other data */ },
    { place: '10th', team: 'Monkey & Joe', image: '../content/images/ratw-season-1-duos/Monkey & Joe TR.png' /* other data */ },
    { place: '11th', team: 'Pods & Joseph', image: '../content/images/ratw-season-1-duos/Pods & Joseph TR.png' /* other data */ },
    { place: '12th', team: 'Sun & Sam', image: '../content/images/ratw-season-1-duos/Sun & Sam TR.png' /* other data */ },
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
                                        <p>${team.place} Place</p>
                                    </div>
                                    <div id="stage" style="flex-shrink: 0; margin-left: 10px;">
                                        <img src="${team.image}" alt="${team.team}" style="max-width: 700px;">
                                    </div>
                                </div>`;
}

// * NEED TO FIX THIS TABLE GENERATION * //
document.addEventListener('DOMContentLoaded', function () {
    // Function to generate the HTML table
    function generateTable(data) {
        const tableContainer = document.getElementById('castList');
        const table = document.createElement('table');

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
    generateTable(usernames);
});



// Initial call to show the first team when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Update the team information for the initial team (in this case, the first team)
    updateTeamInfo(currentTeamIndex);
});