const axios = require('axios');

module.exports = {
    connect: (req, res) => {
        console.log("PARROT");
        const authorizationCode = req.query.code;
        console.log("TOUCAN", authorizationCode);
        axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, {
            client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
            client_secret: process.env.AUTH0_CLIENT_SECRET,
            code: authorizationCode,
            grant_type: 'authorization_code',
            redirect_uri: `http://${req.headers.host}/auth/callback`
        }).then(accessTokenResponse => {
            console.log("HELLO", accessTokenResponse)
            return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo/?access_token=${accessTokenResponse.data.access_token}`).then(userInfoResponse => { 
                req.session.user = userInfoResponse.data;
                res.redirect('/account');
            }).catch(error => {
                console.log('server error access token!', error);
                res.status(500).send('server error!');
            });
        }).catch(error => {
            console.log('server error!', error);
            res.status(500).send('server error!');
        });
     }
}