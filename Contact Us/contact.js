function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(30.51614539326389,76.65860477147781),
      zoom:15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}