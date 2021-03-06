import express from 'express';
import * as bodyParser from 'body-parser';
import { Controller } from './rest/types/Controller';
import { errorMiddleware } from './middleware/errorMiddleware';
 
export class App {
  public app: express.Application;
  public port: number;
 
  constructor(controllers: Controller[], port: number) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }
 
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(errorMiddleware)
  }
 
  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
