<?php

if(isset($_POST['femail']) && !empty($_POST['femail'])) {

    $nome = addslashes($_POST['fname']);
    $assunto = addslashes($_POST['fassunto']);
    $email = addslashes($_POST['femail']);
    $celular = addslashes($_POST['fcel']);
    $comoconheceu = addslashes($_POST['fcnc']);
    $mensagem = addslashes($_POST['fmensagem']);

    $to = "pedro.neto72pn@gmail.com";
    $subject = "Contato - SiteEMa";
    $body = "Nome: ".$nome. "\r\n".
            "Assunto: ".$assunto. "\r\n".
            "Email: ".$email. "\r\n".
            "Celular: ".$celular. "\r\n".
            "Como nos conheceu: ".$comoconheceu. "\r\n".
            "Mensagem: ".$mensagem;
    
    $header = "From:pedro.neto722pn@gmail.com"."\r\n"."Reply-to:".$email."\r\n"."X=Mailer:PHP/".phpversion();

    if(mail($to, $subject, $body ,$header)) {
        echo("Email enviado com sucessor!");
    } else {
        echo("Erro durante o envio do email!(v0.2)");
    }

}






?>