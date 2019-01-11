import ApolloBoost, { gql } from 'apollo-boost';

const client = new ApolloBoost({
  uri: 'http://localhost:4000',
});

const getPosts = gql`
  query {
    posts {
      title
      author {
        name
      }
    }
  }
`;

client
  .query({
    query: getPosts,
  })
  .then((response) => {
    console.log(response.data);
    let template = '';

    response.data.posts.map((post) => {
      template += `
        <h3>${post.title}</h3>
       <h4>${post.author.name}</h4>
      `;
      return null;
    });

    document.getElementById('posts').innerHTML = template;
  })
  .catch((error) => {
    console.log(error.message);
  });
