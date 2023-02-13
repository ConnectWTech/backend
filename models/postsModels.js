const {pool} = require('../db.js');

class Post{
    static postToDB(title, hashtag, technologys, bio, photo, likes, url, userid){
        return pool.query(
            'INSERT INTO posts(title, hashtag, technologys, bio, photo, likes, url, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',[title, hashtag, technologys, bio, photo, likes, url, userid]);
        }
    static updatePost(title, hashtag, technologys, bio, photo, url, id){
        return pool.query('UPDATE posts SET title = $1, hashtag = $2, technologys = $3, bio = $4, photo = $5, url =$6 WHERE id = $7 RETURNING *', [title, hashtag, technologys, bio, photo, url, id])
    }
    static deletePost(id){
        return pool.query('DELETE FROM posts WHERE id = $1',[id])
    }
    static updateLikes(addOrSubtract,id){
        return pool.query('UPDATE posts SET likes = (likes + $1) WHERE id = $2',[addOrSubtract,id])
    }
    static allPost(){
        return pool.query("SELECT * FROM posts");
    }
    static getAllPostFromUser(userid){
        return pool.query('SELECT * FROM posts WHERE userid = $1', [userid])
    }


}

module.exports = Post;
