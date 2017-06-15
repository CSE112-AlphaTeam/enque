
/**
 * @description Testing contact between client and page
 * @param N/A
 * @returns 'Everything works great' if client successfully contacts page
 *
 */
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
      .pause(3000)
      .submitForm('#contact_form')
      .end();
  }
}