class SchedulePage {
  async open() {
    await browser.url(
      'https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/calendar'
    );
  }
}

module.exports = new SchedulePage();
