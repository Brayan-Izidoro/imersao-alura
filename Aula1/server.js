import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"))

routes(app);

app.listen(3001, () => {
    console.log("Servidor escutando...");
});

// function buscarPosts(id) {
//   return posts.findIndex((post) => {
//     return post.id === Number(id)
//   })
// }

// app.get("/posts/:id", (req, res) => {
// const index = buscarPosts(req.params.id)
//   res.status(200).json(posts[index]);
// });