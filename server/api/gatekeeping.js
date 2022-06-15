const User = require("../db/models/User")

const requireToken = async (req, res, next) => {
  try{
    console.log(req.headers)
    const token = req.headers.authorization

    const user = await User.findByToken(token)
    req.user = user
    next()
  }catch(err) {
    next(err)
  }
}

const isAdmin = (req, res, next) => {
  if(!req.user.isAdmin){
    return res.status(403).send('You shall not pass!')
  }else{
    next()
  }
}

module.exports = {
  requireToken,
  isAdmin
}
