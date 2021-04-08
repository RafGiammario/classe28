var app = new Vue({
  el: '#root',
  data: {
    nome: 'Filippo Tabbì',
    numeroPC: null,
    numeroUtente: null,
  },
  methods: {
    nomeRand: function () {
      axios.get('https://flynn.boolean.careers/exercises/api/random/name')
        .then((response) => {
          console.log(response.data.response);
          this.nome = response.data.response
        });
    },
    play: function () {
      axios.get('https://flynn.boolean.careers/exercises/api/random/int')
        .then((response) => {
          this.numeroPC = response.data.response;
        });
      axios.get('https://flynn.boolean.careers/exercises/api/random/int')
        .then((response) => {
          this.numeroUtente = response.data.response;
        });
    },
    check: function () {
      if (this.numeroPC > this.numeroUtente) {
        return 'PC';
      } else if (this.numeroUtente > this.numeroPC) {
        return 'Utente';
      } else if (this.numeroUtente && this.numeroPC) {
        return 'Pareggio';
      } else {
        return '';
      }
    }
  }
});
