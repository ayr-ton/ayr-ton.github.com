self.onmessage = function(e) {
  var data = e.data;

  switch (data.cmd) {
    case 'init':
      self.postMessage({msg: 'Files loaded!'});
      break;
    case 'read':
      self.postMessage({"huha": "huhe"});
      break;
    default:
      self.postMessage({msg: 'Nothing to do!'});
  }
};