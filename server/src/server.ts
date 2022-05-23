import express, { response } from 'express'
import { request } from 'http';
import { routes } from './routes';
import cors from 'cors'
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


// GET, POST, PUT, PATCH, DELETE
// GET = buscar
// POST = cadastrar infos
// PUT = Atualizar infos de uma entidade
// PATCH = Atualizar um info unica de uma entidade
// DELETE = Deletar uma informação



app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP server running!"')
});

//Sqlite
//Prisma