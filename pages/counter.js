var number = document.getElementById("num");
        var btn_minus = document.getElementById("minus");
        var btn_plus = document.getElementById("plus");

        count = 0;
        if (count == 0) {
            btn_minus.disabled = true;
        }

        function decrement() {
            if (count > 0) {
                number.innerHTML = --count;
            }
            if (count > 0) {
                btn_minus.disabled = false;
            } else {
                btn_minus.disabled = true;
            }
        }

        function increment() {
            number.innerHTML = ++count;
            if (count > 0) {
                btn_minus.disabled = false;
            } else {
                btn_minus.disabled = true;
            }
        }