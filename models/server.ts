import express, { Application } from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';
import db from '../db/cn'

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.dbConnection();
        this.middlewares();
        //
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Db is online');
        } catch (error: any) {
            throw new Error(error);
        }
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        //READ BODY
        this.app.use(express.json());
        //PUBLIC FOLDER
        this.app.use(express.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port)
        })
    }

}

export default Server;