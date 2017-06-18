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

  'Check-in' : function(client) {
    client
    .click('#signin')
    .setValue('#inputFirst','Michael')
    .setValue('#inputLast','Scott')
    .setValue('#inputPhone','(123)333-3333')
    .click('#new-patient')
    .click('#checkin')
    .pause(2000)
    .assert.containsText('#alert','No appointment found')
    .pause(1000)
    .end();
  }
}
