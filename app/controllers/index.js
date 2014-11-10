
function getModelFromSelectedRow(_event) {
  var item = _event.section.items[_event.itemIndex];
  var selectedUserId = item.properties.model_id;
  return  Alloy.Collections.cars.get(selectedUserId);
}


function itemClicked(_event) {
    var m = getModelFromSelectedRow(_event);
    if (m) {
      alert(m.toJSON());
    } else {
    alert("Error - Item Not Found!");
    }
    
}
$.mainWindow.open();

// Trigger the synchronization by adding the data
Alloy.Collections.cars.reset([{
    "make" : "Honda",
    "model" : "Civic",
    "id" : 100
}, {
    "make" : "Honda",
    "model" : "Accord",
    "id" : 200
}, {
    "make" : "Ford",
    "model" : "Escape",
    "id" : 300
}, {
    "make" : "Ford",
    "model" : "Mustange",
    "id" : 400

}, {
    "make" : "Nissan",
    "model" : "Altima",
    "id" : 500
}]);

$.mainWindow.addEventListener('close', function() {
    $.destroy();
});