class Pokemon {
  constructor(elem, adat) {
    this.elem = elem;
    this.adat = adat;
    this.nev = this.elem.children("h3");
    this.kepessegek = this.elem.children(".kepessegek");
    //  console.log(this.kepessegek);
    this.kep = this.elem.children("img");
    this.elem.children(".csata").on("click", () => {
      this.CsataTrigger();
    });
    this.setAdatok(adat);
  }
  0;
  setAdatok(ertekek) {
    let kepesseg = ertekek.abilities;
    let kepessegeink = this.kepessegek;
    kepesseg.forEach(function (ertekek) {
      kepessegeink.html(ertekek.ability.name);
    });

    this.nev.html(ertekek.name);
    this.kep.attr("src", ertekek.sprites.front_shiny);
  }

  CsataTrigger() {
    let esemeny = new CustomEvent("csata", { detail: this.adat });
    window.dispatchEvent(esemeny);
  }
}
