function header() {
    let output = `
    <div class="header-content"> 
        <img src="../assets/images/logo-uppersoft.svg" alt="uppersoft">
    </div>
    `
    document.querySelector("header").innerHTML = output
}

header();