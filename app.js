
const { pool } = require('./db.js');
const userRoutes = require('./routes/userRoutes');
const postsRoutes = require('./routes/postsRoutes');
const profilesRoutes = require('./routes/profilesRoutes');
const commentRoutes = require('./routes/commentsRoutes');
const jobPostRoutes = require('./routes/job_postRoutes');
const applicationRoutes = require('./routes/job_appliedRoutes')
const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 1800;
app.use(cors());
app.use(express.json());

app.use('/users',userRoutes);
app.use('/posts',postsRoutes);
app.use('/profile',profilesRoutes);
app.use('/comments', commentRoutes);
app.use('/job_post',jobPostRoutes)
app.use('/apply', applicationRoutes)



app.all('*', (req, res) => {
res.send('Path does not exist')
});
app.listen(port, () => {
console.log(`http://localhost:${port}`);
});

