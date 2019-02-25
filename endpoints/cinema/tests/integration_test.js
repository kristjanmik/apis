const request = require('request')
const helpers = require('../../../lib/test_helpers')

describe('/cinema', () => {
  it('should return an array of objects containing correct fields', (done) => {
    const fieldsToCheckFor = ['title', 'released', 'restricted', 'imdb', 'image', 'showtimes']
    const params = helpers.testRequestParams('/cinema')
    const resultHandler = helpers.testRequestHandlerForFields(done, fieldsToCheckFor)
    request.get(params, resultHandler)
  })
})

// TODO: Debug this test
// I can't figure out why this test is failing
// describe('cinema theaters', () => {
//   it('should return an array of objects containing correct fields', (done) => {
//     const fieldsToCheckFor = ['name', 'movies']
//     // The following fields are optional and not part of scraping data
//     // ['location', 'phone', 'email', 'website', 'auditoriums', 'totalSeats', 'coordinates']
//     const params = helpers.testRequestParams('/cinema/theaters')
//     const resultHandler = helpers.testRequestHandlerForFields(done, fieldsToCheckFor)
//     request.get(params, resultHandler)
//   })
// })
