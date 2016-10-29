import GitHubApi from 'github'

const github = new GitHubApi({
    // optional args
    debug: true,
    protocol: 'https',
    host: 'api.github.com', // should be api.github.com for GitHub
    pathPrefix: '/api/v3', // for some GHEs none for GitHub
    headers: {
        'user-agent': 'My-Cool-GitHub-App' // GitHub is happy with a unique user agent
    },
    Promise: require('bluebird'),
    followRedirects: false, // default: true there's currently an issue with non-get redirects, so allow ability to disable follow-redirects
    timeout: 5000
})

Meteor.methods({
  'github:auth'(opt) {
    console.log(opt)
    github.users.getFollowingForUser({
        // optional:
        // headers: {
        //     "cookie": "blahblah"
        // },
        user: "defunkt"
    }, function(err, res) {
        console.log(JSON.stringify(res));
    })
  }
})

