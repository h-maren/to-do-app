import { allProjects } from ".";

let storeProjects = (function (){
    let projectsString=JSON.stringify(allProjects);
    localStorage.setItem ('allProjects',projectsString);
});

let retrieveProjects = (function (){
    let retrievalString=localStorage.getItem('allProjects');
    console.log(retrievalString);
    if (retrievalString!==undefined){
        let retrievalProjects=JSON.parse(retrievalString);
        console.log(retrievalProjects);
        return retrievalProjects;
    };
    return undefined;
});

export {storeProjects, retrieveProjects};