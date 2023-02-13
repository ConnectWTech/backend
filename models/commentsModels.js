const {pool} = require('../db.js');

class Comments{
    static commentOnPost(text,likes,userid,postid){
        return pool.query(
            'INSERT INTO comments(text,likes,userid,postid) VALUES($1, $2, $3, $4) RETURNING *',[text,likes,userid,postid]);
        }
    static deleteComment(id){
        return pool.query('DELETE FROM comments WHERE id = $1',[id])
    }
    static updateLikes(addOrSubtract,id){
        return pool.query('UPDATE comments SET likes = (likes + $1) WHERE id = $2',[addOrSubtract,id])
    }
    static getAllByID(userid){
        return pool.query('SELECT * FROM comments WHERE postid = $1', [userid])
    }
    
}

module.exports = Comments;
