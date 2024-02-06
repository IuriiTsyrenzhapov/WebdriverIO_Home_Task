class DoctorsPage {
  async open() {
    await browser.url(
      'https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors'
    );
  }
}

module.exports = new DoctorsPage();
