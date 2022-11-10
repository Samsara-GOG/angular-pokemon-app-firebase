
export class Pokemon {
  id: number;
  name: string;
  hp: number;
  cp: number;
  picture: string;
  types: string[];
  created: Date;
  lastEdited: Date;
  color: string;

  constructor (
    name: string = 'Entrer un nom',
    hp: number = 100,
    cp = 10,
    picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/101.png',
    types: string[] = [ 'Normal' ],
    created: Date = new Date(),
    lastEdited: Date = new Date(),
    color: string = '#009688'
  ) {
    this.name = name;
    this.hp = hp;
    this.cp = cp;
    this.picture = picture;
    this.types = types;
    this.created = created;
    this.lastEdited = lastEdited;
    this.color = color;
  }
}