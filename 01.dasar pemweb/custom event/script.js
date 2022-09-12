
 
  function customEventHandler(ev) {
    console.log('Event ' + ev.type + ' telah dijalankan');
    const caption = document.getElementById('caption');
    caption.innerText = 'Anda telah membangkitkan custom event';
  }