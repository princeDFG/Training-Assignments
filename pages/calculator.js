let str = "";
        
        
        function stringBuilder(value){
            str = str + value;
            document.getElementById('output').value = str;
        }
        /*function func1(){
            String = String+1;
            document.getElementById('output').value = String;
            
        }
        function func2(){
            String = String+2;
            document.getElementById('output').value = String;

        }
        function func3(){
            String = String+3;
            document.getElementById('output').value = String;

        }
        function func4(){
            String = String+4;
            document.getElementById('output').value = String;

        }
        function func5(){
            String = String+5;
            document.getElementById('output').value = String;

        }
        function func6(){
            String = String+6;
            document.getElementById('output').value = String;

        }
        function func7(){
            String = String+7;
            document.getElementById('output').value = String;

        }
        function func8(){
            String = String+8;
            document.getElementById('output').value = String;

        }
        function func9(){
            String = String+9;
            document.getElementById('output').value = String;

        }
        function funcPlus(){
            String = String + '+';
            document.getElementById('output').value = String;


        }
        function funcMinus(){
            String = String + '-';
            document.getElementById('output').value = String;

        }
        function funcMul(){
            String = String + '*';
            document.getElementById('output').value = String;

        }
        function funcDiv(){
            String = String + '/';
            document.getElementById('output').value = String;

        }*/
        function funcClr(){
            string = "";
            document.getElementById('output').value = 0;
             

        }
        function funcBack(){
            str = str.slice(0,-1);
            document.getElementById('output').value = str;
        }
        function genOutput(){
            if(isNaN(parseInt(str[0])) || isNaN(parseInt(str[str.length-1]))){
                document.getElementById('output').value = 'Syntax Error';
                String = "";
            }
            else{
                str = eval(str);
                document.getElementById('output').value = str;
                str = "";

            }
            
        }