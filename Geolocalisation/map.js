
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: -20.921917, lng: 55.573240}
    // la postion a ete prise via googlemap
  });

  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: -20.921917, lng: 55.573240}
    //on decide de la position du marker
   
  });
  marker.addListener('click', toggleBounce);
};

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
     //son type d'animation
};
  Message = new google.maps.InfoWindow({
    //Message que lon souhaite afficher
    content :"Ici cest baga",
    // position: {lat: -21.921917, lng: 53.573240},

  });
  marker.addListener('click',function(){
    Message.open(map,marker);
  });
}