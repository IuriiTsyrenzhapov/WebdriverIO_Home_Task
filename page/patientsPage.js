class PatientsPage {
  async open() {
    await browser.url(
      'https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/patients'
    );
  }
}

module.exports = new PatientsPage();
