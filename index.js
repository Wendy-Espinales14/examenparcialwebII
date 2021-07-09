require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require("cors"); 

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

//index.html

app.get('/', (req, res ) => {
   
        res.status(200).sendFile(path.join(__dirname, './index.html'));
    
})

//API

app.use('/api/calificaciones', require('./routes/examen.routes'));

app.use((req, res) => {
        res.status(404).send(
                {
                        status:404,
                        message:"404 not found",
                        url_principal: "/api/calificaciones"
                }
        );
});

app.listen(PORT, () => console.log(`Server running at http://127.0.0.1:${PORT}`))
