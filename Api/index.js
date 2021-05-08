import axios from 'axios';
import express from 'express';
import cors from 'cors';
import { filterByLanguage } from './utils/filterByLanguage.js';
import { findOldest } from './utils/findOldest.js';

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.get('/repos/', async(req, res) => {
    try {
        
       const { data } = await axios.get('https://api.github.com/orgs/takenet/repos?per_page=50q=&type=&language=c%23');
       
       const csharpRepositories = filterByLanguage(data, 'C#');

       const oldRepositories = findOldest(csharpRepositories);

       const repositories = oldRepositories.slice(0, 5);

       return res.json(repositories);

    } catch(error)  {

        return res.sendStatus(404);

    };

    
});

app.listen(port, ()=> {
    console.log(`Running on port ${port}!`);
})