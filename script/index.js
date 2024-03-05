var isOpen = false;
var currentPhotoIndex = 1;

if (document.location.search.match(/type=embed/gi)) 
{
    window.parent.postMessage("resize", "*");
}

function showMessage() 
{
    var coverBox = document.querySelector('.cover__box');

    if (!isOpen) 
    {
        coverBox.classList.add('open');
        swal({
            title: "Chúc mừng sinh nhật em yêu ❤️️",
            text: "Gửi em, chàng trai năm 20 tuổi, hãy biết cố gắng thật nhiều để sau này không hối hận, hãy biết yêu thương bản thân để luôn có sức khỏe khỏe mạnh, hãy biết hiếu thuận gia đình để bố mẹ không bao giờ buồn, và cũng hãy đi tìm nàng công chúa của mình đi nào.", // Nội dung lời nhắn
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
    if (currentPhotoIndex >= photos.length) currentPhotoIndex = 0; 

    // Hiện ảnh tiếp theo
    photos[currentPhotoIndex].style.display = 'block';
}