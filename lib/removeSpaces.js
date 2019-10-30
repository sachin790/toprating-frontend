export default function RemoveSpacesAddHyphen(string) {
  //Removes spaces
  const newString = string.replace(/\s+/g, "-");
  return newString;
}

export function AddSpacesRemoveHyphen(string) {
  const oldString = string.replace(/-/g, " ");
  return oldString;
}
