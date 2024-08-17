function lampu(fas) {
  let joy = document.getElementById('of');
  if (fas == 'on') {
    joy.src = 'asset/gambar/on.gif';
  }
  if (fas == 'of') {
    joy.src = 'asset/gambar/off.gif';
  }
  return joy;
}
