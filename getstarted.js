// Finish account

const name = localStorage.getItem("name");
const email = localStorage.getItem("email");
const imageInput = document.getElementById("imageIn");
const preview = document.querySelector('.profilePic');
const userName = document.querySelector('.userin');

alert(name);
userName.textContent = name + "!";


imageInput.addEventListener('change', ()=>{
    const file = imageInput.files[0];
    
    if (file){
        const imageSrc = URL.createObjectURL(file);
        preview.src = imageSrc;
    
    }
    
    
})



