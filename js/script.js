const modal = document.querySelector('.modal');

const modal2 = document.querySelector('.modal2');

const signup = document.querySelector('.nav_list-signup');

const signupSwitch =document.querySelector('.switch_signup')

const signin = document.querySelector('.nav_list_signin');

const signinSwitch =document.querySelector('.switch_signin')

const closeExcept = document.querySelector('.cannotClose');

const closeExcept2 = document.querySelector('.cannotClose2');

const inputFind =document.querySelector('.find_product');

const findHistory =document.querySelector('.find_history');

const selectNav =document.querySelectorAll ('.category-item');

const selectSort =document.querySelectorAll ('.select_btn');

const currentPage =document.querySelector ('.page_current');

const btnPageRight =document.querySelector ('.page_right');
const labelPageRight =document.querySelector ('.ti-angle-right');

const btnPageLeft =document.querySelector ('.page_left');
const labelPageLeft =document.querySelector ('.ti-angle-left');

const productPics =document.querySelectorAll('.product_img');



// text
const boxFind =document.querySelector('.header_search-box');

//Hàm hiện Modal form Sign up
function showModal1(){
    modal.classList.add('open');
}
 

//Hàm  hiện Modal form Sign in
function showModal2(){
    modal2.classList.add('open');
}


// Hàm đóng cho cả 2 modal
function hideModal1(){
    modal.classList.remove('open');
}

function hideModal2(){
    modal2.classList.remove('open');
}
// Hàm tạo tổng số trang
function totalPageNumber(totalPage){
    let PageNumber =[];
    for(let i = 1; i <= totalPage;i++){
        PageNumber.push(i);
    }
    return PageNumber;
}



// -----------------------------------------------------------


// Lệnh các nút gọi các hàm  hiện signup
signup.addEventListener('click',showModal1)

signupSwitch.addEventListener('click', () => {
    hideModal2();
    showModal1();
});



// Lệnh các nút gọi các hàm  hiện signin
signin.addEventListener('click',showModal2)

signinSwitch.addEventListener('click', () => {
    hideModal1();
    showModal2();
});

// Đóng modal bằng cách nhấn ra ngoài không ảnh hưởng khung modal
modal.addEventListener('click',hideModal1)
closeExcept.addEventListener('click',  (event) => {
    event.stopPropagation()
});

modal2.addEventListener('click',hideModal2)
closeExcept2.addEventListener('click',  (event) => {
    event.stopPropagation()
});


// HIện khung lịch sử tìm kiếm
inputFind.addEventListener('click', (event) => {
    findHistory.classList.remove('hid');
    event.stopPropagation();
});

// Ẩn khung lịch sử tìm kiếm
document.addEventListener('click',(event) => {
    if(event.target !==  inputFind && event.target !==  findHistory){
        findHistory.classList.add('hid')
    }
});

//Gợi ý lựa chọn khi rê chuột vào mục danh mục
selectNav.forEach(event =>{
    event.addEventListener('mouseover',()=>{
        event.classList.toggle('category-active');
    });
} );
// Khi rê chuột ra ngoài tự động bỏ gợi ý
selectNav.forEach(event =>{
    event.addEventListener('mouseout',() =>{
        event.classList.toggle('category-active');
    });
});


//Nhấn nút để thêm hiệu ứng chọn
selectSort.forEach(event =>{
    event.addEventListener('click',()=>{
        selectSort.forEach(list => {
            list.classList.remove('btn-primary');
        });
        event.classList.add('btn-primary');
    });
} );

// Chuyển trang từ 1 -đến 14

let countPage = totalPageNumber(14); // Tạo mảng với tổng số trang là 14
let nowPage = 0; // Khởi tạo index để theo dõi trang hiện tại

btnPageRight.addEventListener('click', () => {
    if(nowPage < countPage.length - 1) {
        nowPage++;
        switch(countPage[nowPage]){
            case 1:
            labelPageLeft.classList.remove('disable'); 
            break;
            case 14:
            labelPageRight.classList.add('disable'); 
            break;
            default:
            labelPageLeft.classList.remove('disable'); 
            break;
        }
    }
    currentPage.textContent = countPage[nowPage]; // Gán trang hiện tại vào currentPage
});




btnPageLeft.addEventListener('click', () => {
    // event.preventDefault();
    if(nowPage > 0) {
        nowPage-- ;
        if(countPage[nowPage] >= 1){
            switch(countPage[nowPage]){
                case 1:
                labelPageLeft.classList.add('disable'); 
                break;
                case 14:
                labelPageRight.classList.add('disable'); 
                break;
                default:
                labelPageRight.classList.remove('disable'); 
                break;
            }
        }
    } 
    currentPage.textContent = countPage[nowPage]; // Gán trang hiện tại vào currentPage
});


// Thay đổi đương dẫn hình ảnh sản phẩm 
// Mảng các đường dẫn
const imagePaths = [
    '../image/Eyemakeup1.PNG',
    '../image/25color.PNG',
    '../image/PhanNen3lop.PNG',
    '../image/HighPen.PNG',
    '../image/SonMoi.PNG',
    '../image/PhanSace.PNG',
    '../image/BoTrangDiem.PNG',
    '../image/SonMoi2.PNG',
    '../image/SODILAN.PNG',
    '../image/KemNen.PNG',
  ];

// Lặp qua tất cả các phần tử productPics và thay đổi hình ảnh nền
productPics.forEach((productPic, index) => {
    if (index < imagePaths.length) {
      productPic.style.backgroundImage = `url(${imagePaths[index]})`;
    }
  });