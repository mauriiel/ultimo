//https://www.eclipse.org/paho/clients/js/

function Encender1() {
    message =new Paho.MQTT.Message("L1O");
    message.destinationName = "mdpilatuna.fie@unach.edu.ec/test";
    client.send(message);
 
}
function Apagar1(){   
    message =new Paho.MQTT.Message("L1N");
    message.destinationName = "mdpilatuna.fie@unach.edu.ec/test";
    client.send(message);
}
function Encender2() {
    message =new Paho.MQTT.Message("L2O");
    message.destinationName = "mdpilatuna.fie@unach.edu.ec/test";
    client.send(message);
 
}
function Apagar2(){   
    message =new Paho.MQTT.Message("L2N");
    message.destinationName = "mdpilatuna.fie@unach.edu.ec/test";
    client.send(message);
}


  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

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
	
    client.subscribe("mdpilatuna.fie@unach.edu.ec/repaso");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "mdpilatuna.fie@unach.edu.ec/test";
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
	  texto=(message.payloadString);
	  text=(message.payloadString).split("")[0];
	  console.log(text)
	  if (text=="LUZ1"){
	  document.getElementById("estado1").innerHTML=texto;
	  }
	  else if (text=="Luz2"){
	document.getElementById("estado2").innerHTML=texto;
	  }
  }
  
