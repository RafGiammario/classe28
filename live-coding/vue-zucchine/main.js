var app = new Vue({
  el: '#root',
  data: {
    zucchine: [],
    zucchineCorte: [],
    zucchineLunghe: [],
  },
  methods: {
    genera: function () {
      this.zucchine = [];
      let varietaLista = ['Pelosella', 'Bianca', 'Verde', 'Romana'];
      for (var i = 0; i < 20; i++) {
        let lunghezza = this.rand(1, 30);
        let indexRand = this.rand(0, 3);
        let zucchina = {
          varieta: varietaLista[indexRand],
          lunghezza,
          peso: this.rand(1, 3),
        }

        this.zucchine.push(zucchina);
      }
    },
    rand: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    pesoTot: function (array) {
      let pesoTot = 0;
      array.forEach((item) => {
        pesoTot += item.peso
      });

      return pesoTot;
    },
    separa: function () {
      this.zucchineCorte = this.zucchine.filter((zucchina) => zucchina.lunghezza < 15);
      this.zucchineLunghe = this.zucchine.filter((zucchina) => zucchina.lunghezza >= 15);
    },
    isSeparable: function () {
      return this.zucchine.length
        && !(this.zucchineCorte.length
        || this.zucchineLunghe.length);
    }
  }
});
