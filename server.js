const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

let team = [
  {id: 0, nickname: "Leilani", level: 40, species: "Bulbasaur", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},
  {id: 1, nickname: "Tortank", level: 30, species: "Blastoise", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},
  {id: 2, nickname: "", level: 30, species: "Charizard", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"}
]
let id = 2;

app.get('/api/team', (req, res) => {
  res.send(team);
  console.log("Client refresh: All 'team' sent/loaded.")
});

app.post('/api/team', (req, res) => {
  console.log("got in");

  id = id + 1;

  let mon = {
    id: id,
    nickname: req.body.nickname,
    level: req.body.level,
    species: req.body.species,
    sprite: req.body.sprite
  };

  team.push(mon);
  res.send(mon);
  console.log("New Pokémon added to server.");

});

app.delete('/api/team/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let removeIndex = team.map(mon => { return mon.id; }).indexOf(id);
  if (removeIndex === -1) {
    res.status(404).send("Sorry, that Pokémon isn't on your team");
    return;
  }
  team.splice(removeIndex, 1);
  res.sendStatus(200);
  console.log("Pokémon [" + removeIndex + "] deleted.");
});

app.put('/api/team/:id', (req, res) => {
  let monMap = team.map(mon => { return mon.id; });
  let index = monMap.indexOf(parseInt(req.params.id));
  let mon = team[index];
  mon.level = req.body.level;
  res.send(mon);
  console.log("Pokémon [" + index + "] modified.");
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
