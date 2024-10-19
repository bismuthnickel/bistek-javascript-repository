bjrPackages.forEach(element => {
    fetch("https://cdn.jsdelivr.net/gh/bistek-studios/bistek-javascript-repository/packages.json")
    .then(response => response.json())
    .then(jsonResponse => {
        const packageScriptTag=document.createElement("script");
        if(jsonResponse[element][1]==1){
            packageScriptTag.src=jsonResponse[element][0];
        }else{
            packageScriptTag.innerText=jsonResponse[element][0];
        };
        document.body.append(packageScriptTag);
    }); 
});
