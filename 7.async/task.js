class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null; 
    }    


    addClock(time, callback) {
        if (time === null || !callback) {
            throw new Error("отсутствуют обязательные аргументы"); 
        }

        if (this.alarmCollection.time === time) {
            console.warn("Уже присутствует звонок на это же время");
        }

        this.alarmCollection.push({callback, time, canCall: true});
    }

    removeClock(time) {
        let newArr = this.alarmCollection.filter(item => item.time !== time); 
        this.alarmCollection = newArr;
    }

    getCurrentFormattedTime() {
        let currentTime = new Date();
        return currentTime.toLocaleTimeString("ru-RU", {hour: "numeric", minute: "numeric", timeZone: "Europe/Moscow"});
    }

    start() {
        if (this.intervalId !== null) {
            return;
        }

        this.intervalId = setInterval(this.alarmCollection.forEach(element => {
            if (element.time === this.getCurrentFormattedTime() && element.canCall === true) {
                element.canCall = false;
                element.callback();
            }
        }), 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null; 
    }

    resetAllCalls() {
        this.alarmCollection.forEach(element => {element.canCall = true});
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}