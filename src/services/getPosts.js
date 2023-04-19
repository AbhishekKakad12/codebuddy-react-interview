export default function GetPosts() {
  try {
    const postsOptions = {
      method: 'GET',
    };
    return fetch(`${process.env.REACT_APP_API_URL}/posts`, postsOptions)
      .then(res => res.json())
      .then(res => res)
      .catch(e => {
        console.log(e);
      });
  } catch (error) {
    // console.error("Error found @addCatalogService");
    console.error(error.message);
  }
}
