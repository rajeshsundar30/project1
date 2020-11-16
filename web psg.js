 $(document).ready (function (){
      $(".btn").click(()=> {
      let value = $('#textemail').val();
      let pswd = $('#password').val();
      if(value & pswd != ''|| null){
          alert('enter your mail id and password here');
      }else if(value === '' || null){
          alert('enter your mail id here');
      }else if (pswd === '' || null ){
          alert('enter your password here');
      }else
          alert('your permission is granted sucessfully');
      console.log(value);
      console.log(pswd);
      });
      $("#textemail").focus(() => {
      $("#textemail").css("background-color","red");
      });
      $("#password").focus(() => {
          $("#password").css("background-color","red");
      })
 });


