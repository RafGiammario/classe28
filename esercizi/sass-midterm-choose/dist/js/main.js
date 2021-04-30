Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  data: {
    title: 'MidTerm Lucky Wheel',
    students: students,
    projects: projects,
    currProject: '',
    currStudent: '',
    selectedProjects: [],
    selectedStudents: [],
    counter: 10,
    interval: null,
  },
  methods: {
    pair: function() {
      let studentIndex = this.randomNumber(this.students, this.selectedStudents);
      let projectIndex = this.randomNumber(this.projects, this.selectedProjects);
      this.currStudent = studentIndex;
      this.currProject = projectIndex;
    },
    randomNumber: function(array, check) {
      const min = 0;
      const max = array.length - 1;

      let random = null
      while (random == null || check.includes(random)) {
        random = Math.floor(Math.random() * (max - min + 1)) + min;
      }

      return random;
    },
    save: function() {
      this.selectedStudents.push(this.currStudent);
      this.selectedProjects.push(this.currProject);
      this.currProject = null;
      this.currStudent = null;

      this.counter = 10;
    }
  }
});
