var isOpen = false;
var currentPhotoIndex = 1

if(document.location.search.match(/type=embed/gi)) 
{
    window.parent.postMessage("resize", "*");
}

function showMessage() 
{
    var coverBox = document.querySelector('.giftbox__cover');
    var bodyBoxCap = document.getElementById('bodyCap'); 

    if(!isOpen) 
    {
        coverBox.classList.add('open');
        bodyBoxCap.classList.remove('giftbox__capShadow'); 
        swal({
            title: "Chúc mừng sinh nhật em yêu ❤️️",
            text: "Cảm ơn em! Người đã mang đến cho anh niềm vui trong cuộc sống và vô vàn hứng khởi trong công việc. Nhân ngày sinh nhật em, anh chúc em luôn mạnh khỏe, ngày càng xinh đẹp và những mong muốn của em sớm thành hiện thực. Mong sao hai ta luôn bên nhau, cùng nhau trải qua nhiều dịp sinh nhật nữa nhé!. Happy Birthday, Bae!", 
            button: {
                text: "Cảm ơn anh ❤️️",
            },
        });
        isOpen = true;
    } 
    else 
    {
        coverBox.classList.remove('open');
        bodyBoxCap.classList.add('giftbox__capShadow'); 
        isOpen = false;
    }
}

function nextPhoto() 
{
    var photos = document.querySelectorAll('.photo');

    // Ẩn tất cả các ảnh trừ ảnh đầu tiên
    for (let i = 1; i < photos.length; i++) {
        photos[i].style.display = 'none';
    }

    // Chuyển sang ảnh tiếp theo
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length; 

    // Hiển thị ảnh tiếp theo
    photos[currentPhotoIndex].style.display = 'block'; 
}
