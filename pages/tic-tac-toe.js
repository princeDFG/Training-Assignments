var btn = document.querySelectorAll(".btn");
        console.log(btn);
        let btnVal = 'X'; 
        for(let i=0;i<9;i++){
            btn[i].addEventListener('click',function(){
                if(btnVal == 'X'){
                    btn[i].innerHTML = btnVal;
                    winner(btnVal);
                    btnVal = 'O';
                    btn[i].disabled = true;
                    
                }
                else{
                    btn[i].innerHTML = btnVal;
                    winner(btnVal);
                    btnVal = 'X';
                    btn[i].disabled = true;
                }
            })
            
        }
        function check(n1,n2,n3){
            return btn[n1].innerHTML + btn[n2].innerHTML + btn[n3].innerHTML;
        }
        function disable(){
            btn[0].disabled = true;
            btn[1].disabled = true;
            btn[2].disabled = true;
            btn[3].disabled = true;
            btn[4].disabled = true;
            btn[5].disabled = true;
            btn[6].disabled = true;
            btn[7].disabled = true;
            btn[8].disabled = true;
        }
        function winner(name){
            let str
            if(name == 'X'){
                str = 'XXX';
            }
            else{
                str = 'OOO';
            }
            if(check(0,1,2) == str || check(3,4,5) == str || check(6,7,8) == str || check(0,3,6) == str ||
            check(1,4,7) == str || check(2,5,8) == str || check(0,4,8) == str || check(2,4,6) == str){
                document.getElementById('result').innerHTML = name+" wins!";
                disable();

            }
        }
        
        