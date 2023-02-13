window.onload = function () {
    load_celeb();
    console.log("loaded");
}

function load_celeb() {
    fetch("https://raw.githubusercontent.com/Jakealtman1/celeb/main/assets/celebs.csv")
    .then((response) => response.text())
    .then((data) => {
        const wordsArray = data.split("\n");
        console.log(wordsArray);
    });
}
