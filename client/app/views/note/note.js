class NoteCtrl {

  constructor($log, $mdSidenav, Notes) {
    this.$log = $log;
    this.$mdSidenav = $mdSidenav;
    this.Notes = Notes;
    this.getNotes();
  }

  getNotes() {
    this.Notes.getList().then(notes => {
      this.notes = notes;
    });
  }

  addNote() {
    this.Notes.post(this.newNote).then(() => this.getNotes());
  }

  deleteNote(note) {
    note.remove().then(() => this.getNotes());
  }
}

NoteCtrl.$inject = ['$log', '$mdSidenav', 'Notes'];

export default NoteCtrl;