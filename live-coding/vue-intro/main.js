var app = new Vue(
   {
     el: '#root',
     data: {
      classe: 'saluto',
      nome: '',
      cognome: '',
      message: 'Hello World',
      mieClassi: 'underlined saluto',
      coloreTitolo: 'red',
    },
    methods: {
       saluta: function (message) {
         // console.log(message);
         // console.log(this);
         if (this.coloreTitolo == 'blue') {
           this.coloreTitolo = 'red';
         } else {
           this.coloreTitolo = 'blue';
         }

       }
    }
   }
);


// {
//  classe: 'saluto',
//  nome: '',
//  cognome: '',
//  message: 'Hello World',
//  mieClassi: 'underlined saluto',
//  coloreTitolo: 'red',
//  saluta: () => {
//     console.log(this.coloreTitolo);
//  }
// }
