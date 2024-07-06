const clockElement = document.getElementById("clock");
const alarmList = document.getElementById("alarmList");

function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12; // Convert to 12-hour format
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

function setAlarm() {
    const alarmHour = document.getElementById("alarmHour").value;
    const alarmMinute = document.getElementById("alarmMinute").value;
    const alarmSecond = document.getElementById("alarmSecond").value;
    const ampm = document.getElementById("ampm").value;

    const alarmTime = `${alarmHour}:${alarmMinute}:${alarmSecond} ${ampm}`;
    const listItem = document.createElement("li");
    listItem.textContent = alarmTime;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        alarmList.removeChild(listItem);
    };

    listItem.appendChild(deleteButton);
    alarmList.appendChild(listItem);
}

function checkAlarms() {
    const now = new Date();
    const currentHour = now.getHours()%12||12;
    const currentMinute=now.getMinutes();
    const currentSecond=now.getSeconds();
    const alarms = document.querySelectorAll("#alarmList li");

    alarms.forEach(function(alarm) {
        //const alarmTime = alarm.textContent;
        const alarmHour = document.getElementById("alarmHour").value;
        const alarmMinute = document.getElementById("alarmMinute").value;
        const alarmSecond = document.getElementById("alarmSecond").value;
        if (alarmHour == currentHour && alarmMinute==currentMinute && alarmSecond==currentSecond) {
            alert("Time up!");
        }
    });
}

setInterval(updateClock, 1000);
setInterval(checkAlarms, 1000);
