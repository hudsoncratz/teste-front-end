async function getUsers() {
    try{
        const response = await fetch("http://localhost:3333/")
        const data = await response.json()
        
        show(data)
        footer(data)
    } catch(error){
        console.error(error)
    }   
}

getUsers()

function show(users) {
    let output = ''
    
    for(let user of users.data){  
            output += `
            <div class="user-grid" id="user-grid-${user.id}">
                <div id="user-${user.id}" name="user-content" class="user-content">
                    <div class="edit-component">
                        <img src="../assets/images/icon-edit.svg" alt="edit">
                    </div>
                    <img src="${user.avatar}" alt="">
                    <h2>${user.first_name} ${user.last_name}</h2>
                    <h3>${user.email}</h3>
                </div>
            </div>
            `
    }
    output += `</div>`

    document.querySelector("div[name=users-list]").innerHTML = output
}


function footer(pages) {
    let output = ''
    output += `<p>Mostrando ${pages.per_page} de ${pages.total}</p>`

    document.querySelector("footer").innerHTML = output
}

