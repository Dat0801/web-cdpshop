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
// Nghe hành vi khi nhấn Esc
document.onkeyup = function(e) {
    if(e.which == 27) {
        hideAuthFormRegister();
        hideAuthFormLogin();
    }
}

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

// Pagin 
const product = [
    {id: 1, image: "https://down-vn.img.susercontent.com/file/122481e970acfb1de2bfbd8cbd402831_tn", title: "Sách Nhã Nam - Cây Cam Ngọt Của Tôi", oldPrice: "108.000đ", currentPrice: "84.240đ", itemSold: "Đã bán 2,8k", saleOff: "22%"},
    {id: 2, image: "https://down-vn.img.susercontent.com/file/sg-11134201-22110-7jwnmgx1iejvd5_tn", title: "Sách - Thuật Thao Túng: Góc Tối Ẩn Sau Mỗi Câu Nói", oldPrice: "139.000đ", currentPrice: "98.690đ", itemSold: "Đã bán 2,6k", saleOff: "29%"},
    {id: 3, image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfj4ve7pfotx8b_tn", title: "Sách - Hãy Khiến Tương Lai Biết Ơn Vì Hiện Tại Bạn Đã Cố Gắng Hết Mình", oldPrice: "99.000đ", currentPrice: "69.000đ", itemSold: "Đã bán 7,6k", saleOff: "30%"},
    {id: 4, image: "https://down-vn.img.susercontent.com/file/ae1e10362eb70983f538a4809ae20546_tn", title: "Sách - Tâm Lý Học Tội Pham – Phác Họa Chân Dung Kẻ Phạm Tội", oldPrice: "145.000đ", currentPrice: "106.000đ", itemSold: "Đã bán 22,5k", saleOff: "27%"},
    {id: 5, image: "https://down-vn.img.susercontent.com/file/sg-11134201-22110-czim0phz5hkv83_tn", title: "Sách - Ghi Chép Pháp Y - Những Cái Chết Bí Ẩn", oldPrice: "150.000đ", currentPrice: "112.500đ", itemSold: "Đã bán 3,4k", saleOff: "25%"},
    {id: 6, image: "https://down-vn.img.susercontent.com/file/f992d65e77f79b8e1f652f248f0aa004_tn", title: "Sách Nhã Nam - Tuổi Trẻ Đáng Giá Bao Nhiêu (Tái Bản 2021)", oldPrice: "90.000đ", currentPrice: "70.200đ", itemSold: "Đã bán 2,7k", saleOff: "22%"},
    {id: 7, image: "https://down-vn.img.susercontent.com/file/e68216612c113e4adfceab6d42241975_tn", title: "Sách Nhã Nam - Nhà Giả Kim (Tái Bản)", oldPrice: "70.000đ", currentPrice: "61.620đ", itemSold: "Đã bán 3,5k", saleOff: "22%"},
    {id: 8, image: "https://down-vn.img.susercontent.com/file/df041a7981d17a488b5f47713ddd3b1c_tn", title: "Sách - Sức Mạnh Của Ngôn Từ", oldPrice: "96.000đ", currentPrice: "71.040đ", itemSold: "Đã bán 7,3k", saleOff: "26%"},
    {id: 9, image: "https://down-vn.img.susercontent.com/file/08c6b26ad02f3c5e9c649bf5904d3bc6_tn", title: "Sách - Tôi Quyết Định Sống Cho Chính Tôi (Bản Không Sổ To Do List)", oldPrice: "88.000đ", currentPrice: "63.360đ", itemSold: "Đã bán 11,4k", saleOff: "28%"},
    {id: 10, image: "https://down-vn.img.susercontent.com/file/3c844930d1c48becc9feb5aae185c6b4_tn", title: "Sách - Đừng Lựa Chọn An Nhàn Khi Còn Trẻ (Tái Bản)", oldPrice: "99.000đ", currentPrice: "72.270đ", itemSold: "Đã bán 3,1k", saleOff: "27%"},
    {id: 11, image: "https://down-vn.img.susercontent.com/file/d04028c5ef1e0298e5b386e2b7272e01_tn", title: "Sách - Kỷ Luật Tự Giác", oldPrice: "84.000đ", currentPrice: "59.000đ", itemSold: "Đã bán 4,2k", saleOff: "30%"},
    {id: 12, image: "https://down-vn.img.susercontent.com/file/ff1e05e760c21df34e4f3538417fcf28_tn", title: "Sách - Thiên Tài Bên Trái, Kẻ Điên Bên Phải (Tái Bản)", oldPrice: "179.000đ", currentPrice: "125.300đ", itemSold: "Đã bán 14,1k", saleOff: "30%"},
    {id: 13, image: "https://down-vn.img.susercontent.com/file/fc608709cdc7609f01b9cdcf336c83e0_tn", title: "Sách - Càng Kỷ Luật, Càng Tự Do", oldPrice: "109.000đ", currentPrice: "81.750đ", itemSold: "Đã bán 2,3k", saleOff: "25%"},
    {id: 14, image: "https://down-vn.img.susercontent.com/file/c83ef8dc30086c85a2fdf6beae369a2c_tn", title: "Sách - Ổn Định Hay Tự Do", oldPrice: "129.000đ", currentPrice: "95.460đ", itemSold: "Đã bán 3,8k", saleOff: "26%"},
    {id: 15, image: "https://down-vn.img.susercontent.com/file/sg-11134201-22100-qjpl31gvmviv6b_tn", title: "Sách - Luật Tâm Thức – Giải Mã Ma Trận Vũ Trụ", oldPrice: "292.000đ", currentPrice: "233.600đ", itemSold: "Đã bán 2,4k", saleOff: "20%"},
    {id: 16, image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-li9lep9s3mc2cf", title: "Sách - Sách Hướng Dẫn Tarot Cơ Bản", oldPrice: "250.000đ", currentPrice: "212.000đ", itemSold: "Đã bán 2,5k", saleOff: "15%"},
    {id: 17, image: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-9balf0g4oqkv80", title: "Sách - Một Cuốn Sách Trầm Cảm", oldPrice: "106.000đ", currentPrice: "82.680đ", itemSold: "Đã bán 2,2k", saleOff: "22%"},
    {id: 18, image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfyszz3g1j3r8f_tn", title: "Sách - Vẻ Đẹp Của Sự Cô Đơn", oldPrice: "120.000đ", currentPrice: "97.000đ", itemSold: "Đã bán 82", saleOff: "19%"},
    {id: 19, image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-licf3ovjmebw27", title: "Sách - Ma Đạo Tổ Sư (Tập 1)", oldPrice: "159.000đ", currentPrice: "143.000đ", itemSold: "Đã bán 753", saleOff: "10%"},
    {id: 20, image: "https://down-vn.img.susercontent.com/file/9cd6ce89820b6a78f215de3189cee1fc", title: "Sách - Hồ Sơ Tâm Lý Học - Tâm Thần Hay Kẻ Điên", oldPrice: "189.000đ", currentPrice: "136.000đ", itemSold: "Đã bán 2,8k", saleOff: "28%"},
    {id: 21, image: "https://down-vn.img.susercontent.com/file/vn-11134201-23030-bvaf9uqvypov68_tn", title: "Sách - EDOGAWA RANPO Tuyển Tập", oldPrice: "139.000đ", currentPrice: "118.000đ", itemSold: "Đã bán 441", saleOff: "20%"},
    {id: 22, image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhqztglyb4hx21_tn", title: "Sách - BỘ BÀI Vị Thần Của Những Quyết Định", oldPrice: "119.00đ", currentPrice: "77.350đ", itemSold: "Đã bán 136", saleOff: "35%"},
    {id: 23, image: "https://down-vn.img.susercontent.com/file/4c399b39e3063ce1eca7cc33dba18c53_tn", title: "Sách - Tạm Biệt Tôi Của Nhiều Năm Về Trước", oldPrice: "95.000đ", currentPrice: "71.250đ", itemSold: "Đã bán 547", saleOff: "25%"},
    {id: 24, image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh5lolqyrlrnfa_tn", title: "Sách - Bước Vào Bóng Tối", oldPrice: "99.000đ", currentPrice: "79.200đ", itemSold: "Đã bán 650", saleOff: "20%"},
    {id: 25, image: "https://down-vn.img.susercontent.com/file/b5f0db1260323a055d4090a7f1c36829_tn", title: "Sách Nhã Nam - Thư Viện Nửa Đêm", oldPrice: "150.000đ", currentPrice: "117.000đ", itemSold: "Đã bán 41", saleOff: "22%"},
    {id: 26, image: "https://down-vn.img.susercontent.com/file/sg-11134201-22110-ixinrcopa9jv28", title: "Sách - Kỹ Năng Phát Triển Bản Thân", oldPrice: "99.000đ", currentPrice: "79.200đ", itemSold: "Đã bán 662", saleOff: "20%"},
    {id: 27, image: "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lewl9w677ql3b8", title: "Sách - Màn Đêm Ngoài Khung Cửa Sổ Tam Giác (Tập 1)", oldPrice: "75.000đ", currentPrice: "71.250đ", itemSold: "Đã bán 187", saleOff: "5%"},
    {id: 28, image: "https://down-vn.img.susercontent.com/file/03e722c87715b255e8a2f7e445ca58d1", title: "Sách - Tôi Không Thích Ồn Ào (Tái bản 2021)", oldPrice: "75.000đ", currentPrice: "56.250đ", itemSold: "Đã bán 835", saleOff: "25%"},
    {id: 29, image: "https://down-vn.img.susercontent.com/file/86a0672869a6bc32b23a6ad658e75aea", title: "Sách - Thư Ngày Giao Mùa", oldPrice: "126.000đ", currentPrice: "100.800đ", itemSold: "Đã bán 74", saleOff: "20%"},
    {id: 30, image: "https://down-vn.img.susercontent.com/file/sg-11134201-23020-b640va4kfbnv12", title: "Sách - 999 Lá Thư Gửi Cho Chính Mình - Những Lá Thư Ấn Tượng Nhất (Phiên Bản Song Ngữ Trung - Việt)", oldPrice: "99.000đ", currentPrice: "75.000đ", itemSold: "Đã bán 1,5k", saleOff: "24%"},
    {id: 31, image: "", title: "", oldPrice: "", currentPrice: "", itemSold: "", saleOff: ""},
    {id: 32, image: "", title: "", oldPrice: "", currentPrice: "", itemSold: "", saleOff: ""},
    {id: 33, image: "", title: "", oldPrice: "", currentPrice: "", itemSold: "", saleOff: ""},
    {id: 34, image: "", title: "", oldPrice: "", currentPrice: "", itemSold: "", saleOff: ""},
    {id: 35, image: "", title: "", oldPrice: "", currentPrice: "", itemSold: "", saleOff: ""},
    {id: 36, image: "", title: "", oldPrice: "", currentPrice: "", itemSold: "", saleOff: ""},
    {id: 37, image: "", title: "", oldPrice: "", currentPrice: "", itemSold: "", saleOff: ""},
    {id: 38, image: "", title: "", oldPrice: "", currentPrice: "", itemSold: "", saleOff: ""},
    {id: 39, image: "", title: "", oldPrice: "", currentPrice: "", itemSold: "", saleOff: ""},
    {id: 40, image: "", title: "", oldPrice: "", currentPrice: "", itemSold: "", saleOff: ""},
    {id: 41, image: "", title: "", oldPrice: "", currentPrice: "", itemSold: "", saleOff: ""},
    {id: 42, image: "", title: "", oldPrice: "", currentPrice: "", itemSold: "", saleOff: ""},
    {id: 43, image: "", title: "", oldPrice: "", currentPrice: "", itemSold: "", saleOff: ""},
    {id: 44, image: "", title: "", oldPrice: "", currentPrice: "", itemSold: "", saleOff: ""},
    {id: 45, image: "", title: "", oldPrice: "", currentPrice: "", itemSold: "", saleOff: ""}
]

let perPage = 15;
let currentPage = 1;
let start = 0;
let end = perPage;

const totalPages = Math.ceil(product.length / perPage);

const btnNextPage = document.querySelector('.btn-next-page');
const btnPrevPage = document.querySelector('.btn-prev-page');

const btnNextFilter = document.querySelector('.btn-next-filter');
const btnPrevFilter = document.querySelector('.btn-prev-filter');

function getCurrentPage(currentPage) {
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
}

function renderProduct() {
    html = '';
    const content = product.map((item, index) => {
        if(index >= start && index < end) {
            html += '<div class="col l-2-4 m-4 c-6">';
            html += '<a class="home-product-item" href="#">';
            html += '<div class="home-product-item__img" style="background-image: url(' + item.image + ');"' + '>' + '</div>';
            html += '<h4 class="home-product-item__name">' + item.title + '</h4>';
            html += '<div class="home-product-item__price">';
            html += '<span class="home-product-item__price-old">' + item.oldPrice + '</span>';
            html += '<span class="home-product-item__price-current">' + item.currentPrice + '</span>';
            html += '</div>';
            html += '<div class="home-product-item__action">';
            html += '<div class="home-product-item__rating">';
            html += '<i class="fas fa-star"></i>';
            html += '<i class="fas fa-star"></i>';
            html += '<i class="fas fa-star"></i>';
            html += '<i class="fas fa-star"></i>';
            html += '<i class="fas fa-star"></i>';
            html += '</div>';
            html += '<span class="home-product-item__sold">' + item.itemSold + '</span>';
            html += '</div>';
            html += '<div class="home-product-item__sale-off">';
            html += '<span class="home-product-item__sale-off-percent">' + item.saleOff + '</span>';
            html += '<span class="home-product-item__sale-off-label">GIẢM</span>';
            html += '</div>';
            html += '</a>';
            html += '</div>';
            return html;
        }
    })

    document.getElementById('product').innerHTML = html;
}

renderProduct();
renderListPage();

function renderListPage() {
    let html = '';
    html += `<li class="pagination-item pagination-item--active"><span class="pagination-item__link">${1}</span></li>`;
    for(let i = 2; i <= totalPages; i++) {
        html += `<li class="pagination-item"><span class="pagination-item__link">${i}</span></li> `;
    }
    document.getElementById('number-page').innerHTML = html;
}

function changPage() {
    const currentPages = document.querySelectorAll('.number-page li');
    for(let i = 0; i < currentPages.length; i++) {
        currentPages[i].addEventListener('click', () => {
            let value = i + 1;
            currentPage = value;
            $('.number-page li').removeClass('pagination-item--active');
            currentPages[i].classList.add('pagination-item--active');
            getCurrentPage(currentPage);
            renderProduct();
        })
    }
}

changPage();

function prevPage() {
    currentPage--;
    
    if(currentPage <= 1) {
        currentPage = 1;
    }
    $('.number-page li').removeClass('pagination-item--active');
    $(`.number-page li:eq(${currentPage-1})`).addClass('pagination-item--active');
    getCurrentPage(currentPage);
    
    renderProduct();
}

function nextPage() {
    currentPage++;
    
    if(currentPage > totalPages) {
        currentPage = totalPages;
    }
    $('.number-page li').removeClass('pagination-item--active');
    $(`.number-page li:eq(${currentPage-1})`).addClass('pagination-item--active');
    getCurrentPage(currentPage);
    renderProduct();
}

btnNextPage.addEventListener('click',nextPage);
btnPrevPage.addEventListener('click',prevPage);

btnNextFilter.addEventListener('click',nextPage);
btnPrevFilter.addEventListener('click',prevPage);