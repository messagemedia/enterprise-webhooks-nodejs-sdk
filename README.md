# MessageMedia Secure Webhooks NodeJS Code Guide
[![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)

The MessageMedia Secure Webhooks code guide demonstrates how you can verify webhooks signed and sent to you by MessageMedia.

![Isometric](http://i64.tinypic.com/2aalw86.jpg)

## Table of Contents
* [Information](#newspaper-information)
  * [Slack and Mailing List](#slack-and-mailing-list)
  * [Bug Reports](#bug-reports)
  * [Contributing](#contributing)
* [Prerequisite](#star-prerequisite)
* [Get Started](#clapper-get-started)
* [API Documentation](#closed_book-api-documentation)
* [Need help?](#confused-need-help)
* [License](#page_with_curl-license)

## :newspaper: Information

#### Slack and Mailing List

If you have any questions, comments, or concerns, please join our Slack channel:
https://developers.messagemedia.com/collaborate/slack/

Alternatively you can email us at:
developers@messagemedia.com

#### Bug reports

If you discover a problem with the code guide, we would like to know about it. You can raise an [issue](https://github.com/messagemedia/nodejs/issues) or send an email to: developers@messagemedia.com

#### Contributing

We welcome your thoughts on how we could best provide you with SDKs that would simplify how you consume our services in your application. You can fork and create pull requests for any features you would like to see or raise an [issue](https://github.com/messagemedia/nodejs/issues)

## :star: Prerequisite
To be able to use this SDK, you will need a public key provided by MessageMedia. You can find out how to do this by going through the [Signature Key Management documentation](https://developers.messagemedia.com/code/signature-key-management-api-documentation/). You can then make use of the [Signature Key Management NodeJS SDK](https://github.com/messagemedia/signingkeys-nodejs-sdk) to create and manage your keys.

## :clapper: Get Started
To keep this guide simple and easy to understand, we've used Express to set up a server which will monitor for incoming webhooks. You can setup your own production server and use it instead of the Express one if needed.

### Initialisation and Installation
Create an empty directory for your project, let’s name it “testApp”. Now, open up your command prompt and clone this repository into the directory created.
Run `npm install` to install the necessary packages.

### Adding in the public key
Open up the index.js file and replace the placeholder that says ```PUBLIC_KEY_HERE``` with your public key. The result should look like this:
```javascript
var publicKey = '-----BEGIN PUBLIC KEY-----\n'+
  'MIIabcdNBgkqhkiG9w0BAQ4AAOCA338AMIIBCgKCAQEAwISbN8vv0HeUCPN9o29xCUzCsh0ZUM+wdc3Gi3+DfyO4rPec1f/uxFbw0Dscw1iEA1dUfQ5eKhhsOIPdjk//gOGQbBVmQ8DhDcGVGWrHrE/n/K/x0ZkIae4n4eNobK96Ic/C4YmXf5LBUmgkOwUM+5VDPxe3rMnm/3TQdJzAcBMIzqNixzseCh4ICYMSahKnkNY5bJGf+8WbT0i+3mHQwvLacAub+wFH6hyT4I7FXOcXmR+HIyD8xwwYLmB4Yy+cMmiDcc1J9KX34C5apXM2A3f2mOtgfM0WSH2NpXmZmpXmzbkbIxEw90N3zERrDb2myJAHAD0MKQ7abcdxPen96dIDAQAB\n'+
  '-----END PUBLIC KEY-----';
```

### Changing the request line
The request line will need to be changed according to your callback url and request type. For instance, if your callback url is `/captureData` and the method type was `PATCH` then the resulting request line would look like this:
```javascript
  verifier.update("PATCH /captureData HTTP/1.1" + date + body);
```

### Testing
You are now ready to test the application. From the root directory of your application (where your index.js file is), run `node index`
If all goes well, you should receive a `true` response which indicates the verification was a success.

## :closed_book: API Reference Documentation
Check out the [full API documentation](https://developers.messagemedia.com/code/secure-webhooks-api-documentation/) for more detailed information.

## :confused: Need help?
Please contact developer support at developers@messagemedia.com or check out the developer portal at [developers.messagemedia.com](https://developers.messagemedia.com/)

## :page_with_curl: License
Apache License. See the [LICENSE](LICENSE) file.
