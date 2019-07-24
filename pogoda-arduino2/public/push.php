<?php
const DEFAULT_URL = '#################';
const DEFAULT_TOKEN = '#################';

require './firebaseLib.php';

if(isset($_GET['temp_zew']) && isset($_GET['wilg']) && isset($_GET['secret'])){

    if($_GET['secret']==##########){

        $temperatura_zew = floatval($_GET['temp_zew']);
        $temperatura_wew = floatval($_GET['temp_wew']);
        $cisnienie = floatval($_GET['cis']);
        $wilgotnosc = floatval($_GET['wilg']);

        $dzien=date('d');
        $miesiac=date('m');
        $rok=date('Y');
        $godzina=date('H');
        $minuta=date('i');
        
        $firebase = new fireBase(DEFAULT_URL, DEFAULT_TOKEN);
        $data = [
            'temeraturaZew' => $temperatura_zew,
            'temeraturaWew' => $temperatura_wew,
            'cisnienie' => $cisnienie,
            'wilgotnosc' => $wilgotnosc,
            'czas' => "$godzina:$minuta"
        ];
        $path = "najnowszy/";
        $firebase->set($path, $data);

        if($minuta=="00" || $minuta=="30"){
            $path = "pogoda/$rok/$miesiac/$dzien/$godzina:$minuta";
            $firebase->set($path, $data);
        }
            
    }
}
else exit();

