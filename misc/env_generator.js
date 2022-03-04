
const fs = require('fs');


const serviceAccount={
  "type": "service_account",
  "project_id": "test-d80ac",
  "private_key_id": "8e7303bfeba57640371e9d3b713c2bfdec8f60a2",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDFL2eoHRgl/zBm\nwt1EXkTKaD1OEcpwlTjIFaz6mracy/AIn4M5HWwvUBoG3QSucm6ZmqlJn2Z8fau+\nfaI+egoylzjwru7ZoHt89fuCM6yqlNe5GDlgKvutJ5D28xb66spPI7XGAnci6LPo\n0AG4KkICGDTJZprmoljmCdiEt0nD7RQWXFqdAYurGdnsama+Lv3br7yqcPxJ0WU8\nCUzWkzLg/DxzYf63G34fzKLMZWpD+I8zKamnKUErPzYF2/YBGAj3B4OIqXbX0CfL\nVVksjz4TCfCR7cgVEq0R9+uHdbrDLs9zCipZFWUa8RDajGP9ZTDWdB070HjaQf5O\ngFwpKqGXAgMBAAECggEADl8kVligg1lBHtkPC9+b2SDJCK3VRZvEQrKjVxr8BxuT\nroOc92zq9XVu7P2I5moJIGe19PUjbbYyVIHCcUlJAWNYnBPNhs3ikjrSqCyGzJWc\nNeDLgo3ZDOErkkQpDARQcH1kaNhfJ77MKUJkp0nOyJyypDpqCdGrwKbXdOM8nIUq\nY4SyIqPLZFkCMiQpuaD5DCFFLzN3BN9VEg9LcoS6HLOo6sVaaGqtddyWNoCKqZ9Q\nPScmDpV0O4ZBgjSqUU0TQ1W6YiB1Y1ex9Sa6/vOZJdBp9jggGJ+A4bgnyOKAZsbj\nbwUWCTgGd14AyiEK1pG8fA5SrnQC5IAftF2IhQFzUQKBgQDyCU/K9yhnxemErR9Q\ntHBocELHTCEQWwFyZe0NDhHxhrOvKKVfajs0DhjpFMRdTpHanhDOas3NDAA0L9+L\nerogCQObMDD68dnf2kVnZkkiweawZ6YuVGvD2OQd7dCupe2xtwI3amTeJpk9cSeZ\nxcwH74yNM1q2F9gjMZCJZkNrKQKBgQDQj60QOYmKMGSJg/CB9OQTCjWcTRLSm38p\nwrNDJfQuklLMVsf2yiz9Y6VLNg+r+clZLbl32oJMUCmcRVMoYVVWL+ppY0MpcsLm\nXWTJmzdc5QdZv9uJdmmrEA3We+fiyeN0Ikh8Dc2lWo4TnGdBy/4N2Qto+X3NiWNR\nLVst8JP+vwKBgAWw7FxkZWHTSINjIrpeE8qQ4TEYfCqLSURsWx+Udh2MwkrbFNBi\nihPWRQWuBFQBVfKjBtgjsMUihBq2CXaZIyk/rQMIJg6wgyP9WOZuhEe58XeyaDjs\nqUAIqIx/nAmPQ0CLghTVfpuuoqnMMFcwTHTfUBm93GMtulpRfwmMCwfJAoGAKEt6\nDmZvcmmDIyaAszsTTbJtRTOG7XXpjbH2XITatpzCroQdwkqxgotcBjn9sSZjhn1V\nFhj7j671OyIRvP2BNVOwoIfzE/D+Qu/MZz875RDC6M4uplJgfBJv+f6agLCs52Uw\nR/eKweXLCXLwaD/3Z8mFcNSzP6DJtYdj1G5kyZUCgYEAmdzooKTRyynNNwQ5nWTD\nljF2UBoooo+C4z0qlOlKafu6lUNFCv3gtkDvhZN7NsopdPxy9ukDZXV4tsuX5wYN\n6JqIkBjuhZK+Pq3Op4JYAZGv3ILft6BSn8jasVT5GJcNZxdaBHcBfrvqbqv56/qp\nb9NPAmtNirJi+ujdBpJo+Jk=\n-----END PRIVATE KEY-----\n",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-nggdk%40test-d80ac.iam.gserviceaccount.com"
}

const databaseURL="https://test-d80ac-default-rtdb.europe-west1.firebasedatabase.app"
const publicConfig = {
  apiKey: "AIzaSyDixxkUPZs8yX3fUDtxBNve1Zl7-MynCS0",
  authDomain: "test-d80ac.firebaseapp.com",
  databaseURL: "https://test-d80ac-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-d80ac",
  storageBucket: "test-d80ac.appspot.com",
  messagingSenderId: "580714688152",
  appId: "G-KS9SY47D7V"
};

const config = {serviceAccount, databaseURL, publicConfig}
const dotenv = `FIREBASE_CONFIG=${JSON.stringify(config)}`
console.log(dotenv)
fs.writeFileSync('.env', dotenv);
