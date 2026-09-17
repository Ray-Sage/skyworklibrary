// Finish account

const userin = document.querySelector("userin");
const name = localStorage.getItem("name");
const email = localStorage.getItem("email");
const imageInput = document.getElementById("imageIn");
const preview = document.querySelector('.profilePic');
    


imageInput.addEventListener('change', ()=>{
    const file = imageInput.files[0];
    
    if (file){
        const imageSrc = URL.createObjectURL(file);
        preview.src = imageSrc;
    
    }
    
    
})



