var request = require('request');​
var base_api_url = "https://sandbox-apis.bankofcyprus.com/df-boc-org-sb/sb/psd2"
var client_id = "1196e68a-1254-493e-9d73-0815d0c82671"
var client_secret = "Q3kN2pU2nB3pA0qG8yY5gE3mP6jV4nC8rF3gT5aS2qL2mY1gP5"
var tppid = "singpaymentdata"​
var fb_usr_id = event.raw.sender.id​
var bp = event.bp


headers = {
    'Content-Type': "application/json",
    'Authorization': "Bearer AAIkNDhiYzUyNDEtYzNiMi00MDY1LTgyNWMtMzE2ZmFhNzJmZGI22luZeXJ64Y89PYuP0VBsZXzDz8s5fCe2IeE9_uA0-tuaMoiIYPxne3CWb_bs-AsUIi-l_DfS60BV3k2bCqbni93nfsRIuopCtJRcWZKmrMOrZAWFGwsgvUwXx2IFMk754pBnCy2KH1RHiB84cZaEVg",
    'subscriptionId': "Subid000001-1540647031357",
    'originUserId': "50520218",
    'tppId': "singpaymentdata",
    'journeyId': "abc",
    'timeStamp': "1540631335",
    'Cache-Control': "no-cache",
    'Postman-Token': "6ed72bac-1adb-3bd6-579b-6ac2ee872f92"
}

function post(url, data, headers, callback) {
    if (!headers) {

        request.post(base_api_url + url, {
            form: data, // your payload data placed here
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
            /*headers: {
                'X-Api-Key': 'dajzmj6gfuzmbfnhamsbuxivc', // if authentication needed
                'Content-Type': 'application/json' 
            }*/
        }, callback);
    } else {
        request.post(base_api_url + url, {
            json: data, // your payload data placed here
            headers: headers
            /*headers: {
                'X-Api-Key': 'dajzmj6gfuzmbfnhamsbuxivc', // if authentication needed
                'Content-Type': 'application/json' 
            }*/
        }, callback);
    }
}​
function get(url, headers, callback) {
    var options = {
        url: base_api_url + url,
        method: 'GET',
        headers: headers
    }
    request(options, callback)
}​
function patch(url, data, headers, callback) {
    console.log(data)
    console.log(headers)
    request.patch(base_api_url + url, {
        json: data,
        headers: headers
    }, callback);
}​
function get_access_token() {
    var data = {
        "client_id": client_id,
        "client_secret": client_secret,
        "grant_type": "client_credentials",
        "scope": "TPPOAuth2Security"
    }
    post("/oauth2/token", data, null, function (error, response, body) {
            if (error) {
                console.log(error)
            } else {

                token_response = JSON.parse(body)
                console.log("[Got Token]")
                if (token_response.access_token) {
                    bp.db.kvs.set(users / $ {
                            fb_usr_id
                        }
                        /boc,token_response.access_token,'access_token')
                        .then(() => {
                            createSubId(token_response.access_token)
                        })

                    }
                }
            })
    }​
    function createSubId(accesstoken) {
        var data = {
            "accounts": {
                "transactionHistory": true,
                "balance": true,
                "details": true,
                "checkFundsAvailability": true
            },
            "payments": {
                "limit": 99999999,
                "currency": "EUR",
                "amount": 999999999
            }
        }
        var headers = {
            "Authorization": "Bearer " + accesstoken,
            "Content-Type": "application/json",
            "app_name": "myapp",
            "tppid": tppid,
            "originUserId": "abc",
            "timeStamp": Date.now(),
            "journeyId": "abc"
        }
        var url = "/v1/subscriptions?client_id=" + client_id + "&client_secret=" + client_secret
        post(url, data, headers, function (err, response, body) {
                subBody = body
                sub_Id = subBody.subscriptionId
                console.log("[GOT SUB_ID]")
                bp.db.kvs.set(users / $ {
                        fb_usr_id
                    }
                    /boc,sub_Id,'subId')
                    .then(() => {
                        sendLoginUrl(sub_Id)
                    })

                })
        }​
        function boc_callback_handler(req, res, next) {
            if (req.query.code && req.query.state) {
                res.send("Success! U should recieve a message from the bot shortly")

                bp.db.kvs.set(users / $ {
                        req.query.state
                    }
                    /boc,req.query.code, 'code')
                    .then(() => {
                        /* TODO: Use the code to generate oauthcode2. Update the subId with the new accounts using the oauthcode2. after that notify the user for the success connection and send possible actions*/
                        getOAuthCode2(req.query.code)
                        bp.messenger.sendText(req.query.state, "I am now able to automate your payments")
                    })
                }
            }​
            function setupReturnHook() {
                if (event.bp && process.env.BOTPRESS_SSL_PORT) {
                    bp = event.bp
                    var router = bp.getRouter('botpress-messenger', {
                        auth: false
                    })
                    /*"http://localhost:3000/api/botpress-messenger/bocOauthcb"*/
                    _.each(router.stack, function (element, index, list) {
                        if (element.route && element.route.path === "/bocOauthcb") {
                            router.stack.splice(index, 1)
                        }
                    });
                    router.get('/bocOauthcb', boc_callback_handler)
                }
            }​
            function getOAuthCode2(code) {
                var data = {
                    "client_id": client_id,
                    "client_secret": client_secret,
                    "grant_type": "authorization_code",
                    "scope": "UserOAuth2Security",
                    "code": code
                }
                post("/oauth2/token", data, null, function (err, response, body) {
                            oauthcode2 = JSON.parse(body)
                            console.log("[GOT User Approval Code]")
                            bp.db.kvs.set(users / $ {
                                        fb_usr_id
                                    }
                                    /boc,oauthcode2.access_token,'oauthcode2')
                                    .then(() => {
                                            bp.db.kvs.get(users / $ {
                                                        fb_usr_id
                                                    }
                                                    /boc,"subId")