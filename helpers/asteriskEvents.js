function monitorarRamais(evt) {
  try {
    const peer = evt.peer.substr(4);
    const status = evt.peerstatus;
  
    if (status === "Registered") {
      document.getElementById(peer).classList.add("active");
    }
    //if (status === "Unregistered") {
    else {
      document.getElementById(peer).classList.add("inactive");
    }
  } catch {
    console.log("Erro")
  }
  
}

module.exports = monitorarRamais