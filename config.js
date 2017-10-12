'use strict';
const Confidence = require('confidence');
const Dotenv = require('dotenv');


Dotenv.config({ silent: true });

const criteria = {
    env: process.env.NODE_ENV
};


const config = {
    $meta: 'This file configures the plot device.',
    projectName: 'Motix Membership',
    port: {
        web: {
            $filter: 'env',
            test: 9000,
            production: process.env.PORT,
            $default: 8000
        }
    },
    baseUrl: {
        $filter: 'env',
        $meta: 'values should not end in "/"',
        production: 'https://getaqua.herokuapp.com',
        $default: 'http://127.0.0.1:8000'
    },
    authAttempts: {
        forIp: 50,
        forIpAndUser: 7
    },
    cookieSecret: {
        $filter: 'env',
        production: process.env.COOKIE_SECRET,
        $default: '!k3yb04rdK4tz~4qu4~k3yb04rdd0gz!'
    },
    hapiMongoModels: {
        mongodb: {
            uri: {
                $filter: 'env',
                production: process.env.MONGODB_URI,
                test: 'mongodb://mvp-motix-mongo-dev.5bd45434.svc.dockerapp.io:37017/aqua-test',
                $default: 'mongodb://mvp-motix-mongo-dev.5bd45434.svc.dockerapp.io:37017/motix-membership'
            }
        },
        autoIndex: true
    },
    nodemailer: {
        host: 'smtp.yahoo.com',
        port: 465,
        secure: true,
        auth: {
            user: 'motixsmtp@yahoo.com',
            pass: process.env.SMTP_PASSWORD
        }
    },
    system: {
        fromAddress: {
            name: 'Motix Accounts',
            address: 'motixaccounts@yahoo.com'
        },
        toAddress: {
            name: 'Motix Accounts',
            address: 'motixaccounts@yahoo.com'
        }
    }
};


const store = new Confidence.Store(config);


exports.get = function (key) {

    return store.get(key, criteria);
};


exports.meta = function (key) {

    return store.meta(key, criteria);
};
