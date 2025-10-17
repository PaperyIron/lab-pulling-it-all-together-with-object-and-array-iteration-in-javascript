function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}
const gameData = gameObject(); //assigns a variable to the gameObject function to make it easier to work with

function allTeams() {
    return [gameData.home, gameData.away]
}; //function to combine everything into one array[[home], [away]]

function findTeam(teamName) {
    return allTeams().find(team => team.teamName === teamName);
} //goes through and returns stats for each team

function allPlayersEntries() {
    return allTeams().flatMap(team => Object.entries(team.players)); //steps into the player object and flattens the depth
} // [['player name', [..player stats]] returns a bunch of mini lists

function findPlayer(playerName) {
    return allPlayersEntries().find(([name]) => name === playerName);
} //returns the stats of a selected player


function numPointsScored(playerName) {
    const player = findPlayer(playerName); //call findplayer function to locate player stats
    return player[1].points; //index at 1 because of flatMap.  index 0 would be just the player name
};

function shoeSize(playerName) {
    const player = findPlayer(playerName) //call findplayer function to locate player stats
    return player[1].shoe; //returns the shoe size stat
};

function teamColors(teamName) {
    return findTeam(teamName).colors; //call findTeam function to access team color property
};

function teamNames() {
    return allTeams().map(team => team.teamName); //creates a new array of all the team names
};

function playerNumbers(teamName) {
    const team = findTeam(teamName)
    return Object.values(team.players).map(player => player.number);//creates a new array of all players and numbers on team
}

function playerStats(playerName) {
    const player = findPlayer(playerName);
    return player[1]; //returns all player stats
}

function bigShoeRebounds() {
    const dataObject = gameObject(); //assign gameObject to a variable
    let biggestShoeSize = 0; //set shoe size to zero
    let reboundsAtMax = 0; //variable to assign rebounds number to once largest shoe size is found

    for (const team in dataObject) { //access the team property
        const players = dataObject[team].players; //access player object
        for (const player in players) {
            const stats = players[player]; //access the stats of players
            if (stats.shoe > biggestShoeSize) { 
                biggestShoeSize = stats.shoe; //assigns the shoe size. Bigger shoes will overwrite the smallest until the biggest is found
                reboundsAtMax = stats.rebounds; //assigns the rebounds of the biggest shoe size
            }
        }
    }
    return reboundsAtMax; //return total rebounds
}

