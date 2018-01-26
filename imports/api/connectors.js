import Sequelize from 'sequelize';

// create the connection
const db = new Sequelize('website', 'postgres', 'postgres', {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432
})

// define the model
const PostModel = db.define('post', {
    content: { type: Sequelize.STRING },
    views: {type: Sequelize.INTEGER}
}, {
    timestamps: false
});

// create the table if it doesn't exist yet
db.sync();

// export Post
const Post = db.models.post;
export { Post };
