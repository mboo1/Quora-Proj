const alphabet = "abcdefghijklmopqrstuvwxyz"
const colors = [ 'DeepSkyBlue', 'DarkSlateBlue', 'DarkGreen', 'DarkSalmon', 'DarkOrchid', 'FireBrick' ]

const generateColor = (username) => {
    let initial;
    if (!username || username === '') username = 'a';
    initial = username[0].toLowerCase();
    let indi = (alphabet.indexOf(initial) % colors.length);
    return colors[indi];
}

export default generateColor