const { expect } = require('@wdio/globals');

const DoctorsPage = require('../../page/doctorsPage');

describe('Task Epam', () => {
  before(async () => {
    await browser.url(
      `https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors`
    );
  });

  it('Page Obj', async () => {
    await DoctorsPage.open();
  });

  it('Base Url', async () => {
    await browser.baseUrl;
  });

  it('Changes in calendar name', async () => {
    await $('div.sidebar-item.calendar').click();
    await $("div[data-id='Appointment_1002']").click();
    await $("//button[text()='Edit']").click();

    const input = await $('input#PatientName');

    await input.clearValue();
    await input.setValue('Laura');
    await $("//li[text()='Laura']").click();
    await browser.pause(3000);
    const saveButton = await $(
      '.e-schedule-dialog.e-control.e-btn.e-lib.e-primary.e-event-save.e-flat'
    );
    await saveButton.click();

    await browser.pause(3000);
  });

  it('exucute red solid', async () => {
    const doctor = await $('div.calendar');

    await browser.execute(function (doctor) {
      doctor.style.border = 'red solid 10px';
    }, doctor);
    await browser.pause(3000);
  });

  it('action mouse move', async () => {
    const row = await $('div.patients');
    await row.moveTo();

    await browser.pause(5000);
  });

  it('execute title', async () => {
    const pageTitle = await browser.execute(() => {
      return document.title;
    });
    expect(pageTitle).toContain('Appointment Planner');
  });

  it('browser actions', async () => {
    await browser.performActions([
      {
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'mouse' },
        actions: [
          { type: 'pointerMove', duration: 1000, x: 1, y: 1 },
          { type: 'pointerDown', button: 0 },
          { type: 'pointerUp', button: 0 },
        ],
      },
    ]);

    await browser.pause(3000);
  });

  it('edit Mobile Number for Dr. Nembo Lukeni', async () => {
    await browser.url(
      `https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors`
    );
    await $('div.doctors').click();

    const specialistElement = await $('#Specialist_1');
    await specialistElement.click();

    await browser.pause(3000);

    await $("//button[text()='Edit']").click();
    await browser.pause(3000);

    const mobileNumberInput = await $('input#DoctorMobile');
    await mobileNumberInput.clearValue();
    await browser.pause(3000);
    await mobileNumberInput.setValue('(044) 555-5555');

    const saveButton = await $("//button[text()='Save']");
    await saveButton.click();
  });
});
