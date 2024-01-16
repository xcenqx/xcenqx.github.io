fetch('settings.json')
  .then(response => response.json())
  .then(data => {
    const isdevcode = localStorage.getItem('devcode');
    const isTechnicalBreak = data.on;
    const isDate = data.is_date;
    if (isTechnicalBreak) {
        if(isdevcode == data.dev_code){
            console.log('*Tryb Deweloperski*: TRUE')  
    }else{
            document.title = data.title_site;
            const styleSheet = document.createElement("link");
            styleSheet.rel = "stylesheet";
            styleSheet.type = "text/css";
            styleSheet.href = "tb_style.css";
            document.head.appendChild(styleSheet);
            document.body.innerHTML = "<content><div><h1>"+ data.title +"<span class='loading-dots'>...</span></h1><p>"+ data.comment +"</p><span id='date'></span></div></content>";
            if(isDate){
                document.getElementById('date').innerHTML = "<h5> | Przewidywany czas trwania: "+ data.date +"r godz: "+ data.hours +" | </h5>"
            }
            
            
        }
      
    }
   
  })
  .catch(error => console.error('Błąd serwera zmian:', error));

  

