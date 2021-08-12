
type strorNum=string|number;

type objectw={name:string,uid:strorNum}


const firstfunc=(uid:strorNum,name:string)=>{
  console.log(`uid is ${uid}`);

}

let user=(user:objectw)=>{
  console.log(`name of user id ${user.name}`);
}