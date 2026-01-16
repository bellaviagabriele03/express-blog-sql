import express from "express" 
import connection from "./connections/db-connection.js";
import blogrouter from "./routers/blogRouter.js";
const app = express();
const port = 3000; 
app.use(express.json());

app.use("/posts", blogrouter)






app.listen(port, () => {
    console.log(`Server listen on port: ${port}`);
    
})