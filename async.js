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

function createPost(post) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Inside createPost function");
      posts.push(post);
      const error = true;
      if (!error) {
        resolve();
      } else {
        reject(() => console.log("passing function"));
      }
    }, 2000);
  });
  return promise;
}
//await is only used for promise. To handle reject, await should be enclosed in try catch.
async function init() {
  try {
    await createPost({
      title: "Post Three",
      body: "This is post three"
    });
  } catch (error) {
    console.log(error());
  }
  getPosts();
}

init();
