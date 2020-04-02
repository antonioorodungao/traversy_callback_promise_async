c;

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

function handleReject() {
  console.log("rejected is called");
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

createPost({ title: "Post Three", body: "Inside Post three" }).then(
  getPosts,
  handleReject
);

//Handling multiple promises
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Goodbye");
});
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res =>
  res.json()
);
Promise.all([promise1, promise2, promise3, promise4]).then(x => console.log(x));
