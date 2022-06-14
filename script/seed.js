'use strict'

const {db, models: {User} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123', isAdmin:true, email: 'cody7312@yahoo.com' }),
    User.create({ username: 'murphy', password: '456', isAdmin:false, email: 'murphy1900@liret.org' }),
    User.create({ username: 'john', password: '789', isAdmin:false, email: 'john6360@twace.org' }),
    User.create({ username: 'sophie', password: '012', isAdmin:false, email: 'sophie@extex.org' }),
    User.create({ username: 'chris', password: '234', isAdmin:false, email: 'chris6069@acrit.org' }),
    User.create({ username: 'angel', password: '345', isAdmin:false, email: 'angel5690@typill.biz' }),
    User.create({ username: 'kim', password: '456', isAdmin:true, email: 'kim2841@bauros.biz' }),
    User.create({ username: 'tony', password: '567', isAdmin:false, email: 'tony9910@bulaffy.com' }),
    User.create({ username: 'phil', password: '678', isAdmin:false, email: 'phil7721@naiker.biz' }),
    User.create({ username: 'kathy', password: '789' , isAdmin:false, email: 'kathy5587@gmail.com'})
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1],
      john: users[2],
      sophie: users[3],
      chris: users[4],
      angel: users[5],
      kim: users[6],
      tony: users[7],
      phil: users[8],
      kathy: users[9]
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
