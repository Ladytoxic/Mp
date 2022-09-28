import Express from "express";
import morgan from "morgan";
import router from "./routes/index.js";


const app = Express();
app.use(morgan('dev'));
app.use(router);
app.listen(3000);
app.set('port', process.env.PORT || 3000);

console.log('server on port', 3000)