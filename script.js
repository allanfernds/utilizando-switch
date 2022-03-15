let lyDistance = prompt("Inserir distancia em anos-luz")
let unit = prompt("Converter para:\n [1]  Parsec(pc)\n [2]  Unidade astronânima(AU)\n [3]  Quilômetros(km)")

let userOption
let convertedDistance


switch (unit) {
    case "1":
        userOption = "Parsec"
        convertedDistance = lyDistance * 0.306601
        break
    case "2":
        userOption = "Unidade Astronânima"
        convertedDistance = lyDistance * 63241.1
        break
    case "3":
        userOption = "Quilômetros"
        convertedDistance = lyDistance * (9.5 * Math.pow(10, 12))
        break
    default:
        alert(`Conversão não identificada\nUnidade fora do escopo`)
}

alert("Distância em anos-luz: " + lyDistance + "\nDistância em " + userOption + ": " + convertedDistance)