let currentIndex = 0; // Keep track of the current team index

const teamsData = [
    { place: '1st', team: 'Blossom & Doge', title: 'Influencers', image: '../content/images/ratw-season-2-duos/Blossom & Doge TR.png' /* other data */ },
    { place: '2nd', team: 'Dora & Carson', title: 'Parent/Child', image: '../content/images/ratw-season-2-duos/Carson & Dora TR.png' /* other data */ },
    { place: '3rd', team: 'Skelly & Daisy', title: 'Musicians', image: '../content/images/ratw-season-2-duos/Daisy & Skelly TR.png' /* other data */ },
    { place: '4th', team: 'Iconic & J1SOO', title: 'Celebrities', image: '../content/images/ratw-season-2-duos/Iconic & J1SOO TR.png' /* other data */ },
    { place: '5th', team: 'PJ & Silverest', title: 'Best Friends', image: '../content/images/ratw-season-2-duos/PJ & Silverest TR.png' /* other data */ },
    { place: '6th', team: 'Snake & Gary', title: 'Jocks', image: '../content/images/ratw-season-2-duos/Gary & Snake TR.png' /* other data */ },
    { place: '7th', team: 'Elemental & Fabio', title: 'Biologists', image: '../content/images/ratw-season-2-duos/Elemental & Fabio TR.png' /* other data */ },
    { place: '8th', team: 'Bliss & Caitlynn', title: 'Models', image: '../content/images/ratw-season-2-duos/Bliss & Caitlynn TR.png' /* other data */ },
    { place: '9th', team: 'Sara & Jessica', title: 'Neighbours', image: '../content/images/ratw-season-2-duos/Sara & Jessica TR.png' /* other data */ },
    { place: '10th', team: 'Gracie & Quinn', title: 'Roommates', image: '../content/images/ratw-season-2-duos/Grace & Quinn.png' /* other data */ },
    { place: '11th', team: 'Chlorine & Angelina', title: 'Goths', image: '../content/images/ratw-season-2-duos/Angelina & Chlorine TR.png' /* other data */ },
    { place: '12th', team: 'Conor & Pigoscar', title: 'Athletes', image: '../content/images/ratw-season-2-duos/Conor & Pigoscar TR.png' /* other data */ },
];

const teamStats = [
    { name: 'Blossom & Doge', legsCompeted: 11, legsWon: 1, countriesVisited: ['Canada', 'France', 'Australia', 'French Polynesia', 'South Africa', 'Egypt', 'Brazil', 'India', 'USA'] },
    { name: 'Dora & Carson', legsCompeted: 11, legsWon: 10, countriesVisited: ['Canada', 'France', 'Australia', 'French Polynesia', 'South Africa', 'Egypt', 'Brazil', 'India', 'USA'] },
    { name: 'Skelly & Daisy', legsCompeted: 11, legsWon: 0, countriesVisited: ['Canada', 'France', 'Australia', 'French Polynesia', 'South Africa', 'Egypt', 'Brazil', 'India', 'USA'] },
    { name: 'Iconic & J1SOO', legsCompeted: 10, legsWon: 0, countriesVisited: ['Canada', 'France', 'Australia', 'French Polynesia', 'South Africa', 'Egypt', 'Brazil', 'India'] },
    { name: 'PJ & Silverest', legsCompeted: 9, legsWon: 0, countriesVisited: ['Canada', 'France', 'Australia', 'French Polynesia', 'South Africa', 'Egypt', 'Brazil', 'India'] },
    { name: 'Snake & Gary', legsCompeted: 8, legsWon: 0, countriesVisited: ['Canada', 'France', 'Australia', 'French Polynesia', 'South Africa', 'Egypt', 'Brazil', 'India'] },
    { name: 'Elemental & Fabio', legsCompeted: 7, legsWon: 0, countriesVisited: ['Canada', 'France', 'Australia', 'French Polynesia', 'South Africa', 'Egypt', 'Brazil'] },
    { name: 'Bliss & Caitlynn', legsCompeted: 6, legsWon: 0, countriesVisited: ['Canada', 'France', 'Australia', 'French Polynesia', 'South Africa', 'Egypt'] },
    { name: 'Sara & Jessica', legsCompeted: 5, legsWon: 0, countriesVisited: ['Canada', 'France', 'Australia', 'French Polynesia', 'South Africa'] },
    { name: 'Gracie & Quinn', legsCompeted: 3, legsWon: 0, countriesVisited: ['Canada', 'France', 'Australia'] },
    { name: 'Chlorine & Angelina', legsCompeted: 2, legsWon: 0, countriesVisited: ['Canada', 'France'] },
    { name: 'Conor & Pigoscar', legsCompeted: 1, legsWon: 0, countriesVisited: ['Canada'] },
];

