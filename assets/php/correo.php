<?php
require_once("./main.php");

$email = $_POST['email'];
$name = $_POST['name'];
$message = $_POST['message'];

if($email != '' && $name != '' && $message != ''){
    $verificacion = new Ndnestor();

    if($verificacion->verifyEmail($email)){
        $VEmail = true;
    }else{
        echo 'El email no es valido';
        exit();
    }

    $name = $verificacion->cleanString($name);
    $email = $verificacion->cleanString($email);
    $message = $verificacion->cleanString($message);

}else{
    echo 'Debe rellenar todas las casillas';
    exit();
}



if($VEmail){
    echo './gracias.html';

    exit();
}


?>