/**
 * 
 */

let chai = require('chai');

const { assert } = chai;

const sum = function (array) {
    let output;

    return output;
}

describe("Two Sum", () => {
    it("Should implement two sum", () => {
        assert.deepEqual(_twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
    });
});

'use strict';

const dynamoDBClient = require('./dynamoDBClient');

// You can use console.log for debugging purposes.

const log = console.log;

function queryUserNotes(userEmail) {
    // Use the following date format for "now"
    const dateNow = new Date().toISOString();


    var params = {
        TableName: "user-notes",
        Key: {
            "user": userEmail
        }
        // KeyConditoinExpression: "#email=:email",
        // ExpressionAttributeNames: {
        //     "#email": "user"
        // },
        // ExpressionAttributeValues: {
        //     ":email": userEmail
        // }
    };

    return new Promise((resolve, reject) => {
        // Query the DynamoDB database...
        dynamoDBClient.get(params, function (err, data) {
            if (err) reject(err)
            else {
                // Validate the given token with one from the database
                // and return user email if the tokens match ...
                let userItems = data.Items;
                if (!userItems || userItems.length) {
                    reject("User Item Not Found");
                }
                resolve(userItems[0]);
            }
        });
    });
}

function statusResponse(statusCode) {
    return {
        statusCode,
    };
}

function getAuthenticatedUserEmail(token) {
    log({token});
    var params = {
        TableName: 'token-email-lookup',
        Key: {
            "token": token
        }
        // KeyConditoinExpression: "#token=:tokenValue",
        // ExpressionAttributeNames: {
        //     "#token": "token"
        // },
        // ExpressionAttributeValues: {
        //     ":tokenValue": token
        // }
    };

    return new Promise((resolve, reject) => {
        dynamoDBClient.get(params, function (err, data) {
            log(err)
            log(data)
            if (err) reject(err)
            else {
                // Validate the given token with one from the database
                // and return user email if the tokens match ...
                let tokenItems = data.Items;
                if (!tokenItems || tokenItems.length) {
                    reject("Token Item Not Found");
                }
                resolve(tokenItems[0].email);
            }
        });
    });
}

async function authenticateUser(headers) {
    try {
        const authenticationHeader = headers['Authentication'];

        // Validate the Authentication header

        const [type, token] = authenticationHeader.split(" ");

        log({token});

        const userEmail = await getAuthenticatedUserEmail(token);

        return userEmail;
    } catch(error) {
        log(error);
        throw error;
    }
}

module.exports.handler = async (event, context, callback) => {
    const { headers, body} = event;
    try {
        let userEmail = await authenticateUser(headers)
        let notes = await queryUserNotes(userEmail);
        const response = {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*', // Required for CORS support to work
            },
            body: JSON.stringify(notes),
        };
        callback(null, response);
    }
    catch(err) {
        log(err)
        callback(null, err);
    };
};

// Don't modify following exports, tests break without them.
module.exports.getAuthenticatedUserEmail = getAuthenticatedUserEmail;
