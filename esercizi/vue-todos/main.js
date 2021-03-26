var app = new Vue({
  el: '#root',
  data: {
    currIndex: null,
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
  methods: {
    add: function () {
      if (this.inputTxt != '') {
        // facciamo add
        let obj = {
          title: this.inputTxt,
          status: 'todo'
        }

        this.todos.push(obj);
        this.inputTxt = '';
      }
    },
    editTitle: function (e) {
      if (this.inputTxt != '') {
        this.todos[this.currIndex].title = this.inputTxt;
      }

      if (e.which == 13) {
        this.inputTxt = ''
        this.currIndex = null;
      }
    },
    check: function (index) {
      this.todos[index].status = 'done';
    },
    remove: function (index) {
      this.todos.splice(index, 1);
    },
    edit: function (index) {
      this.inputTxt = this.todos[index].title;
      this.currIndex = index;
    }
  }
});
