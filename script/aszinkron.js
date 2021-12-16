class MyAszinkron {
  constructor() {}

  getAdat(vegpont, valtozo, myCallback, callBackHiba) {
    $.ajax({
      url: vegpont,
      type: "GET",
      success: function (result) {
        valtozo = result;
        myCallback(valtozo);
      },
      error: function () {
        callBackHiba();
      },
    });
  }
}
