async function getuser(){
  let users=[];
  try{
const data= await fetch("https://anime-facts-rest-api.herokuapp.com/api/v1",{
  metod:"GET",
  header:{
    "Content-Type":"application/json"
  },
});
users= await data.json()
console.log(users);
  }catch(err){
console.log(err)
  }
  console.log(users)
  return users;
}
//getuser();

async function displayuser() {
   let users =await getuser();
   console.log(users)
   const userlist = document.querySelector(".user-list")
   userlist.innerHTML = "";
   users.data.forEach((user) => {
     console.log(user.anime_name);
     userlist.innerHTML+= `
     <div class="user-container">
     <img class="user-avatar" src="${user.anime_img}" alt="img">
     <div>
     <h3 class = "user-id">${user.anime_id}</h3>
     </div>
     <div> 
     <h4 class = "user-name">${user.anime_name}</h4>
     </div>
     
   
     </div>`;
   });
  }

displayuser();
