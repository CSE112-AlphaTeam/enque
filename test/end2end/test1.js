module.exports = {
  'Test 1' : function (client) {
    client
      .url('http://localhost:4000/')
      .assert.title('Landing Page')
      .waitForElementVisible('body', 1000)
  },

  'Register_test' : function(client) {
    client
      .click('#register')
      .setValue('#companyName','UCSD')
      .setValue('#fname','Thomas')
      .setValue('#lname','Powell')
      .setValue('#email','tpowell@ucsd.edu')
      .setValue('#phone','(123) 222-2222')
      .setValue('#password','powell')
      .submitForm('#register_form')
  },

  'Login with new account' : function (client) {
    client
      .url('http://localhost:4000/login')
      .waitForElementVisible('body', 1000)
      .setValue('#email', 'tpowell@ucsd.edu')
      .setValue('#password', 'powell')
      .submitForm('#login_form')
      .pause(2000)
      .assert.title('Express')
      .end()
  }
}
