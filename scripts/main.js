let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === '../images/123.png'){
    myImage.setAttribute('src', '../images/456.png');
  } else {
      myImage.setAttribute('src', '../images/123.png');
  }
}
