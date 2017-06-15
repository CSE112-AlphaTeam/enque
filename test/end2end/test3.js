module.exports = {
  'Contact us - end2end' : function (client) {
    client
      .url('http://localhost:4000/#contact_us')
      .waitForElementVisible('body', 1000)
      .assert.title('Landing Page')
  },

  'part two' : function(client) {
    client
      .setValue('#name', 'Thomas Powell')
      .setValue('#email', 'tpowell@ucsd.edu')
      .setValue('#message','Everything works great, everyone gets an A.')
      .pause(2000)
      .submitForm('#gform')
      .pause(2000)
      .end();
  }
}
