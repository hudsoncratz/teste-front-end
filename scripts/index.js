function getRequest() {
    
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    

        /* ------ Email and password valid -----
            {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        
        ----------------------------------------*/

        // post with axios
        axios.post('https://reqres.in/api/login', {
            email: email, 
            password: password
        })
        .then( response => {
          sessionStorage.setItem('token', Object.values(response['data']));
        }).
        then( () => window.location.href = "lista-usuarios.html").
        catch(error => {
            alert("O E-mail ou a Senha que você inseriu não está conectado a uma conta")
            console.log(error)
        })
}
