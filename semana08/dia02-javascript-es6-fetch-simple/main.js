const renderPosts = (posts) => {
  // const appDiv = document.querySelector('#app')
  const appDiv = document.getElementById('app')

  let postList = ''

  posts.forEach(post => {
    postList += `
      <div>  
        <h2>${post.id}: ${post.title}</h2>
        <p>${post.body}</p>
      </div>
    `
  });

  appDiv.innerHTML = postList
}

const fetchPosts = async () => {
  try {
    console.log('llamando al api...')

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!response.ok) {
      // Response ok tendrá un valor de true con respuestas como 200, 201, 2XX
      throw new Error('ERROR HTTP:', response.status)
    }

    const json = await response.json()

    renderPosts(json)
  } catch (error) {
    console.log(error)
  }
}

// const fetchPosts = () => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json => {
//       renderPosts(json)
//     })
//     .catch(err => console.log(err))
// }

fetchPosts()