var isOpen = false;
var currentPhotoIndex = 1;

// Phát nhạc khi trang web được tải
var audio = document.getElementById("player");
window.onload = function() {
    audio.play();
};

if(document.location.search.match(/type=embed/gi)) 
{
    window.parent.postMessage("resize", "*");
}

function showMessage() 
{
    var coverBox = document.querySelector('.giftbox__cover');

    if(!isOpen) 
    {
        coverBox.classList.add('open');
        swal({
            title: "Chúc mừng sinh nhật em yêu ❤️️",
            text: "Cảm ơn em! Người đã mang đến cho anh niềm vui trong cuộc sống và vô vàn hứng khởi trong công việc. Nhân ngày sinh nhật em, anh chúc em luôn mạnh khỏe, ngày càng xinh đẹp và những mong muốn của em sớm thành hiện thực. Mong sao hai ta luôn bên nhau, cùng nhau trải qua nhiều dịp sinh nhật nữa nhé!. Happy Birthday, Bae!", 
            button: {
                text: "❤️️",
            },
        });
        isOpen = true;
    } 
    else 
    {
        coverBox.classList.remove('open');
        isOpen = false;
    }
}

function nextPhoto() 
{
    var photos = document.querySelectorAll('.photo');

    // Ẩn ảnh hiện tại
    photos[currentPhotoIndex].style.display = 'none';

    // Tăng chỉ số ảnh hiện tại
    currentPhotoIndex++;

    // Nếu đã đến ảnh cuối cùng, quay lại ảnh đầu tiên
    if(currentPhotoIndex >= photos.length) currentPhotoIndex = 0; 

    // Hiện ảnh tiếp theo
    photos[currentPhotoIndex].style.display = 'block';
}
