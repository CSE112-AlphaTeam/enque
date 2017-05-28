module.exports = {  
  'Login Page - end2end' : function (client) {
    client
      .url('http://localhost:4000/login')
      .waitForElementVisible('body', 1000)
      // .assert.title('Landing Page')
  },

  'part two' : function(client) {
    client
      .setValue('#email', 'peter@enque.com')
      .setValue('#password', 'peter')
      // .submitForm('#contact_form')
      .pause(3000)
      .end();
  }
}