const form = document.getElementById("word-form")
const ul = document.getElementById("letters")

const data = {
    "A": "Alfa",
    "B": "Bravo",
    "C": "Charlie",
    "D": "Delta",
    "E": "Echo",
    "F": "Foxtrot",
    "G": "Golf",
    "H": "Hotel",
    "I": "India",
    "J": "Juliett",
    "K": "Kilo",
    "L": "Lima",
    "M": "Mike",
    "N": "November",
    "O": "Oscar",
    "P": "Papa",
    "Q": "Quebec",
    "R": "Romeo",
    "S": "Sierra",
    "T": "Tango",
    "U": "Uniform",
    "V": "Victor",
    "W": "Whiskey",
    "X": "Xray",
    "Y": "Yankee",
    "Z": "Zulu"
}

form.addEventListener("submit", event => {
    event.preventDefault()
    const formData = new FormData(form)
    const word = formData.get("word").toUpperCase()
    const letters = word.replaceAll(" ", "")
    const items = letters.split("").map(letter => `<li>${letter} - ${data[letter]}</li>`)
    ul.innerHTML = items.join(" ")
    form.reset()
})

console.log(data)