const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// IDs divisible by 3
const pkmonid3 = pokémon.filter(i => i.id % 3 === 0);
console.log(pkmonid3);

// Pokemon of fire type
const pkmtype_fire = pokémon.filter(pkm => pkm["types"].includes("fire"));
console.log(pkmtype_fire);

// Pokemon objects with more than one type
const pkmon_multiples = pokémon.filter(pkm => pkm["types"].length > 1);
console.log(pkmon_multiples);

// Pokemon objects by name only
const pkmon_names = pokémon.map(pkm => pkm["name"]);
console.log(pkmon_names);

// Array of pokemon names where ID > 99
const pkm_name_id = pokémon.filter(i => i.id > 99).map(pkm => pkm["name"]);
console.log(pkm_name_id);

// names of the pokémon whose only type is poison
const pkmon_names_poision = pokémon.filter(pkm => pkm["types"].length === 1 && pkm["types"].includes("poison")).map(pkm => pkm["name"]);
console.log(pkmon_names_poision);

// an array containing just the first type of all the pokémon whose second type is "flying"
const flying_first_type = pokémon.filter(pkm => pkm["types"][1] == "flying").map(pkm => pkm["types"][0]);
console.log(flying_first_type);

// a count of the number of pokémon that are "normal" type
const normal_pkmon_total = pokémon.filter(pkm => pkm["types"].includes("normal")).reduce((total) => {return total += 1}, 0);
console.log(normal_pkmon_total);