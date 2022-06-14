'use strict'

const {db, models: {User, Book} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)


  // Creating Books
  const books = await Promise.all([
    Book.create(
      {
        title: 'The Rainbow Fish',
        author: 'Marcus Pfister',
        imageUrl: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781558580091_p0_v7%5D&call=url%5Bfile:common/decodeProduct.chain%5D',
        price: 12.99,
        description: "Eye-catching foil stamping, glittering on every page, offers instant child appeal, but it is the universal message at the heart of this simple story about a beautiful fish who learns to make friends by sharing his most prized possessions that gives the book its lasting value."
      }),
      Book.create({
        title: 'The Very Hungry Caterpillar',
        author: 'Eric Carle',
        imageUrl: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780399208539_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D' ,
        price: 18.99,
        description:'Featuring interactive die-cut pages, this board book edition is the perfect size for little hands and great for teaching counting and days of the week.'
      }),
      Book.create({
        title: 'The Giving Tree',
        author: 'Shel Silverstein',
        imageUrl:'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780060256654_p0_v8%5D&call=url%5Bfile:common/decodeProduct.chain%5D' ,
        price: 10.99,
        description: 'Every day the boy would come to the tree to eat her apples, swing from her branches, or slide down her trunk...and the tree was happy. But as the boy grew older he began to want more from the tree, and the tree gave and gave and gave. This is a tender story, touched with sadness, aglow with consolation.'
      }),
      Book.create({
        title: 'The Story of Ferdinand',
        author: 'Munro Leaf',
        imageUrl: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780140502343_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D' ,
        price: 7.99,
        description: "Ferdinand is the world's most peaceful—and—beloved little bull. While all of the other bulls snort, leap, and butt their heads, Ferdinand is content to just sit and smell the flowers under his favorite cork tree."
      }),
      Book.create({
        title: 'Green Eggs and Ham',
        author: 'Dr.Seuss',
        imageUrl: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780394800165_p0_v10%5D&call=url%5Bfile:common/decodeProduct.chain%5D',
        price: 9.99,
        description: 'With unmistakable characters and signature rhymes, Dr. Seuss’s beloved favorite has cemented its place as a children’s classic. Kids will love the terrific tongue-twisters as the list of places to enjoy green eggs and ham gets longer and longer...and they might even learn a thing or two about trying new things!'
      }),
      Book.create({
        title: 'Where the Wild Things Are',
        author: 'Maurice Sendak',
        imageUrl: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780064431781_p0_v7%5D&call=url%5Bfile:common/decodeProduct.chain%5D',
        price: 7.99,
        description: "The adventure that has inspired generations of children to let out their inner monsters, showing how imagination allows for an escape from life's doldrums. It's also a moving testament to family love: when young Max returns from his reverie, his mother has saved him a hot dinner."
      }),
      Book.create({
        title: 'Corduroy',
        author: 'Don Freeman',
        imageUrl: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780140501735_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D',
        price: 7.99,
        description: "Don Freeman's classic character, Corduroy, is even more popular today then he was when he first came on the scene in 1968. This story of a small teddy bear waiting on a department store shelf for a child’s friendship has appealed to young readers generation after generation."
       }),
      Book.create({
        title: 'If You Give a Mouse a Cookie',
        author: 'Laura Numeroff',
        imageUrl: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780064434096_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D',
        price: 10.49,
        description: "This book is a great first introduction to Mouse, the star of the If You Give series and a perennial favorite among children. And with its spare, rhythmic text and circular tale, If You Give a Mouse a Cookie is perfect for beginning readers and story time! If a hungry little mouse shows up on your doorstep, you might want to give him a cookie. And if you give him a cookie, he\'ll ask for a glass of milk. He\'ll want to look in a mirror to make sure he doesn\'t have a milk mustache, and then he\'ll ask for a pair of scissors to give himself a trim..."
      }),
      Book.create({
        title: 'The Berenstain Bears and the Trouble with Chores',
        author: 'Jan Berenstain, Stan Berenstain',
        imageUrl: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780060573829_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D',
        price: 5.99,
        description: 'Are you having trouble with chores in your house? Share this funny book with your family to encourage everyone to do their share!Papa Bear and the cubs are having some trouble with chores—they don\'t want to do them! When they decide to take a break from cleaning, Mama Bear plays along. But what will happen when the mess builds up...and up...and up? This Berenstain Bears story will have kids laughing—and hopefully lead to less bickering about taking out the garbage and other chores around the home!'
      }),
      Book.create({
        title: 'Goodnight Moon',
        author: 'Margaret Wise Brown',
        imageUrl: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780694003617_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D',
        price: 7.49,
        description: 'In this classic of children\'s literature, beloved by generations of readers and listeners, the quiet poetry of the words and the gentle, lulling illustrations combine to make a perfect book for the end of the day. In a great green room, tucked away in bed, is a little bunny. \"Goodnight room, goodnight moon.\" And to all the familiar things in the softly lit room—to the picture of the three little bears sitting on chairs, to the clocks and his socks, to the mittens and the kittens, to everything one by one—the little bunny says goodnight.One of the most beloved books of all time, Goodnight Moon is a must for every bookshelf. This board book edition is the right size for little hands and is the perfect gift for baby showers, toddler birthday parties, and holidays.'
      }),
    
  ])

  return {
    users: {
      cody: users[0],
      murphy: users[1]
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
