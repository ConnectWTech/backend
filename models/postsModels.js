const {pool} = require('../db.js');

class Post{
    static postToDB(title, hashtag, technologys, bio, photo, likes, url, userid){
        return pool.query(
            'INSERT INTO posts(title, hashtag, technologys, bio, photo, likes, url, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',[title, hashtag, technologys, bio, photo, likes, url, userid]);
        }
    static updatePost(title, hashtag, technologys, bio, photo, url, id){
        return pool.query('UPDATE posts SET title = $1, hashtag = $2, technologys = $3, bio = $4, photo = $5, url =$6 WHERE postid = $7 RETURNING *', [title, hashtag, technologys, bio, photo, url, id])
    }
    static deletePost(id){
        return pool.query('DELETE FROM posts WHERE postid = $1',[id])
    }
    static updateLikes(addOrSubtract,id){
        return pool.query('UPDATE posts SET likes = (likes + $1) WHERE postid = $2 RETURNING *',[addOrSubtract,id])
    }
    static allPost(){
        return pool.query("SELECT * FROM posts INNER JOIN users ON users.userid=posts.userid ORDER BY created_at DESC ;");
    }
    static getAllPostFromUser(userid){
        return pool.query('SELECT * FROM posts WHERE userid = $1', [userid])
    }
    static getAllPostById(id){
        return pool.query('SELECT * FROM posts INNER JOIN users ON users.userid=posts.userid WHERE posts.postid = $1', [id])
    }

}

module.exports = Post;
