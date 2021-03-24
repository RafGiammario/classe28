var app = new Vue({
  el: '#root',
  data: {
    awesome: true,
    smile: false,
    type: 'D',
    nomi: ['Ale', 'Fra', 'Andre', 'Walter'],
    todos: [
      {
        title: 'Fare la spesa',
        description: 'Quella cosa che fai quando si incazza la tipa'
      },
      {
        title: 'Parrucchiere',
        description: 'Quel professionista che non serve a Fabio'
      },
      {
        title: 'Ipersoap',
        description: 'Lorem qualcosa'
      },
      {
        title: 'Pisciare cane',
        description: 'Si dice da qualche parte'
      },
    ],
  },
  methods: {
    // boolean: function () {
    //   if (this.awesome) {
    //     this.awesome = false;
    //   } else {
    //     this.awesome = true;
    //   }
    // }
    numeri: function () {
      return 100;
    }
  }
});
