<?php
    class Ndnestor{

        //Verificacion de Email de usuario
        function verifyEmail($string){
            if(preg_match("/^(?=.{1,254}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/",$string)){
                return true;
            }else{
                return false;
            }
        }

        //Verificacion de numero de usuario
        function verifyNumber($string){
            if(preg_match("/^\+?[0-9\s-]{6,15}$/",$string)){
                return true;
            }else{
                return false;
            }
        }
        

        //Verificacion de Clave de usuario
        function verifyKey($string){
            if(preg_match("/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/",$string)){
                return true;
            }else{
                return false;
            }
        }

        //Limpiar la los string contras las inyecciones
        function cleanString($string){
            //Limpiar espacios
            $string = trim($string);

            //Limpiar las barras invertidas
            $string = stripslashes($string);

            //Array de posibles ataques de inyeccion
            $array = ["<script>","</script>", "<script src", "<script type=", "SELECT * FROM". "DELETE FROM", "INSERT INTO", '==', ';','/',
            "DROP TABLE", 'DROP DATABASE', 'TRUNCATE TABLE', 'SHOW TABLE', 'SHOW DATABASE', '<?php', '?>', '--', '^', "<", '[',']', '::',
            'SELECT', 'FROM', 'DELATE', 'INSERT', 'DROP', 'TRUNCATE', "*"];
            
            //Limpieza de posibles ataques de inyeccion
            foreach($array as $x){
                $string = str_ireplace($x, "", $string);
            }

            //Limpiar espacios
            $string = trim($string);

            //Limpiar las barras invertidas
            $string = stripslashes($string);

            return $string;
        }


    }