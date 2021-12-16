$(function () {
  const myAszinkron = new MyAszinkron();
  let pokemon = {};
  const pokemonTomb = [];
  const szuloElem = $(".pokemonTarolo");
  const sablonElem = $(".pokemonok");
  szuloElem.empty();

  for (let index = 0; index < 10; index++) {
    let vegpont = "https://pokeapi.co/api/v2/pokemon/" + index;
    myAszinkron.getAdat(vegpont, pokemon, megjelenit, hibakezeles);
  }

  function megjelenit(pokemon) {
    //  console.log(pokemon);
    sablonElem.show();
    const ujElem = sablonElem.clone().appendTo(szuloElem);
    const ujPokemon = new Pokemon(ujElem, pokemon);
    pokemonTomb.push(ujPokemon);
    // console.log(pokemonTomb);
    sablonElem.hide();
  }

  function hibakezeles(hiba) {
    // console.log(hiba);
    $("h2").html("Nincs ilyen pokémon!");
    $("img").attr(
      "src",
      "https://cdn.pixabay.com/photo/2015/06/09/16/12/error-803716_960_720.png"
    );
  }

  $("#ok").on("click", () => {
    let randomSzam = Math.floor(Math.random() * vegpont.length);
    console.log(randomSzam);
    const apivegpont = "https://pokeapi.co/api/v2/pokemon/" + randomSzam;
    myAszinkron.getAdat(apivegpont, pokemon, megjelenit, hibakezeles);
  });

  /* Csata */
  $(window).on("csata", (event) => {
    console.log(event.detail.id);
    //   let melyikPokemon = event.detail.id;
    this.pokemonTomb.splice(dataid, 1);
    this.megjelenit();
    pokemonTomb.forEach((element) => {
      $(".tegedValasztalak").html(element.adat.name + " téged választalak!");
    });
  });

  /* Keresés */
  $("#nevkeresoGomb").on("click", () => {
    pokemonTomb.forEach((element) => {
      //  console.log(element);
      //   console.log(element.adat.name);
      if (element.adat.name == $("#nevkereses").val()) {
        //     console.log(element);
        szuloElem.html(element.elem);
      }
    });
  });

  $("#kepessegkeresoGomb").on("click", () => {
    pokemonTomb.forEach((element) => {
      console.log(element.adat.abilities);
      for (let i = 0; i < element.adat.abilities.length; i++) {
        console.log(i.ability.name);
        if (element.adat.ability == $("#kepessegkereses").val()) {
          // console.log(element);
          szuloElem.html(element.elem);
        }
      }
    });
  });
});
