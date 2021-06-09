let app = new Vue({
  el: '#root',
  data: {
    sports: [],
    api_token: 'mYGTSoD1ijE5LjJT3Gqw327mvRETIWiGAxMC5zVr3kN3C8fNm17ivHLUgHRnSKc9Lkf9cgxCXZbLS6C7'
  },
  created() {
    axios.get('http://localhost:8000/api/sports', {
      params: {
        api_key: this.api_token
      }
    }).then((response) => {
      this.sports = response.data.data;
    })
  }
});
