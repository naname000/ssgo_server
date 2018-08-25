import express from 'express'
const app = express()
//import sseMiddleware from 'express-sse-middleware'
//import sseMiddleware from 'express-sse-middleware'
//import {builder, EventData} from "express-sse-middleware/dist"
//import {builder} from 'express-sse-middleware/dist'
const sse = require('server-sent-events')



//app.use(sseMiddleware)
app.use(sse)
app.get('/', function (req, res) {
    let i:number = 0
    const sse = res.sse()

    sse.send('hoge')
    sse.close()
    // const interval = setInterval(function () {
    //     sse.send(i.toString())
    //     console.log(i)
    //     i++
    //     if(i == 10) clearInterval(interval)
    // }, 1000)
})

export default app

