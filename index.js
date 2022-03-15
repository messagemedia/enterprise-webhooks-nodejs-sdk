var bodyParser = require('body-parser')
var crypto = require('crypto');
var express = require('express');

var app = express();
const PORT=3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({
  verify: function(req, res, buf, encoding) {
    
    // get rawBody
    req.rawBody = buf.toString();
    console.log("rawBody", req.rawBody);

  }
}));

app.listen(PORT, function () {
  console.log("Webhook verification app listening on port " + PORT);
});

app.post('/', function(req, res) {
  var publicKey = '-----BEGIN PUBLIC KEY-----\n'+
  'PUBLIC_KEY_HERE\n'+
  '-----END PUBLIC KEY-----';

  /** An example of what each field should look like has been added next to the corresponding field **/
  var body = req.rawBody; //'{"vendor_account_id":{"vendor_id":"MessageMedia","account_id":"MessageMedia123"},"callback_url":"https://9d2d6d69.ngrok.io/","delivery_report_id":"dc6f7774-9572-41a8-9a6b-9976a98db4a9","source_number":"+61412123123","date_received":"2018-07-18T06:33:51.785Z","status":"delivered","delay":0,"submitted_date":"2018-07-18T06:33:50.792Z","original_text":"Hello!","message_id":"38a6a1a0-36a9-4117-aaee-c0e893393634","error_code":"220","metadata":{}}';
  var signature = req.header('X-Messagemedia-Signature'); //"g5ciIx+pWaT7p3ZeGmWKFqx3z2LmBdaMweCdL7+Lv0+4TBS4Ccdp7yxbgBOZp8XXwNPlTCnVeV0MDdHia32kvs3s77fLoInR/C0EKQTo+1hD0m5qKE8DzC5jCRtYiBNuoTYjjwrrfuz/0KTTeRzsZt/PC/4lF1u4fcYTkIlEy+4nf/QdRCs2AgFWEGATEx7UCrTPgwxoKXZXEkoicWhFIKnY4mRCITbNYQmPAmbaW1vLzbqJiy7z7zRL+a4qXOvj341dCGieo8Rkq5sfpJUXdv7rz+PINwhJaqWOoK/wj0n2iT3fd0eLRoyDl9YBznJDlME5XgveQuE8gdU1hzIiag==";
  var digest = req.header('X-Messagemedia-Digest-Type'); //"SHA256";
  var date = req.header('Date'); //"Wed, 18 Jul 2018 06:33:52 GMT";

  var verifier = crypto.createVerify(digest);
  verifier.update("POST / HTTP/1.1" + date + body);
  var ver = verifier.verify(publicKey, signature, "base64");

  res.send(ver);
});
