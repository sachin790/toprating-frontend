const jwt = require("jsonwebtoken")
//import Axios from "axios"

const env = require("dotenv")
env.config()

class AuthService {
    constructor() { }

    generateTokenForUserAccount(
        resolve,
        reject,
        user_id,
        email
    ) {

        let holder = {
            user_id: user_id,
            email: email
        }

        console.log(user_id)


        jwt.sign(holder, process.env.SECRET_KEY, {
            expiresIn: 86400 //24 hours
        },
            (error, token) => {
                if (error) {
                    console.log('I got here');

                    return reject(error)
                }

                let res_data = {
                    auth: true,
                    token: token
                }

                resolve(res_data)
                return;
            }
        );
    }

    decodeTokenInPasswordTokenLink(token, resolve, reject) {
        try {
            token = token.toString();
        }
        catch (error) {
            return reject({ auth: false, message: "Invalid Token" })
        }

        jwt.verify(token, process.env.SECRET_KEY, function (error, decoded) {
            if (error) {
                return reject({
                    auth: false,
                    error,
                    message: "Failed to authenticate token"
                });
            }

            resolve(decoded);
        });
    }

}

module.exports = AuthService