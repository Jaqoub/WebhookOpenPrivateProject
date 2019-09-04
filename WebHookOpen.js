const express = require('express');

const app = express();

app.use(express.json());
var sender = null;
var committer = null;

app.post('/', function(request){
    const repository = request.body["repository"];
    owner = request.body["push"];
    committer = request.body["commit"];

    if(OpenOrClosed() == false){
//yeah
//yeah200
    }
}