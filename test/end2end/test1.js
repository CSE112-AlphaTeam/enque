
/**
 * @description Another test that sees if client successfully logs in to site
 * @returns Successul login
 *
 */
module.exports = {  
  'Login Page - end2end' : function (client) {
    client
      .url('http://localhost:4000/login')
      .waitForElementVisible('body', 1000)
      // .assert.title('Landing Page')
  },

  'login' : function(client) {
    client
      .setValue('#email', 'naminian@ucsd.edu')
      .setValue('#password', 'nikanaminian')
      .submitForm('#login_form')
      .pause(2000)
  },

  'testing' : function(client) {
    client
    .click('#addemployees')
    .click('#add-employee-show')
    .setValue('#inputName','Nick Mcdonald')
    .setValue('#inputEmail','nickM@ucsd.edu')
    .setValue('#inputPhone','(555)555-5555')
    .submitForm('#add-employees')
    .pause(3000)
    .end();
  }
}