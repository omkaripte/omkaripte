
 //--------------For Click Feature (About Section)--------------//

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


 // ---------Typed.js function for text animation (Home Section)--------//
        
        var typed = new Typed('#element', {
            strings: ['Web Designer','Graphic Designer','Web Developer'],
            typeSpeed: 50,
          });


// ----------For SideMenu (below 600px)(Home Section)---------//

        function openmenu() {
            sidemenu.style.right = "0";
        }

        function closemenu() {
            sidemenu.style.right = "-200px";
        }


// ----------For Reset Form after sending details (Contact Section)----------//

    var form = document.getElementById('form')
        form.addEventListener('submit', e =>{
            e.preventDefault()
            fetch('https://api.web3forms.com/submit',{ 
                method: 'POST' ,body: new FormData(form)})
            .then(response => {
                window.alert("Message sent successfully!")
                form.reset()
            })
            .catch(error => console.error('Error!', error))
        })

        // var form = document.getElementById('form')
        // form.addEventListener('submit', e =>{
        //     e.preventDefault()
        //     fetch('https://api.web3forms.com/submit',{ 
        //         method: 'POST' ,body: new FormData(form)})
        //     .then(response => {
        //         msg.innerHTML = "Message sent successfully"
        //         setTimeout(function(){
        //             msg.innerHTML = ""
        //         },5000)
        //         form.reset()
        //     })
        //     .catch(error => console.error('Error!', error))
        // })
