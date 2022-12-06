function submitData(name, email){
   const userData = {
        name: name,
        email:email
    };
    // console.log(userData);
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(userData),
    })
    .then(res => res.json())
    .then(data => {
        const pTag = document.createElement("p");
        pTag.textContent = data.id;
        document.querySelector("body").appendChild(pTag);
    })
    .catch(error => {
        const pTag = document.createElement("p");
        pTag.textContent = error.message;
        document.querySelector("body").appendChild(pTag);
    })
}

submitData("mkamba", "mkamba@gmail.com")