<?php

$conexion = mysqli_connect('localhost','root','','datosdelcliente') 
or die(mysqli_error($mysqli));

insertar($conexion);

function insertar($conexion){
    $num_doc = $_POST['numberdocument'];
    $nombre = $_POST['name'];
    $direccion = $_POST['address'];
    $id_factura = $_POST['idEnvocice'];
    $codi_estado = $_POST['codeState'];
    $valor_fac = $_POST['valueEnvoice'];
    $fecha_fac = $_POST['date'];
    $descripcion = $_POST['description'];

    $consulta = "INSERT INTO clientes(numberdocument, name, address) 
    VALUES ('$num_doc', '$nombre','$direccion')";

    mysqli_query($conexion, $consulta);
    mysqli_close($conexion);
}

?>