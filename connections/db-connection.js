import mysql from "mysql2"

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "blog_db",
});

connection.connect((err) => {
    if(err) {
        console.log("error. i can't connect your database, ask to Loris <3 ");
        
    }
    console.log("Success your databese is hacked ;) ");
    
})

export default connection;