var app = new Vue({
  // questo è l'elemento dove si renderizza vue
  el: '#root',
  // questo è l'insieme dei dati
  data: {
    //questo è l'input per aggiungere i todo
    inputTxt: '',
    todos: [
      {
        title: 'Fare la spesa',
        status: 'todo',
      },
      {
        title: 'Leggere email',
        status: 'todo',
      },
      {
        title: 'Scendere i cane',
        status: 'todo',
      },
      {
        title: 'Annaffiare il bonsai',
        status: 'todo',
      },
    ],
  },
  computed: {
    todosComputed: function () {
      let todosDone = this.todos.filter((todo) => todo.status == 'done');
      let todosTodo = this.todos.filter((todo) => todo.status == 'todo');

      return [...todosTodo, ...todosDone];
    }
  },
  methods: {
    // questo metodo aggiunge nuovi todo
    add: function () {
      if (this.inputTxt != '') {
        let obj = {
          title: this.inputTxt,
          status: 'todo'
        }

        this.todos.push(obj);
        this.inputTxt = '';
      }
    },
    check: function (todo) {
      let index = this.todos.indexOf(todo);
      this.todos[index].status = 'done';
    },
    remove: function (todo) {
      let index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    }
  }
});
