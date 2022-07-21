var idade = 15
if (idade < 16) {
    console.log(`Vc tem apenas ${idade}, não vota!`)
} else if (idade >= 16 && idade < 18)  { 
    console.log(`VC tem entre 16 e 18,  o voto é opcional!`)
} else if (idade > 65) {
    console.log(`vc tem ${idade} anos, o voto é opcional!`)
} else {
    console.log(`vc tem ${idade}, votar é obrigatorio!`)
}