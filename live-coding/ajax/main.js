$.ajax(
 {
   url: "https://flynn.boolean.careers/exercises/api/random/boolean",
   method: "GET",
   success: function (data, stato) {
     if (data.response) {
      $("#risultati").html('true');
    } else {
      $("#risultati").html('false');
    }
   },
   error: function (richiesta, stato, errori) {
     console.log(richiesta, stato, errori)
     alert("E' avvenuto un errore. " + errori);
   }
 }
);

$.ajax(
 {
   url: "https://flynn.boolean.careers/exercises/api/random/name",
   method: "GET",
   success: function (data, stato) {
    $('#nome').html(data.response);
   },
   error: function (richiesta, stato, errori) {
     alert("E' avvenuto un errore. " + errori);
   }
 }
);

for (var i = 0; i < 10; i++) {
  console.log(randName());
}

function randName() {
  $.ajax(
   {
     url: "https://flynn.boolean.careers/exercises/api/random/name",
     method: "GET",
     success: function (data, stato) {
      $('#listName').append(`<li>${data.response}</li>`)
     },
     error: function (richiesta, stato, errori) {
       alert("E' avvenuto un errore. " + errori);
     }
   }
  );
  return "chiamata" + i;
}
