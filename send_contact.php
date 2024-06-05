<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));
    
    // Aquí puedes configurar la dirección de correo donde recibirás los mensajes
    $to = 'ishieexuxpery@gmail.com';
    $subject = 'Nuevo mensaje de contacto';
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    $body = "<h2>Nuevo mensaje de contacto</h2>
             <p><strong>Nombre:</strong> $name</p>
             <p><strong>Correo Electrónico:</strong> $email</p>
             <p><strong>Mensaje:</strong><br>$message</p>";
    
    if (mail($to, $subject, $body, $headers)) {
        echo 'Mensaje enviado con éxito';
    } else {
        echo 'Error al enviar el mensaje';
    }
}
?>
