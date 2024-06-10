
        var tablinks = document.getElementsByClassName ("tablinks");
        var tabcontents = document.getElementsByClassName ("tabcontents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("activelink");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("avtivetab");
            }

            event.currentTarget.classList.add("activelink");
            document.getElementById(tabname).classList.add("avtivetab")
        }


        // ----------For SideMenu (below 600px)---------

        function openmenu() {
            sidemenu.style.right = "0";
        }

        function closemenu() {
            sidemenu.style.right = "-200px";
        }


            
                