// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import './commands';

import addContext from 'mochawesome/addContext';
import 'cypress-mochawesome-reporter/register';
Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    cy.move('Success');
    const screenshot = `${test.title} (failed).png`;
    addContext({ test }, screenshot);
  }
});

after(() => {
  if (Cypress.currentTest.state === 'failed') {
    cy.move('Success');
  }
});
