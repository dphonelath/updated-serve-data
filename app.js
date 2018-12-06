const express = require('express')
const app= express()
const cors= require('cors')
const parser = require('body-parser')

let port = process.envPORT || 4000

const cohortRoutes = require('./routes/cohortsRoutes')

app.use(parser.json())
app.use(parser.urlencoded(({extended:false})))
app.use(cors())

app.use('/cohorts', cohortRoutes)

app.get('/', (req,res)=>{
    res.send('hayyyyyy')
})

app.use(notFound)
app.use(errorHandler)

function notFound(req, res, next){
    res.status(404).send({error:'Not found!', status: 404, url: req.originalUrl})
}

function errorHandler(err, req, res, next) {
    console.error('ERROR', err)
    const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined

    res.status(500).send({
        error: err.message,
        stack,
        url: req.originalURL
    })

    res.status(500).send({ error: err.message, stack, url: req.originalUrl })
    }


app.listen(port, () => console.log(`Server running on ${port}`))
