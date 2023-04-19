export default function SubmitInfo(info) {
  try {
    const infoOptions = {
      method: 'POST',
      body: JSON.stringify(info),
    };
    return fetch(`${process.env.REACT_APP_API_URL}/submit`, infoOptions)
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
