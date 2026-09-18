// Finish account

const imageInput = document.getElementById("imageIn");
const preview = document.querySelector('.profilePic');
const userName = document.querySelector('.userin');





imageInput.addEventListener('change', ()=>{
    const file = imageInput.files[0];
    
    if (file){
        const imageSrc = URL.createObjectURL(file);
        preview.src = imageSrc;
    
    }
    
    
})



