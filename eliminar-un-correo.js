const users = [{"email": "Daniel@gmail.com", "name": "Daniel"},
 {"email": "luis@academlo.com", "name": "Luis"},
  {"email": "maria@gmail.com", "name": "María"}];
const email = "Daniel@gmail.com";

let removed;
for(let i = 0; i < users.length; i++){
  if(email === users[i].email){
    users.splice(i,1)
    removed = true;
  }else {
    removed = false
  }
  
}



console.log(users)
