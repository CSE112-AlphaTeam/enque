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

  'Change password' : function(client) {
    client
    .click('#settings')
    .setValue('#editPassword1','powell')
    .setValue('#editPassword2','thomas')
    .setValue('#editPassword3','thomas')
    .click('#submitEditPass')
    .pause(2000)
    .click('#logout')
  },

  'Confirm password change' : function(client) {
    client
    .setValue('#email', 'tpowell@ucsd.edu')
    .setValue('#password', 'thomas')
    .submitForm('#login_form')
    .pause(3000)
    .end();
  }
}
