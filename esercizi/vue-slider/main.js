var app = new Vue({
  el: '#root',
  data: {
    index: 0,
    arrayImgs: [
      'https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg',
      'https://images.theconversation.com/files/290710/original/file-20190903-175663-lqb3z6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
      'https://rosmarinonews.it/wp-content/uploads/2020/09/BENEVENTO.jpeg',
    ],
    id: '',
  },
  created: function () {
    this.id = setInterval(() => {
      this.next();
    }, 2000 );
  },
  methods: {
    next: function (e) {
      if (e && e.type == "click") {
        clearInterval(this.id);
        this.id = "";
      }
      // this.arrayImgs.length - 1 === 2
      // 2
      if (this.index < this.arrayImgs.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }
    },
    prev: function () {
      clearInterval(this.id);
      this.id = "";
      // this.arrayImgs.length - 1 === 2
      if (this.index > 0) {
        this.index--;
      } else {
        this.index = this.arrayImgs.length - 1;
      }
    },
    dotSelction: function (index) {
      this.index = index;
    },
    autoplay: function () {
      if (!this.id) {
        this.id = setInterval(() => {
          this.next();
        }, 2000 );
      } else {
        clearInterval(this.id);
        this.id = "";
      }
    }
  }
});
