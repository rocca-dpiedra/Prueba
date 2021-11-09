<?php

class Archivo{
    public function subeimagen64temp($img, $nombre) {
        $carpetaDestino ="./Destino/";

        $img = str_replace('data:image/png;base64,', '', $img);
        $img = str_replace(' ', '+', $img);
        $data = base64_decode($img);
        $file = $carpetaDestino.$nombre.'.png';
        $succes = file_put_contents($file, $data);
        return $succes;
    }
}


?>