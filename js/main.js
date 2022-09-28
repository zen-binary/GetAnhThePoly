        
        
        var index = 10000;
        var mssv = document.getElementById('mssv');
        var coso = document.getElementsByName('cs');
        var txtmsv = document.getElementById('txtMsv');
        var anh = document.getElementById("anh");
        var hn = document.getElementById("hn");
        var hcm = document.getElementById("hcm");
        var cs='ph/PH';
        var ma='PH';
       
        function checkcs(){
        
        var a;
           for (var i = 0; i < coso.length; i++) {
            if (coso[i].checked) {
                cs = coso.item(i).value;
                 a = coso.item(i).value;
            }
            
           } 
           
           ma = a.slice(3,5);
        //    mssv.innerText = ""+ma;           
        }

        function auto() {
            index++;
            chkSo()
            mssv.innerText = ""+ma+index;
            anh.src = "https://iap.poly.edu.vn/user/"+cs+index+".jpg";
            t = setTimeout("auto()", 2000)

        }
        function timkiem() {
            var a = txtmsv.value.replace(/[^0-9]/g, '');
            
            var str =  a.trim();
            console.log(str);
            if (str == 27953) {
                anh.src = "img/2.JPG";
                alert("Không có đâu bé à :))\nWeb ta tạo mà không lường trước à");
                mssv.innerText = 'Tha cho em đi ạ';
               
                return;
            }
            mssv.innerText = ""+ma+str;
            anh.src = "https://iap.poly.edu.vn/user/"+cs+str+".jpg";
            index = str;
        
        }
        function next() {
            index++;
            chkSo()
            mssv.innerText = ""+ma+index;
            anh.src = "https://iap.poly.edu.vn/user/"+cs+index+".jpg";
            
        }
        function back() {
            index--;
            chkSo()
            mssv.innerText = ""+ma+index;
            anh.src = "https://iap.poly.edu.vn/user/"+cs+index+".jpg";
            
        }
        function random() {
            var random = Math.floor(Math.random()*10000*5) 
            console.log(random)
            index=random;
            chkSo()
            mssv.innerText = ""+ma+index;
            anh.src = "https://iap.poly.edu.vn/user/"+cs+index+".jpg";
            
        }
        function chkSo(){
            index = index+"";
            console.log(index);
            var leg = index.length;
            console.log(leg);
            if (leg <= 1) {
                var temp = index;
                index = "0000"+temp;
                console.log(index);
            }else if (leg <= 2) {
                var temp = index;
                index = "000"+temp;
                console.log(index);
            }else if (leg <= 3) {
                var temp = index;
                index = "00"+temp;
                console.log(index);
            }else if (leg <= 4) {
                var temp = index;
                index = "0"+temp;
                
                
            }
            
            console.log(index);
        }
        //Stop
        function stop() {
            clearTimeout(t);
        }

        