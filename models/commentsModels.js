const {pool} = require('../db.js');

class Comments{
    static commentOnPost(text,likes,userid,postid){
        return pool.query(
            'INSERT INTO comments(text,likes,userid,postid) VALUES($1, $2, $3, $4) RETURNING *',[text,likes,userid,postid]);
        }
    static deleteComment(id){
        return pool.query('DELETE FROM comments WHERE commentid = $1',[id])
    }
    static updateLikes(addOrSubtract,id){
        return pool.query('UPDATE comments SET likes = (likes + $1) WHERE commentid = $2',[addOrSubtract,id])
    }
    static getAllByID(id){
        return pool.query('SELECT * FROM comments INNER JOIN users ON users.userid=comments.userid WHERE postid = $1 ORDER BY created_at DESC ', [id])
    }
    
}

module.exports = Comments;
