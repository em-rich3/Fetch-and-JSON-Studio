// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json()
        .then(function(response) {
            console.table(response)
            const container = document.getElementById("container");
            response.sort(function(obj1, obj2) {
                return obj2.hoursInSpace - obj1.hoursInSpace;
            });
            container.innerHTML = astronautParser(response);
            let astronautCounter = response.length;
            document.getElementById("astronautCounter").innerHTML = "Count: " + astronautCounter;
        });
    });
});

function astronautParser(astronauts) {
    let astronautHTML = '';
    for(astronaut of astronauts) {
        astronautHTML += `<div class="astronaut">
        <div class="bio">
           <h3>${astronaut.firstName}${astronaut.lastName}</h3>
           <ul>
              <li>Hours in space: ${astronaut.hoursInSpace}</li>
              <li class=${astronaut.active ? "isActive" : "notActive"}>Active: ${astronaut.active}</li>
              <li>Skills: ${astronaut.skills.join(', ')}</li>
           </ul>
        </div>
        <img class="avatar" src=${astronaut.picture}>
     </div>`

    }
    return astronautHTML;
}

