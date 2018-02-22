const bands = [
    "The Plot in You",
    "The Devil Wears Prada",
    "Pierce the Veil",
    "Norma Jean",
    "The Bled",
    "Say Anything",
    "The Midway State",
    "We Came as Romans",
    "Counterparts",
    "Oh, Sleeper",
    "A Skylit Drive",
    "Anywhere But Here",
    "An Old Dog"
];

const bands2 = [];

bands.forEach(band => {
    stripper(band);
});

function stripper(snip) {
    if (snip.includes("The") || snip.includes("A") || snip.includes("An")) {
        let name = snip.split(" ");
        name.shift();
        bands2.push(name.join(" "));
        return;
    } else {
        bands2.push(snip);
    }
}

console.log(bands2.sort());
