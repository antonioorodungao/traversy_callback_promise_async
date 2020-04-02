const posts = [
  {
    title: "Post One",
    body: "This is a post one"
  },
  {
    title: "Post Two",
    body: "This is a post two"
  }
];

function getPosts() {
  setTimeout(() => {
    console.log("Inside getPost function");
    let output = "";
    posts.forEach(x => {
      // output += "<li>" + x.title + ":" + x.body + "</li>";
      output += `<li>${x.title} : ${x.body}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    console.log("Inside createPost function");
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: "Post Three", body: "This is post three" }, () =>
  getPosts()
); //callback function is passed.