const teamAverages = [
    { name: 'Dora & Carson', average: 1.09, original: 2, new: 1, positionChange: +1 },
    { name: 'Blossom & Doge', average: 2.64, original: 1, new: 2, positionChange: -1 },
    { name: 'Iconic & J1SOO', average: 4.27, original: 4, new: 3, positionChange: +1 },
    { name: 'Skelly & Daisy', average: 4.40, original: 3, new: 4, positionChange: -1 },
    { name: 'Snake & Gary', average: 5.13, original: 6, new: 5, positionChange: +1 },
    { name: 'PJ & Silverest', average: 5.22, original: 5, new: 6, positionChange: -1 },
    { name: 'Elemental & Fabio', average: 5.86, original: 7, new: 7, positionChange: +0 },
    { name: 'Bliss & Caitlynn', average: 6.83, original: 8, new: 8, positionChange: +0 },
    { name: 'Sara & Jessica', average: 9.20, original: 9, new: 9, positionChange: +0 },
    { name: 'Gracie & Quinn', average: 10.33, original: 10, new: 10, positionChange: +0 },
    { name: 'Chlorine & Angelina', average: 11.00, original: 11, new: 11, positionChange: +0 },
    { name: 'Conor & Pigoscar', average: 12.00, original: 12, new: 12, positionChange: +0 },
];


const usernames = [
    { name: 'Blossom', username: 'Lagostinha234' },
    { name: 'Doge', username: 'MrDragonMcUnicorn' },
    { name: 'Dora', username: 'ItsLuffily' },
    { name: 'Carson', username: '7unarEclipse' },
    { name: 'Skelly', username: 'MrNinjaSkelly' },
    { name: 'Daisy', username: 'diavlonov' },
    { name: 'Iconic', username: 'juniorfrei' },
    { name: 'J1SOO', username: 'Revolutionblackpenk' },
    { name: 'PJ', username: 'pjthegamer1010' },
    { name: 'Silverest', username: 'sSilverPlayer' },
    { name: 'Snake', username: 'Bestfrien555' },
    { name: 'Gary', username: 'whitedragon46' },
    { name: 'Elemental', username: 'elementalthief' },
    { name: 'Fabio', username: 'ThatBoiisCool7' },
    { name: 'Bliss', username: 'blixiss3' },
    { name: 'Caitlynn', username: 'CaitlynnKapule' },
    { name: 'Sara', username: 'HarmonyGrxpy' },
    { name: 'Jessica', username: 'Jvssicaz' },
    { name: 'Gracie', username: 'Gracefulss' },
    { name: 'Quinn', username: 'Quinnlenciaga' },
    { name: 'Chlorine', username: 'chlxriinee' },
    { name: 'Angelina', username: 'Angelinakarina' },
    { name: 'Conor', username: 'c4nors' },
    { name: 'Pigoscar', username: 'Pigboy8a' },
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
        nameHeader.innerHTML = '<b>Name:</b>';
        usernameHeader.innerHTML = '<b>Username:</b>';

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
    const tableContainer = document.getElementById('teamStats');
    const table = document.createElement('table');

    // Adding the custom style for the castlist table
    table.classList.add('statsTable');

    // Create the table header
    const headerRow = table.insertRow();
    const nameHeader = headerRow.insertCell(0);
    const legsCompetedHeader = headerRow.insertCell(1);
    const legsWonHeader = headerRow.insertCell(2);
    const countriesVisitedHeader = headerRow.insertCell(3);
    
    nameHeader.innerHTML = '<b>Team:</b>';
    legsCompetedHeader.innerHTML = '<b>Legs Competed:</b>';
    legsWonHeader.innerHTML = '<b>Legs Won:</b>';
    countriesVisitedHeader.innerHTML = '<b>Countries Visited:</b>';

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


function teamAveragesTable(data) {
    const tableContainer = document.getElementById('teamAverages'); // Change 'teamStats' to the actual ID of your container
    const table = document.createElement('table');

    // Adding the custom style for the teamStats table
    table.classList.add('statsTable');

    // Create the table header
    const headerRow = table.insertRow();
    const nameHeader = headerRow.insertCell(0);
    const averageHeader = headerRow.insertCell(1);
    const originalHeader = headerRow.insertCell(2);
    const newHeader = headerRow.insertCell(3);
    const positionChangeHeader = headerRow.insertCell(4);

    nameHeader.innerHTML = '<b>Name:</b>';
    averageHeader.innerHTML = '<b>Average:</b>';
    originalHeader.innerHTML = '<b>Original:</b>';
    newHeader.innerHTML = '<b>New:</b>';
    positionChangeHeader.innerHTML = '<b>Position Change:</b>';

    // Populate the table with data
    data.forEach(team => {
        const row = table.insertRow();
        const nameCell = row.insertCell(0);
        const averageCell = row.insertCell(1);
        const originalCell = row.insertCell(2);
        const newCell = row.insertCell(3);
        const positionChangeCell = row.insertCell(4);

        nameCell.textContent = team.name;
        averageCell.textContent = team.average;
        originalCell.textContent = team.original;
        newCell.textContent = team.new;
        positionChangeCell.textContent = team.positionChange;
    });

    // Append the table to the container
    tableContainer.appendChild(table);
}



// Call the function with your team Averages when the page loads
document.addEventListener('DOMContentLoaded', function () {
    teamAveragesTable(teamAverages);
});

// Call the function with your team Stats when the page loads
document.addEventListener('DOMContentLoaded', function () {
    statsTable(teamStats);
});


// Initial call to show the first team when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Update the team information for the initial team (in this case, the first team)
    updateTeamInfo(currentTeamIndex);
});