var app = new Vue({
  el: '#root',
  data: {

  },
  created() {
    axios.get('http://localhost/classe-28/live-coding/php-json/call.php').then((result) => {
      console.log(result);
    })
  }
});
