<?php 
/*
    // URL: http://www.phpconcept.net/pclzip
    include_once('pclzip.lib.php');
    $archivozip = $_GET['archivozip'];
    //$archive = new PclZip('archive.zip');
    $archive = new PclZip($archivozip.'.zip');
    //$v_list = $archive->create('imgA.jpg,imgB.jpg,img');
    //$v_list = $archive->create('img');
    $v_list = $archive->create($archivozip);
    if ($v_list == 0) {
        die("Error : ".$archive->errorInfo(true));
    }
    */



    /*$zip = new ZipArchive();
    //Nombre del archivo zip
    $zip->open('proyectoWeb.zip', ZipArchive::CREATE);
    //Obtengo el contenigo de la carpeta
    //$files = scandir('img2');
    $files = scandir('img2');
    unset($files[0],$files[1]);
    foreach ($files as $file) {
        //echo $files.' ';
        //$zip->addFile("img2/{$file}");
        $zip->addFile("img2/{$file}");
    }
    $zip->close();*/

//http://megarush.net/compress-a-folder-containing-sub-folders-and-files/

//file name:compress.php
//Title:How to compress a Folder containing Sub-Folders and Files with PHP
//Date:6-12-2012
/*$folder="img/";
$output="compressed.zip";
$zip = new ZipArchive();
 
if ($zip->open($output, ZIPARCHIVE::CREATE) !== TRUE) {
    die ("Unable to open Archirve");
}
 
$all= new RecursiveIteratorIterator(new RecursiveDirectoryIterator($folder));
 
foreach ($all as $f=>$value) {
    $zip->addFile(realpath($f), $f) or die ("ERROR: Unable to add file: $f");
}
$zip->close();
echo "Compressed Successfully";
*/




//https://gist.github.com/MarvinMenzerath/4185113/72db1670454bd707b9d761a9d5e83c54da2052ac
ini_set('max_execution_time', 600);
ini_set('memory_limit', '1024M');

// Start the backup!
//zipData('/path/to/folder', '/path/to/backup.zip');
//zipData('C:\xampp\htdocs\TFGweb\funciones', 'C:\xampp\htdocs\TFGweb\funciones\funciones.zip');
zipData('img2', 'C:\xampp\htdocs\TFGweb\funciones\funciones.zip');
echo 'Zip generado';

// Here the magic happens :)
function zipData($source, $destination) {
    if (extension_loaded('zip')) {
        if (file_exists($source)) {
            $zip = new ZipArchive();
            if ($zip->open($destination, ZIPARCHIVE::CREATE)) {
                //$source = realpath($source);
                if (is_dir($source)) {
                    echo ' 1'.$source;
                    //$files = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($source, RecursiveDirectoryIterator::SKIP_DOTS), RecursiveIteratorIterator::SELF_FIRST);
                    $files = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($source, RecursiveDirectoryIterator::SKIP_DOTS), RecursiveIteratorIterator::SELF_FIRST);
                    foreach ($files as $file) {
                        //$file = realpath($file);
                        if (is_dir($file)) {
                            echo ' 2'.$source;
                            $zip->addEmptyDir(str_replace($source . '/', '', $file . '/'));

                        } else if (is_file($file)) {
                            echo ' 3'.$source;
                            $zip->addFromString(str_replace($source . '/', '', $file), file_get_contents($file));
                        }
                    }
                } else if (is_file($source)) {
                    echo ' 4'.basename($source);
                    $zip->addFromString(basename($source), file_get_contents($source));
                }
            }
            return $zip->close();
        }
    }
    return false;
}

// let's iterate and create a new local file name
/*foreach ($files as $name => $file) {
    $new_filename = substr($name,strrpos($name,'/') + 1);
    $zip->addFile($file, $new_filename);
}*/
/*
// define some basics
$rootPath = 'img2';
$archiveName = 'img.zip';

// initialize the ZIP archive
$zip = new ZipArchive;
$zip->open($archiveName, ZipArchive::CREATE);

// create recursive directory iterator
$files = new RecursiveIteratorIterator (new RecursiveDirectoryIterator($rootPath), RecursiveIteratorIterator::LEAVES_ONLY);

// let's iterate
foreach ($files as $name => $file) {
    $filePath = $file->getRealPath();
    $zip->addFile($filePath);
}


// close the zip file
if (!$zip->close()) {
    echo '<p>There was a problem writing the ZIP archive.</p>';
} else {
    echo '<p>Successfully created the ZIP Archive!</p>';
}
*/

    echo 'hola';
?>