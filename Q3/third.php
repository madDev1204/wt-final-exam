<?php
$myfile = fopen('file.txt','w+') or die("Unable to open file");;
$name = 'Nidhi';
$rollno = 'A026';
$batch = 'B2';

$txt = "Hi I am $name, Roll No. $rollno from batch $batch & currently pursuing MCA from MPSTME";
fwrite($myfile,$txt);
fclose($myfile);

$myfile = fopen("file.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("file.txt"));
fclose($myfile);
?>