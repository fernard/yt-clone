import express from 'express';

export abstract class Controller {
    protected abstract path: string;
    public router = express.Router();
   
    protected abstract intializeRoutes(): void;

  }