let celebs = []

window.onload = async function() {
    const response = await fetch('https://raw.githubusercontent.com/Jakealtman1/celeb/main/celeb.csv')
    const data = await response.text()
    celebs = data.split('\n').map(entry => entry.trim())
}
