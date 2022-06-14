/* global describe beforeEach it */

const { expect } = require('chai')
const { db, models: { Order } } = require('../index')
const seed = require('../../../script/seed');

describe('Order model', () => {
  let users;
  beforeEach(async () => {
    users = (await seed()).users;
  })

  describe('instanceMethods', () => {
    // describe('generateToken', () => {
    //   it('returns a token with the id of the user', async () => {
    //     const token = await users.cody.generateToken();
    //     const { id } = await jwt.verify(token, process.env.JWT);
    //     expect(id).to.equal(users.cody.id);
    //   }


  })
})
})
