const barBtn = document.getElementById('bars')

const proBtn = document.querySelector('#proBtn')
const comBtn = document.querySelector('#comBtn')
const conBtn = document.querySelector('#conBtn')

const proBtnEl = document.querySelector('#proBtnEl')
const comBtnEl = document.querySelector('#comBtnEl')
const conBtnEl = document.querySelector('#conBtnEl')

const productEl = document.querySelector('.pro')
const companyEl = document.querySelector('.com')
const contactEl = document.querySelector('.con')

const medProEl = document.querySelector('.med-pro')
const medComEl = document.querySelector('.med-com')
const medConEl = document.querySelector('.med-con')

const proImgEl = document.querySelector('.proImg')
const comImgEl = document.querySelector('.comImg')
const conImgEl = document.querySelector('.conImg')

const medProImgEl = document.querySelector('.medProImg')
const medComImgEl = document.querySelector('.medComImg')
const medConImgEl = document.querySelector('.medConImg')


// for desktop

barBtn.addEventListener('click', ()=>{
    const barCon = document.querySelector('.bar-container')
    barCon.classList.toggle('hidden1')
})

proBtn.addEventListener('click', ()=>{
    
    productEl.classList.toggle('hidden')
    companyEl.classList.add('hidden')
    contactEl.classList.add('hidden')
    proImgEl.classList.toggle('imgAnim')
    conImgEl.classList.remove('imgAnim')
    comImgEl.classList.remove('imgAnim')

})
comBtn.addEventListener('click', ()=>{
    
    companyEl.classList.toggle('hidden')
    productEl.classList.add('hidden')
    contactEl.classList.add('hidden')
    comImgEl.classList.toggle('imgAnim')
    proImgEl.classList.remove('imgAnim')
    conImgEl.classList.remove('imgAnim')
})
conBtn.addEventListener('click', ()=>{
    
    contactEl.classList.toggle('hidden')
    companyEl.classList.add('hidden')
    productEl.classList.add('hidden')
    conImgEl.classList.toggle('imgAnim')
    proImgEl.classList.remove('imgAnim')
    comImgEl.classList.remove('imgAnim')
})

// For mobile 

proBtnEl.addEventListener('click', ()=>{
    
    medProEl.classList.toggle('hidden1')
    medComEl.classList.add('hidden1')
    medConEl.classList.add('hidden1')
    medProImgEl.classList.toggle('imgAnim')
    medConImgEl.classList.remove('imgAnim')
    medComImgEl.classList.remove('imgAnim')

})
comBtnEl.addEventListener('click', ()=>{
    
    medComEl.classList.toggle('hidden1')
    medProEl.classList.add('hidden1')
    medConEl.classList.add('hidden1')
    medComImgEl.classList.toggle('imgAnim')
    medProImgEl.classList.remove('imgAnim')
    medConImgEl.classList.remove('imgAnim')
})
conBtnEl.addEventListener('click', ()=>{
    
    medConEl.classList.toggle('hidden1')
    medProEl.classList.add('hidden1')
    medComEl.classList.add('hidden1')
    medConImgEl.classList.toggle('imgAnim')
    medProImgEl.classList.remove('imgAnim')
    medComImgEl.classList.remove('imgAnim')
})




