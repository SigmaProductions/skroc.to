import express from 'express'

const app = express();
const port = 3000;

app.get('/', (req, res) => {

    res.json({
        hello: 1
    })
})

app.listen(port, () => {
    console.log(`Started on port ${port}`)
})