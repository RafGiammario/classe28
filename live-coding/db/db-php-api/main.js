Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  data: {
    stanze: [],
    stanza: null,
  },
  mounted() {
    axios.get('http://localhost/classe-28/live-coding/db-php-api/api/stanze.php')
      .then((response) => {
        this.stanze = response.data.response;
      });
  },
  methods: {
    getById: function (id) {
      axios.get(`http://localhost/classe-28/live-coding/db-php-api/api/stanze.php?id=${id}`)
        .then((response) => {
          this.stanza = response.data.response[0];
          console.log(this.stanza);
        });
    }
  }
});
