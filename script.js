let nomeHeroi = "Misha"
let idadeHeroi = 29
let classeHeroi = "ninja"
let ataqueHeroi

function attack() {
  switch (classeHeroi) {
    case "mago":
      ataqueHeroi = "magia"
      break
    case "guerreiro":
      ataqueHeroi = "espada"
      break
    case "monge":
      ataqueHeroi = "artes marciais"
      break
    case "ninja":
      ataqueHeroi = "shurikens"
      break
  }

  console.log(`O ${classeHeroi} atacou usando ${ataqueHeroi}`)
}

attack()
