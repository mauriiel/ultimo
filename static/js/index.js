//https://www.eclipse.org/paho/clients/js/

function ENCENDIDO() {
    //alert("led on");
    console.log("led on");
    //document.getElementById("sensor").innerHTML="led on";
    message =new Paho.MQTT.Message("LED1_ALTO");
    message.destinationName = "mdpilatuna.fie@unach.edu.ec/repaso";
    client.send(message);
 
}
function APAGADO(){   
    //alert("led off");
    console.log("led off");
    //document.getElementById("sensor").innerHTML="led off";
    message =new Paho.MQTT.Message("LED1_bajo");
    message.destinationName = "mdpilatuna.fie@unach.edu.ec/repaso";
    client.send(message);
}






// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "mdpilatuna.fie@unach.edu.ec",
    password: "quitociudadhermosa",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("mdpilatuna.fie@unach.edu.ec/test");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "mdpilatuna.fie@unach.edu.ec/repaso";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
  }
  
