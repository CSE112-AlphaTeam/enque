module.exports = {  
  'Contact us - end2end' : function (client) {
    client
      .url('http://localhost:4000/#contact_us')
      .waitForElementVisible('body', 1000)
      .assert.title('Landing Page')
  },

  'part two' : function(client) {
    client
      .setValue('#name', 'Nikan Aminian')
      .setValue('#email', 'naminian@ucsd.edu')
      .setValue('#message','Everything works great!')
      .submitForm('#contact_form')
      .pause(3000)
      .end();
  }
}