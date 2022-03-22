<script>
if(window.location.hash.length>1){
   l=window.location.hash.substring(1);
   for(i=0; i<document.links.length; i++)
     {link=document.links[i];
      if(link.href.indexOf(l)>=0){
     while(link){
        l=link;
        link=ll(link);
        //если встречаются два подряд перевода строк - обход прекратить
        //if(link.nodeName=='BR'&&link.nextSibling.nodeName=='BR')break;
        /*if(!link){ // выход на уровень выше
        link=l.parentNode;
        for (var j=0; j < link.childNodes.length; j++)
            if(link.childNodes[j].firstChild==l){
            if(j+1 < link.childNodes.length) link=link.childNodes[j+1];
            else link=null;
            break;}
         }*/
        }
     break;
         }
     }
}
// вспомогательная рекурсивная функция обхода элементов DOM-дерева
function ll(link){
if(link.style){
   link.style.backgroundColor='#ffcccc';
   link.style.fontWeight='bold';
}
for (var i=0; i < link.childNodes.length; i++){
    // углубляюсь в дерево. Обхожу все элементы узла
    var l=link.childNodes[i].firstChild;
    while(l){l=ll(l);
    //if(link.nodeName=='BR'&&link.nextSibling.nodeName=='BR')return;
    }
}
// возвращаю ссылку на следующий элемент на текущем уровне
return link.nextSibling;
}
</script>
