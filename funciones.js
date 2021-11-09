function tomarImagenPorSeccion(div, nombre){

    html2canvas(document.querySelector("#" + div)).then(canvas => {
        var img = canvas.toDataURL();
        //console.log(img);
        base = "img=" + img + "&nombre="  + nombre; 

        

        $.ajax({
            type:"POST",
            url:"./crearImagen.php",
            data: base,
            succes: function(respuesta) {
                respuesta = parseInt(respuesta);
                if(respuesta > 0){
                    alert("Imagen se ha creado");
                }else{
                    alert("Salió mal perro");
                }
            }
        });
    })     
}