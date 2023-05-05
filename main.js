// Show/Hide form Login and Register

const modal = document.querySelector('.js-modal')
const modalBody = document.querySelector('.js-modal__body')

// Register
const registerBtns = document.querySelectorAll('.js-auth-form-btn-register')
const modalAuthFormRegister = document.querySelector('.js-auth-form-register')
const modalRegisterClose = document.querySelector('.js-modal-register-close')
const btnSwitchLogin = document.querySelector('.js-btn-switch-login')

//  Login
const loginBtns = document.querySelectorAll('.js-auth-form-btn-login')
const modalAuthFormLogin = document.querySelector('.js-auth-form-login')
const modalLoginClose = document.querySelector('.js-modal-login-close')
const btnSwitchRegister = document.querySelector('.js-btn-switch-register')

// Hàm hiển thị form đăng ký
function showAuthFormRegister() {
    modal.classList.add('open')
    modalAuthFormRegister.classList.add('open')
}

// Hàm ẩn form đăng ký
function hideAuthFormRegister() {
    modal.classList.remove('open')
    modalAuthFormRegister.classList.remove('open')
}
// Nghe hành vi bấm vào nút đăng ký
for(const registerBtn of registerBtns){
    registerBtn.addEventListener('click', showAuthFormRegister)
}

// Nghe hành vi khi bấm vào nút đăng nhập trong form đăng kí
btnSwitchLogin.addEventListener('click', hideAuthFormRegister)
btnSwitchLogin.addEventListener('click', showAuthFormLogin)

// Nghe hành vi bấm vào nút trở lại trong form đăng kí
modalRegisterClose.addEventListener('click', hideAuthFormRegister)

// Hàm hiển thị form đăng nhập
function showAuthFormLogin() {
    modal.classList.add('open')
    modalAuthFormLogin.classList.add('open')
}

// Hàm ẩn form đăng nhập
function hideAuthFormLogin() {
    modal.classList.remove('open')
    modalAuthFormLogin.classList.remove('open')
}

// Nghe hành vi bấm vào nút đăng nhập
for(const loginBtn of loginBtns){
    loginBtn.addEventListener('click', showAuthFormLogin)

}

// Nghe hành vi khi bấm vào nút đăng kí trong form đăng nhập
btnSwitchRegister.addEventListener('click', hideAuthFormLogin)
btnSwitchRegister.addEventListener('click', showAuthFormRegister)

// Nghe hành vi bấm vào nút trở lại trong form đăng nhập
modalLoginClose.addEventListener('click', hideAuthFormLogin)

// Nghe hành vi bấm vào modal
modal.addEventListener('click', hideAuthFormRegister)
modal.addEventListener('click', hideAuthFormLogin)

// Ngăn chặn hành vi nổi bọt
modalBody.addEventListener('click', function (event) {
    event.stopPropagation()
})


// Slider 
window.addEventListener("load", function(){
    const sliderMain = document.querySelector(".slider-main");
    const sliderItems = document.querySelectorAll(".slider-item");
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");
    const dotItems = document.querySelectorAll(".slider-dot-item");
    const sliderItemWidth =  sliderItems[0].offsetWidth;
    const slidesLength= sliderItems.length;
    let positionX = 0;
    let index = 0;
    nextBtn.addEventListener("click", function(){
        handleChangeSlide(1)
    });
    prevBtn.addEventListener("click",function(){
        handleChangeSlide(-1)
    });

    [...dotItems].forEach((item) => 
    item.addEventListener("click", function (e){       
        [...dotItems].forEach((el) => el.classList.remove("active"));
        e.target.classList.add("active");
        const slideIndex = parseInt(e.target.dataset.index);
        index = slideIndex;
        positionX = -1 * index * sliderItemWidth;
        sliderMain.style = `transform: translateX(${positionX}px)`;
    })
    );
    
    function handleChangeSlide(direction) 
    {
        if(direction == 1) {
            if(index >= slidesLength - 1){
                index = slidesLength - 1;
                return;
            }
            positionX = positionX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index++;
        }
        else if(direction == -1) {
            if(index <= 0){
                index = 0;
                return;
            }
            positionX = positionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`
            index--;
        }
        [...dotItems].forEach((el) => el.classList.remove("active"));
        dotItems[index].classList.add("active");
    }
});
