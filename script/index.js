if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
}
function showMessage() {
    swal({
        title: "Chúc mừng sinh nhật em yêu ❤️️",
        text: "Gửi em, chàng trai năm 20 tuổi, hãy biết cố gắng thật nhiều để sau này không hối hận, hãy biết yêu thương bản thân để luôn có sức khỏe khỏe mạnh, hãy biết hiếu thuận gia đình để bố mẹ không bao giờ buồn, và cũng hãy đi tìm nàng công chúa của mình đi nào.", // Nội dung lời nhắn
        button: {
            text: "❤️️",
        },
    });
}