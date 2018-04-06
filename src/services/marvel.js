import request from 'superagent';
import md5 from 'md5'

const baseUrl = 'http://gateway.marvel.com/v1/public/';

function generateCredentials(){
  let publicKey = process.env.MARVEL_PUBLIC_KEY;
  let privateKey = process.env.MARVEL_PRIVATE_KEY;
  let timestamp = +new Date(); // same new Date().getTime()
  let hash = md5(`${timestamp}${privateKey}${publicKey}`);
  console.log(publicKey);
  console.log(privateKey);
  return `?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
}

export function getCharacters(name = ""){
  console.log("name="+name);
  console.log("baseUrl="+baseUrl);
  let search = "";
  if(name){
    search = `&nameStartsWith=${name}`;
  }
  

  console.log(name);
  
  console.log(`${baseUrl}characters${generateCredentials()}${search}`);
    return request.get(`${baseUrl}characters${generateCredentials()}${search}`)
}
