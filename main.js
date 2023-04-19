function mostrar() {
    elemento = document.getElementById('imagen');
    elemento.style.display = '';
    
    elemento = document.getElementById('alerta');
    elemento.style.display = '';

    elemento = document.getElementById('copiar');
    elemento.style.display = 'none';

}

function ocultar() {

    elemento = document.getElementById('copiar');
    elemento.style.display = '';

    elemento = document.getElementById('imagen');
    elemento.style.display = 'none';
    
    elemento = document.getElementById('alerta');
    elemento.style.display = 'none';

}

function encriptar()
{
    componenteTexto=document.getElementById("palabra");
    let palabra=componenteTexto.value;
    if(palabra!=""){
        let nuevaPalabra="";
        for(let i=0;i<palabra.length;i++)
        {
            if(palabra[i]=="e")
            {
                nuevaPalabra=nuevaPalabra+"enter";
            }
            else if(palabra[i]=="i")
            {
                nuevaPalabra=nuevaPalabra+"imes";
            }
            
            else if(palabra[i]=="a")
            {
                nuevaPalabra=nuevaPalabra+"ai";
            }
            else if(palabra[i]=="o")
            {
                nuevaPalabra=nuevaPalabra+"ober";
            }
            else if(palabra[i]=="u")
            {
                nuevaPalabra=nuevaPalabra+"ufat";
            }
            else{
                nuevaPalabra=nuevaPalabra+palabra[i];
            }
        }
        document.querySelector('#mensaje').innerText = nuevaPalabra;
        ocultar();
    }
}

function desencriptar(){
    componenteTexto=document.getElementById("palabra");
    let palabra=componenteTexto.value;
    if(palabra!=""){
        let nuevaPalabra="";
        for(let i=0;i<palabra.length;i++)
        {
            nuevaPalabra=nuevaPalabra+palabra[i];
            if(palabra[i]=="e")
            {
                if(palabra[i+1]=="n" && palabra[i+2]=="t" && palabra[i+3]=="e"  && palabra[i+4]=="r"){
                    i=i+4;
                }
            }
            else if(palabra[i]=="i")
            {
                if(palabra[i+1]=="m" && palabra[i+2]=="e" && palabra[i+3]=="s"){
                    i=i+3;
                }
            }        
            else if(palabra[i]=="a")
            {
                if(palabra[i+1]=="i"){
                    i=i+1;
                }
            }
            else if(palabra[i]=="o")
            { 
                if(palabra[i+1]=="b" && palabra[i+2]=="e" && palabra[i+3]=="r"){
                    i=i+3;
                }
            }
            else if(palabra[i]=="u")
            {
                if(palabra[i+1]=="f" && palabra[i+2]=="a" && palabra[i+3]=="t"){
                    i=i+3;
                }
            }
        }
        document.querySelector('#mensaje').innerText = nuevaPalabra;
        ocultar();
    }
}

function copiar(id_elemento) {
    componenteLabel=document.getElementById("mensaje");
    if(componenteLabel.innerText!="Ningun mensaje fue encontrado")
    {
        var aux = document.createElement("input");
        aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
        document.querySelector('#palabra').value= componenteLabel.innerText;
        document.querySelector('#mensaje').innerText = "Ningun mensaje fue encontrado";
        mostrar();
    }
}