export function compareCurrentAndSavedbuild(idBuild, character, spells, stuff, buildAlreadySaved, buildName){
    let currentArray = `{"id":` + JSON.stringify(idBuild) + `,"character":{"title":"` + buildName + `","classes":` + JSON.stringify(character.classes) + `,"hero":` + JSON.stringify(character.hero) + `,"level":` + JSON.stringify(character.level) + `},"spells":` + JSON.stringify(spells) + `,"stuff":` + JSON.stringify(stuff) + "}";
    const savedArray = JSON.stringify(buildAlreadySaved);
    if(currentArray === savedArray){
        return true
    }else{
        return false
    }  
}
