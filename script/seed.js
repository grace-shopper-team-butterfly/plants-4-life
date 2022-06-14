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
    User.create({ username: 'Cody', password: '123', isAdmin:true, email: 'cody7312@yahoo.com' }),
    User.create({ username: 'Murphy', password: '123', isAdmin:false, email: 'murphy1900@liret.org' }),
    User.create({ username: 'John', password: '123', isAdmin:false, email: 'john6360@twace.org' }),
    User.create({ username: 'Sophie', password: '123', isAdmin:false, email: 'sophie@extex.org' }),
    User.create({ username: 'Chris', password: '123', isAdmin:false, email: 'chris6069@acrit.org' }),
    User.create({ username: 'Angel', password: '123', isAdmin:false, email: 'angel5690@typill.biz' }),
    User.create({ username: 'Kim', password: '123', isAdmin:true, email: 'kim2841@bauros.biz' }),
    User.create({ username: 'Tony', password: '123', isAdmin:false, email: 'tony9910@bulaffy.com' }),
    User.create({ username: 'Phil', password: '123', isAdmin:false, email: 'phil7721@naiker.biz' }),
    User.create({ username: 'Kathy', password: '123' , isAdmin:false, email: 'kathy5587@gmail.com'})
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1],
      John: users[2],
      Sophie: users[3],
      Chris: users[4],
      Angel: users[5],
      Kim: users[6],
      Tony: users[7],
      Phil: users[8],
      Kathy: users[9]
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
