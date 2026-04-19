require('datejs')


let users =["Jim3","Pam5","Dwight77"];
let users2=["Michael6","Eleanor22","Chidi202"];
let users3=["Jack_jack","Julia_Oreo", "Bill_bore"];

const combineUsers = ()=>{
      const username = {
        users4: [users,users2,users3]}
      console.log(username)

      const combineobj = {
        merge_date : Date.today().toString("M/d/yyyy")
        
      };
      console.log(combineobj.merge_date)
}


combineUsers();







module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })

  
}

