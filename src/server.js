// Arquivo para execucao em prod
const express = require('express');
const { resolve } = require('path')


const app = express();

app.use('/', express.static(resolve(__dirname,'./build')));

app.listen(process.env.PORT || 3000, (error) => {
    if (error) {
        return console.log('Error up server', error)
    }

    console.log('server up OK')
    console.log('server up OK')
})
