export const body = (model)=>{
 return ` 
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body onload="getLocation()">

 <div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="480" src="https://giphy.com/embed/GvkQ4VFFS2vrYzaAfO/video" width="480"></iframe></div> 

     <p id="demo"></p>

     <script>

         function getLocation() {
            if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
         } else { 
          document.getElementById("demo").innerHTML =
          "Geolocation is not supported by this browser.";
         } 
           }
       
        function showPosition(position) {
          document.getElementById("demo").innerHTML =
          "Latitude: " + position.coords.latitude + "<br>" +
          "Longitude: " + position.coords.longitude;
         } 
        </script>    
</body>
</html>
 `    
}




