const validateEmail = (email) => {
    const validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return validMail.test(String(email).toLowerCase());
  };
  
  const validatePassword = (password) => {
    const strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return strongPassword.test(String(password));
  };
  
  module.exports = {
      validateEmail, 
      validatePassword,
}
  