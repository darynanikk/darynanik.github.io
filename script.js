"use strict"

const downloadBtn = document.querySelector(".button-50")

downloadBtn?.addEventListener("click", function() {
    console.log("It works!")

    fetch('https://randomuser.me/api')
    .then((response) => {
            return response.json();
    }).catch((err) => console.log(err))
    .then((data) => {
        const { results } =  data
        const userObject = results[0]
        const profileImage = document.querySelector(".profile-image");
        const userInfo = document.querySelector(".user-info");
        const successMessage = document.querySelector(".success-message");

        profileImage.innerHTML = "";
        userInfo.innerHTML = "";
        successMessage.innerHTML = "";


        profileImage.innerHTML +=`<img src="${userObject.picture.large}" alt="Random user">`;
        
        userInfo.innerHTML +=
        `<ul>
            <li>Cell: ${userObject.cell}</li>
            <li>City: ${userObject.location.city}</li>
            <li>Country: ${userObject.location.country}</li>
            <li>Postcode: ${userObject.location.postcode}</li>
        </ul>`;

        successMessage.innerHTML += "Success!"

    });
})