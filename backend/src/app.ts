import express, { Express } from 'express';
import { MessengerServer } from './setupServer';

class Application {
   public initialize(): void {
    const app: Express = express();
    const server: MessengerServer = new MessengerServer(app);
    server.start();
}
}

const application: Application = new Application();
application.initialize();
