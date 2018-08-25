import app, {MyEventData} from '../src/app'
import request from 'supertest'
import * as sse from 'express-sse-middleware/dist'
import {EventData, builder} from "express-sse-middleware/dist";

test('helloworld', function () {
    request(app)
        .get('/')
        .then(function (res) {
            console.log(res)
        })

})