// Arquivo para execucao em prod
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join('build')));

app.get('*', (req,res) =>{
    const index = path.join('build', 'index.html');
    res.sendFile(index);
});

app.listen(PORT, (error) => {
    if (error) {
        return console.log('Error up server', error)
    }

    console.log('App is listening on port' + PORT);
})
