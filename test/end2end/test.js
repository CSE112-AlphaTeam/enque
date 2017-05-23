module.exports = {  
  'Homepage end2end' : function (client) {
    client
      .url('http://localhost:4000/')
      .waitForElementVisible('body', 1000)
      .assert.title('Landing Page')
      .end()
  }
}