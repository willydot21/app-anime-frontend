
const getAnimeLatest = async (article:string) => {

  const url = `https://tioanime-api-v1.herokuapp.com/api/latest/${article}`

  const req = await fetch(url);

  const res = await req.json();

  console.log(res);

  return res;

}

export {
  getAnimeLatest
};