let amigo = {nome: "José", 
    sexo: "M", 
    peso: 85.4,
    engordar(p){
        console.log(`Engordou ${p} Kg`)
        this.peso +=p
}}

amigo.engordar(6)

console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)