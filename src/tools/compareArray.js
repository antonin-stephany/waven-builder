export function compareCurrentAndSavedbuild(idBuild, character, spells, stuff, buildAlreadySaved){
    const currentArray = `{"id":` + JSON.stringify(idBuild) + `,"character":` + JSON.stringify(character) + `,"spells":` + JSON.stringify(spells) + `,"stuff":` + JSON.stringify(stuff) + "}";
    const savedArray = JSON.stringify(buildAlreadySaved);
    if(currentArray === savedArray){
        return true
    }else{
        return false
    }  
}