var path = window.location.pathname;
const page = path.split("/").pop();
var imeP="";


    if(page=="katalog.html"){
        this.imeP=prompt("Unesite Ime i Prezime");
        alert("Zdravo "+imeP);
    
       
        
       
    }
    if(page=="kontakt.html"){
        alert("Kako ste? "+imeP);
    }

