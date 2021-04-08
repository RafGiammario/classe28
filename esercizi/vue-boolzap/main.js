Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  data: {
    index: 0,
    indexMess: null,
    contacts: contacts,
    message: '',
    filter: '',
  },
  methods: {
    // non funziona sempre, causa data in formato italiano
    // getTime: function (date) {
    //   let datetime = new Date(date);
    //
    //   let hours = datetime.getHours();
    //   let minutes = datetime.getMinutes();
    //   return `${hours}:${minutes}`;
    // }
    getLastAccess: function (index) {
      const messages = this.contacts[index].messages;

      if (messages.length) {
        const lastIndex = messages.length - 1;

        return messages[lastIndex].date;
      } else {
        return '';
      }
    },
    send: function () {
      const indexCurr = this.index //0
      const date = dayjs().format('DD/MM/YYYY HH:mm:ss');
      const message = {
				date,
				text: this.message,
				status: 'sent'
			}
      this.contacts[indexCurr].messages.push(message);
      this.message = '';

      setTimeout(() => {
        // risposta al messaggio
        const date = dayjs().format('DD/MM/YYYY HH:mm:ss');
        const message = {
  				date,
  				text: 'Ok!',
  				status: 'received'
  			}
        this.contacts[indexCurr].messages.push(message);
      }, 1000);
    },
    // showOptions: function (indexMess) {
    //   this.contacts[this.index].messages =
    //   this.contacts[this.index].messages.map((message, i) => {
    //     if (indexMess == i) {
    //       return  {
    //         ...message,
    //         options: true,
    //       }
    //     } else {
    //       return {
    //         ...message,
    //         options: false,
    //       };
    //     }
    //   });
    // },
    deleteMess: function (indexMess) {
      this.contacts[this.index].messages.splice(indexMess, 1);
    }
  }
});
