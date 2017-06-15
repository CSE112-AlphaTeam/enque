module.exports = {
  'Navigate to login' : function (client) {
    client
      .url('http://localhost:4000/login')
      .waitForElementVisible('body', 1000)
  },

  'login' : function(client) {
    client
      .setValue('#email', 'tpowell@ucsd.edu')
      .setValue('#password', 'powell')
      .submitForm('#login_form')
      .pause(1000)
  },

  'Adding new employee' : function(client) {
    client
    .click('#addemployees')
    .click('#add-employee-show')
    .setValue('#inputName','John Wick')
    .setValue('#inputEmail','jwick@ucsd.edu')
    .setValue('#inputPhone','(123)222-2222')
    .submitForm('#add-employees')
    .pause(3000)
    .end();
  }
}
