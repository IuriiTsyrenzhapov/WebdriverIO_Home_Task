const { expect, browser, $ } = require('@wdio/globals');

describe('Task Epam', () => {
  it('open Url', async () => {
    await browser.url(
      `https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors`
    );
  });

  it('Add new doctors use css selector xpath', async () => {
    await $('div.doctors').click();
    await $("//button[text()='Add New Doctor']").click();
    await $("input[name='Name']").setValue('Jon doe');
    await $("//button[text()='Save']").click();
    const emailError = await $('label#Email-info');
    expect(await emailError.getText()).toEqual('Enter valid email');
  });

  it('wait for Displayed', async () => {
    const doctorsButton = await $("//button[text()='Add New Doctor']");

    await doctorsButton.waitForDisplayed();
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

  it('execute', async () => {
    const pageTitle = await browser.execute(() => {
      return document.title;
    });
    expect(pageTitle).toContain('Appointment Planner');
  });

  it('perform browser actions', async () => {
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
});

// it('edit Mobile Number for Dr. Nembo Lukeni', async () => {

//   await browser.url(
//     `https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard`
//   );
//   await $('div.doctors').click();

//   await browser.waitUntil(
//     async () => {
//       return await $('div.doctors').isDisplayed();
//     },
//     { timeout: 9000, timeoutMsg: 'Doctors section is not visible after 5s' }
//   );
//   await browser.pause(3000);

//   const drNemboLukeniElement = await $('div.name*=Dr. Nembo Lukeni');
//   await browser.pause(3000);

//   await $("//button[text()='Edit']").click();

//   const mobileNumberInput = await $('input#DoctorMobile');

//   await mobileNumberInput.clearValue();

//   await mobileNumberInput.setValue('(044) 555-5555');

//   const saveButton = await $("//button[text()='Save']");
//   await saveButton.click();

// });
