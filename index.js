

require("datejs");

function combineUsers(...args) {
  const combinedObject = {
    users: [],
  };
  
  for (const arg of args) {
    if (Array.isArray(arg)) {
      
      combinedObject.users.push(...arg);
    }
  };
  
  const merge_date = "merge_date";
  combinedObject[merge_date] = "10/7/2026"; 
  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })

};








