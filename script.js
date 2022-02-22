const speedInput = $("#speedInput");
const clock = $("#clock");
const gearInput = $("#gearInput");
const rpmInput = $("#rpmInput");

let speed = $("#speed");
let time = $("#time");
let gear = $("#gear");
let rpm = $("#rpm")
init();
handleSpeedChange();
handleGearChange();
handleRpmChange();


function init() {
  clock.css("font-size", "8px");
  handleTime();
}

function handleTime() {
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  if (minute < 10) minute = `0${minute}`;
  if (second < 10) second = `0${second}`;
  time.text(`${hour} : ${minute} : ${second}`), setTimeout(handleTime, 1000);
}

function handleSpeedChange() {
  speedInput.on("input", (e) => {
    const currentSpeed = e.target.value;
    if(currentSpeed < 10){
      speed.text(`00${currentSpeed}km/h`);
    }else if(currentSpeed<100) {
      speed.text(`0${currentSpeed}km/h`);
    }
    else{speed.text(`${currentSpeed}km/h`);}
  });
}

function handleGearChange() {
  gearInput.on("input", (e) => {
    const currentGear = e.target.value;
    gear.text(`${currentGear}`);
  });
}

function handleRpmChange() {

  var img = document.getElementById('tacho1');

  rpmInput.on("input", (e) => {
    const currentRpm = e.target.value;
    var angle= currentRpm - 180;
    img.style.transform = 'rotate(' + angle + 'deg)';
    rpm.text(`RPM ${Math.round(currentRpm*10/20)/10}K`);
    if(Math.round(currentRpm*10/20)/10%1==0){
      rpm.text(`RPM ${Math.round(currentRpm*10/20)/10}.0K`);
    }
  });
}