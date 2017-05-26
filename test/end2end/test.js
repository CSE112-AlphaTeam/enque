module.exports = {  
  'Homepage end2end' : function (client) {
    client
      .url('http://localhost:4000/#contact_us')
      .waitForElementVisible('body', 1000)
      .assert.title('Landing Page')
  },

  'part two' : function(client) {
    client
      .setValue('input', ['Nikan Aminian'])
      // .setValue('input[type=text]', ['nikan.aminian@gmail.com', client.Keys.ENTER])
      .pause(3000)
      // .assert.containsText('#main', 'Night Watch')
      .end();
  }
}