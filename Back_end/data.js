//Fichier servant de base de données en attendant l'ajout d'une BD

const restaurantsData = [
  { id: 1, name: "Fast Food :  Pitaya" },
  { id: 2, name: "Fast Food :  Point B" },
  { id: 3, name: "Fast Food : BurgerKing" },
  { id: 4, name: "Restaurant : Le Fouquet's" },
  { id: 5, name: "Restaurant : Ciel de Paris" },
  // Ajoutez d'autres restaurants ici
];

module.exports = {
  restaurants: restaurantsData,
};
