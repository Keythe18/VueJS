class Personnage {
    constructor(name, life, attack, type){
        this.name = name
        this.life = life
        this.attack = attack
        this.type = type

        if(this.type === 'ennemi'){
            this.infosMAJ()
        }
    }

    attaque(ennemi){
        if(ennemi.life <= 0){ennemi.life = 0}
        else{ennemi.life -= this.attack}

        if(ennemi.life <= 0){
            ennemi.life = 0
            console.log('combat gagné')
        }

        ennemi.infosMAJ()
    }

    infosMAJ(){
        document.querySelector('#name').innerHTML = 'Nom: ' + this.name
        document.querySelector('#life').innerHTML = 'Vie: ' + this.life
        document.querySelector('#attack').innerHTML = 'Attaque: ' + this.attack
    }

}


const Hero = new Personnage('Henry', 200, 12, 'hero')
const Ennemi = new Personnage('Troll', 150, 5, 'ennemi')

document.querySelector('#buttonAttack').addEventListener('click', () => {
    Hero.attaque(Ennemi)
})





