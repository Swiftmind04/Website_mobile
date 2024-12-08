const fastifyPassport=require('@fastify/passport')
const GoogleStrategy= require('passport-google-oauth20').Strategy
const GithubStrategy= require('passport-github2').Strategy 
const User=require('../model/User')

// google
fastifyPassport.use("google",new GoogleStrategy({
  clientID: "1084805314648-iidnjt0lqi2ivn0e1cvmqpo66ba9ucan.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function (accessToken, refreshToken, profile, cb) {
   // cb(undefined,profile)
   console.log(profile)
    if(profile.id){
      User.findOne({email:profile.emails[0].value})
      .then((user)=>{
         if(user){
          cb(undefined,user)
         }else{
          new User({
            name: profile.name.familyName + ' ' + profile.name.givenName,
            email: profile.emails[0].value,
            image: profile.photos[0].value,
          }).save()
          .then(user => cb(undefined, user));
         }
    }
  )
  }
}));

fastifyPassport.registerUserDeserializer(async(user,req)=>{
  return user
})
fastifyPassport.registerUserSerializer(async(user,req)=>{
  return user
})
