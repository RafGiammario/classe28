Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  data: {
    query: '',
    movies: [],
    api_key: '8e06a14f7ff933d31953f0fe4fe17eb9',
    lang: 'it',
    uri: 'https://api.themoviedb.org/3',
    langs: ['en', 'it', 'fr'],
  },
  mounted() {
  },
  methods: {
    search: function () {
      let params = {
        params: {
          api_key : this.api_key,
          query : this.query,
          language : this.lang
        }
      }
      axios.get(`${this.uri}/search/movie`, params)
        .then((response) => {
          this.movies = [...this.movies, ...response.data.results]
        })

    },
    getTitle: function (obj) {
      if (obj.title) {
        return obj.title;
      } else {
        return obj.name;
      }
    },
    getOriginalTitle: function (obj) {
      if (obj.original_title) {
        return obj.original_title;
      } else {
        return obj.original_name;
      }
    },
    getStars: function (vote) {
      let starsHTML = '';

      for (var i = 1; i <= 5; i++) {
        if (i <= Math.ceil(vote/2)) {
          starsHTML += '<i class="fas fa-star"></i>';
        } else {
          starsHTML += '<i class="far fa-star"></i>';
        }
      }

      return starsHTML;
    },
    errorSRC: function (e) {
      e.target.style.display = 'none';
      e.target.nextElementSibling.style.display = 'block';
    }
  }
});
