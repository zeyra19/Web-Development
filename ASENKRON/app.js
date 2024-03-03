let users= [
    {
        userId: 7,
        post: "cart curt 1"
    },
    {
        userId: 7,
        post: "cart curt 2"
    },
    {
        userId: 19,
        post: "cart curt 1"
    },
    {
        userId: 1907,
        post: "cart curt 1"
    },
]

let userId= getUserId();
getPostByUserId(userId);

function getUserId(callback){
    setTimeout(() => {
        return 19;
    }, 1000);
}

function getPostByUserId(userId) {
    setTimeout(() => {
        users.forEach((user)=>{
            if(user.userId===userId){
                console.log(user.post);
            }
        })
    }, 500);
}


function getName(){
    setTimeout(() => {
        return "zeyra";
    }, 1000);
}


function getSurname(){
    setTimeout(() => {
        return "bilge cart curt";
    }, 1000);
}

function anan(){
    getName()
    getSurname()
}

anan()


async function getName(){
    for (i=0; i<10000; i++){
      if(i % 1000 == 0){
        console.log(i)
      }
    } console.log("adını yazdım")
    return "zeyra";
  }
  
  async function getSurname(){
    console.log("soyadını yazdım")
    return "cartcurt";
  }
  
  async function anan() {
    let name= getName()
    let surname= getSurname()
   console.log(name, surname)
  }
  anan()
  
//PROMİSE--------------------------------------------------------------------------------------------------------------------
new Promise((resolve, reject) => {
    // Asenkron işlemler burada gerçekleştirilir
    // resolve: Asenkron işlem başarılı bir şekilde tamamlandığında bu fonksiyon çağrılır.
    // reject: Asenkron işlem başarısız olduğunda bu fonksiyon çağrılır. 
  });

//ASYNC AWAİT----------------------------------------------------------------------------------------------------------------

async function fetchData() {
    return new Promise(resolve => {
      setTimeout(() => resolve("Veri geldi!"), 2000);
    });
  }
  
async function main() {
    console.log("Veri alınıyor...");
    let data = await fetchData();
    console.log(data); 
  }
  
main();
  
  