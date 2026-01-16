import connection from "../connections/db-connection.js";





//index
function index(req, res) {
    const query = `
    SELECT *
    FROM POSTS
    `;
    connection.query(query, (err, result) => {
        if (err) {
            res.json({
                message: "error yours database is hacked from Loris",
                err: err,

            }).status(500);
        }

        if (result.length === 0) {
            res.json({
                message: "the data of blog_db dosn't exist, ask to Loris :("
            }).status(404) // 404 ?? controllare il codice di errore per questa situazione....
        } else {
            res.json({
                count: `num of data: ${result.length}`,
                result: result
            })
        }

    })
}

//show
function show(req, res) {
    const id = req.params.id;
    const query = "SELECT * FROM posts WHERE id = ?";
    connection.query(query, [id], (err, result) => {
        if (err) {
            res.json({
                message: "error yours database is hacked from Loris",
                err: err,

            }).status(500);
        }
        if (result.length === 0) {
            res.json({
                err: 404,
                message: "post not found ask to Loris ;)",
            });
        } else {
            res.json({
                result: result[0],
            })
        }


    })
}

//store 
function store(req, res) {

}

//update
function update(req, res) {

}

//modify
function modify(req, res) {

}

//destroy 
function destroy(req, res) {

}


const controller = {
    index,
    show,
    store,
    update,
    modify,
    destroy,
};

export default controller