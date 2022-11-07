xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","xml/db_conteudo.xml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
x = xmlDoc.getElementsByTagName("conteudo");

function funcaoCurso(){
    document.write(x[0].getElementsByTagName("curso")[0].childNodes[0].nodeValue);
}