const { expect } = require('@wdio/globals');
const { Given, When, Then } = require('@wdio/cucumber-framework');

const DoctorsPage = require('../../page/doctorsPage.js');
const SchedulePage = require('../../page/schedulePage.js');
const PatientsPage = require('../../page/patientsPage.js');

const databaseConfig = require('../../page/database.js');

// Given(/^the user is on the sign-in page$/, async () => {
//   await browser.url('https://www.syncfusion.com/');
//   const button = await $('#login-btn-menu');
//   await button.click();
// });

// When(/^they enter valid login credentials$/, async () => {
//   const usernameInput = await $('#user-name');
//   await usernameInput.clearValue();
//   await usernameInput.addValue(databaseConfig.username);

//   const passwordInput = await $('#password');
//   await passwordInput.clearValue();
//   await passwordInput.addValue(databaseConfig.password);
// });

// When(/^click on the sign-in button$/, async () => {
//   const signInButton = await $('#sign-in');
//   await signInButton.click();
// });

// Then(/^they should be redirected to their account dashboard$/, async () => {});

describe('User Registration and Authentication', () => {
  it('should log in with correct credentials', async () => {
    // await browser.baseUrl;
    await browser.url(`https://www.syncfusion.com/`);

    const button = await $('#login-btn-menu');

    await button.click();
    const usernameInput = await $('#user-name');

    await usernameInput.clearValue();

    await usernameInput.addValue(databaseConfig.username);

    const passwordInput = await $('#password');

    await passwordInput.clearValue();

    await passwordInput.addValue(databaseConfig.password);

    const signInButton = await $('#sign-in');

    await signInButton.click();
    await browser.pause(3000);
  });

  // it('sign up successfully', async () => {
  //   await browser.baseUrl;
  // });
});

describe('Functionality APPOINTMENT PLANNER', () => {
  it('edit Mobile Number for Dr. Nembo Lukeni', async () => {
    await DoctorsPage.open();
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

  it('Add new doctors', async () => {
    await DoctorsPage.open();
    await $('div.doctors').click();
    await $("//button[text()='Add New Doctor']").click();
    await $("input[name='Name']").setValue('Jon doe');
    await $("//button[text()='Save']").click();
    const emailError = await $('label#Email-info');
    expect(await emailError.getText()).toEqual('Enter valid email');
  });

  it('should change patient email on the patients page', async () => {
    await PatientsPage.open();
    const patientName = $('span.patient-name*=Laura');
    patientName.click();

    const editButton = $('button#edit');
    editButton.click();

    const emailInput = $('input[name="Email"]');
    emailInput.click();

    emailInput.setValue('Laura@mail.com');
    await browser.pause(3000);

    const saveButton = $('button.ejs-button');
    saveButton.click();
    await browser.pause(3000);
  });

  it('should find a patient named "Adams" on the patients page', async () => {
    await PatientsPage.open();

    const patientAdams = $('span.patient-name*=Adams');

    expect(patientAdams).toBeExisting();
    await browser.pause(3000);
    patientAdams.click();
  });

  it("should change patient's name in the calendar", () => {
    async () => {
      await SchedulePage.open();
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
    };
  });
});
