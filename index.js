// Code your solution here
function findMatching(names, match) {
    return names.filter((names) => names.toLowerCase() == match.toLowerCase());
}

function fuzzyMatch(names, match) {
    for (let i of match) {
        return names.filter((names) => names[0].toLowerCase() == i.toLowerCase())
    }
}

function matchName(names, match) {
    return names.filter((names) => names.name == match)
}