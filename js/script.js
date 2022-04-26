


var canvas =  document.getElementById('canvas');
var content = document.getElementById('content');
var title = document.createElement('h1');
var image = document.createElement('img');

title.innerText ="Image Gallery";
canvas.appendChild(title);
content.appendChild(title);

fetch('json/images.json').then(function(response) {
    response.json().then(function(obj) {
        for(var i = 0; i < obj.Images.length; i++){
            var divCol = document.createElement('div');
            divCol.class="col";
            var image = document.createElement('img');
            image.src = obj.Images[i].URL;
            image.alt= obj.Images[i].Caption;   
            image.style="width:100% ";
            image.class = "card-img-top";
            var aImg = document.createElement('a');
            aImg.href = obj.Images[i].URL;
        
            aImg.appendChild(image);
        
            var imgCaption = document.createElement('h4');
            imgCaption.class = "card-title";
            imgCaption.style = "text-align:center"
            imgCaption.innerText = image.alt= obj.Images[i].Caption;   
        
            var divCardBody = document.createElement('div');
            divCardBody.class = "card-body";
            divCardBody.appendChild(imgCaption)
        
            var divCard = document.createElement('div');
            divCard.class = "card";
            divCard.style = "width:100%";
            divCard.appendChild(aImg);
            divCard.appendChild(divCardBody);
            divCol.appendChild(divCard);
            canvas.appendChild(divCol)
        }

    });
  });
  




