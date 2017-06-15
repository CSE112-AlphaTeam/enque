<<<<<<< HEAD:test/end2end/test3.js
module.exports = {
=======

/**
 * @description Testing contact between client and page
 * @returns 'Everything works great' if client successfully contacts page
 *
 */
module.exports = {  
>>>>>>> a8c94f66c7244ac5dca5e5ecbb535d19201521d6:test/end2end/contact.js
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
