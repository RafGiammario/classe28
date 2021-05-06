Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  data: {
    disks: [],
    genreOptions: [],
    genreFilter: '',
    orderDesc: true,
    filters: {
      author: ''
    }
  },
  mounted() {
    axios.get('http://localhost/classe-28/esercizi/php-dischi/api/music.php')
      .then((response) => {
        this.disks = response.data.response;

        // this.disks.forEach((disk) => {
        //   if (!this.genreOptions.includes(disk.genre)) {
        //     this.genreOptions.push(disk.genre);
        //   }
        // });

      });
  },
  methods: {
    // yearSort: function () {
    //   this.orderDesc = !this.orderDesc;
    //
    //   if (this.orderDesc) {
    //     this.disks.sort((a,b) => b.year - a.year);
    //   } else {
    //     this.disks.sort((a,b) => a.year - b.year);
    //   }
    // }
    getDisksByAuthor: function () {
      axios.get('http://localhost/classe-28/esercizi/php-dischi/api/music.php', {params: this.filters})
        .then((response) => {
          this.disks = response.data.response;

          // this.disks.forEach((disk) => {
          //   if (!this.genreOptions.includes(disk.genre)) {
          //     this.genreOptions.push(disk.genre);
          //   }
          // });

        });
    }
  }
});
