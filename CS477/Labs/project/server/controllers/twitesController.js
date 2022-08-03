// const Tweet = require('../models/tweet');

// exports.getAllPost = (req, res, next) => {
//     Tweet.find()
//         .then(message => {
//             res.render('index', { name: 'Josh', msg: message, path: '/', pageTitle: 'Home' });
//         })
//         .catch(err => console.log(err));
// };

// exports.getTweetDetail = (req, res, next) => {
//     Tweet.findById(req.params.prodId)
//         .then(tweet => {
//             res.render('tweet-detail', { msg: tweet, pageTitle: 'Tweet Detail', path: '/', name: 'Edward' });
//         })
//         .catch(err => console.log(err));
// }

// exports.addToDisplay = (req, res, next) => {
//     req.user.addToDisplay(req.body.id)
//         .then(() => {
//             res.redirect('/displayTweet');
//         }).catch(err => console.log(err));
// }

// exports.getTweet = (req, res, next) => {
//     req.user
//         .populate('tweet.items.picture')
//         .execPopulate()
//         .then(user => {
//             console.log(user);
//             res.render('displayTweet', { cart: user.cart, pageTitle: 'Shopping Cart Detail', path: '/cart', name: 'Edward' });
//         })
//         .catch(err => console.log(err));
// }

// exports.deleteInTweet = (req, res, next) => {
//     req.user.removeFromTweet(req.body.prodId)
//         .then(() => {
//             res.redirect('/dispalyTweet');
//         }).catch(err => console.log(err));

// }