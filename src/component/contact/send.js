import Swal from "sweetalert2"; // Import SweetAlert

function sendEmail(name, email, subject, message) {
  window.Email.send({
    SecureToken: "8f28f4cd-da5d-493e-97a5-88679329e45a",
    To: "profilsaya1@gmail.com",
    From: "profilsaya1@gmail.com",
    Subject: subject,
    Body: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  })
    .then((message) => {
      // Success message
      Swal.fire({
        icon: "success",
        title: "Email Sent",
        text: "Your message has been sent successfully!",
      });
    })
    .catch((error) => {
      // Error message
      Swal.fire({
        icon: "error",
        title: "Email Error",
        text: "Oops! There was an error sending your message. Please try again later.",
      });
    });
}

export default sendEmail;
