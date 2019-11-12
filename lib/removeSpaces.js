
 var cyrillicToTranslitJs = require("cyrillic-to-translit-js")

export default function RemoveSpacesAddHyphen(string) {
  //Removes spaces

  const newString = string.replace(/\s+/g, "-");
  // console.log("+++++++++++++++++++");
  // console.log(cyrillicToTranslitJs().transform("что такое хорошая еда"));
  // console.log(cyrillicToTranslitJs().transform("What are the good languages"));
  // console.log("+++++++++++++++++++");
  return  newString ;
  
}

export function AddSpacesRemoveHyphen(string) {
  const oldString = string.replace(/-/g, " "); 
  return oldString ; 
}


// var cyrillicToTranslitJs = require("cyrillic-to-translit-js")
// export default function RemoveSpacesAddHyphen(string) {
//   //Removes spaces
//   const newString = string.replace(/\s+/g, "-");
//  // console.log(cyrillicToTranslitJs().transform(newString));
//   return  cyrillicToTranslitJs().reverse(newString);
  
// }

// export function AddSpacesRemoveHyphen(string) {
//   const oldString = cyrillicToTranslitJs().transform(string);
//  // console.log(oldString.replace(/-/g, " "));
//   return oldString.replace(/-/g, " "); 
   
// }








