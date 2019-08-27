import * as messaging from "messaging";
import { settingsStorage} from "settings";





messaging.peerSocket.onopen = function(){


  sendMessage();
}

function sendMessage(){

  var data = {
    test: "yes"
  }

  if(messaging.peerSocket.readyState == messaging.peerSocket.OPEN){


    messaging.peerSocket.send(data);
  }

}


console.log('Hello world!');
/*
    fetch('https://shuttles.rpi.edu/updates')
      .then(function(response){
        return reponse.json();
      })
      .then(function(json){
        shuttle.text = json
      });

*/

/*
 *
 *  establish a socket connection with device
 *
 *  make fetch request to shuttles rpi
 *
 *  send data to device
 *
 *
 *
 */
