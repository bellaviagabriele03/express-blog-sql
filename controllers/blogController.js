import connection from "../connections/db-connection.js";





//index
function index(req, res) {
    const query = `
    SELECT *
    FROM POSTS
    `;
    connection.query(query, (err, result) => {
        if (err) {
            res.status(500);
            res.json({
                message: "error yours database is hacked from Loris, internal problem ? else ask to Samuel !!!!",
                err: err,

            })
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
            res.status(500);
            res.json({
                message: "error yours database is hacked from Loris, internal problem ? else ask to Samuel !!!!!",
                err: err,

            })
        }
        if (result.length === 0) {
            res.status(404)
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

    //lo so che dovrei fare due interrogazioni diverse dove in una controllo se il post da eliminare esiste 
    // e nell'altra vado effettivamente ad eliminarla... ma Loris non vuole che lo faccio :( 

    const id = req.params.id;
    const query = "DELETE FROM posts WHERE id = ?";
    connection.query(query, [id], (err, result) => {
        if (err) {
            res.status(500);
            res.json({
                message: "error yours database is hacked from Loris, internal problem ? else ask to Samuel !!!!!",
                err: err,

            })
        }
        if (result.length === 0) {
            res.status(404)
            res.json({
                err: 404,
                message: "you can't delete an post that dosn't exist, always ask to Loris or for this time and ONLY for this time ask to Samuel, enjoy my man ;) ;)"
            })
        } else {
            res.status(204)
            res.send({
                status: "ok you found it",
                message: "i delete your post but for the next time ask to Loris for delete every post, (in a few words don't disturb me...) "
            });
        }
    })
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