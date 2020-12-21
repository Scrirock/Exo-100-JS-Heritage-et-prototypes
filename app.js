let Vehicule = function(couleur, roue, marque){
    this.couleur = couleur;
    this.roue = roue;
    this.marque = marque;

    this.demarrer = function(){
        console.log("Le véhicule démarre");
    }

    this.arreter = function(){
        console.log("Le véhicule s'arrete");
    }
}

let velo = function (couleur, roue, marque, rayonRoue, typePeinture){
    Vehicule.call(this, couleur, roue, marque)

    this.rayonRoue = rayonRoue;
    this.typePeinture = typePeinture;

    this.monter = function (){
        console.log("je monte sur le velo")
    }
}

let voiture = function (couleur, roue, marque, assurance, proprietaire){
    Vehicule.call(this, couleur, roue, marque)

    this.assurance = assurance;
    this.proprietaire = proprietaire;

    this.passerAuCarWash = function (){
        console.log("la voiture passe au carWash")
    }
}

let truc = new voiture("rouge", 4, "Ford", true, "Matthias");
console.log(truc.roue);
truc.passerAuCarWash();