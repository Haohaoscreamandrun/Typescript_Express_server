import express, {Express, Request, Response} from "express";
import { ApiRouter } from "./routes/api-routes";
import { NextFunction } from "connect";

// use express as a framework
const app: Express = express(); //app: Express tells TypeScript that the variable app should have the type Express
const port = 5000
const apiRouter = new ApiRouter;


// Use

app.use((request: Request, response: Response, next: NextFunction) => {
  response.type('text/plain')
  response.status(404)
  response.send('Page is not found!')
})

// listen
app.listen(port, ()=>{
  console.log(`server is running on http://localhost:${port}`)
})