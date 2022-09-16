
window.addEventListener("load", () => {
    const finalDate = new Date("Sept 22, 2022 18:00:00").getTime();

    const output = document.querySelector("#cd");

    setInterval(function() {
        const now = new Date().getTime();
        const distance = finalDate - now;
    
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let day = "";
        let hour = "";
        let minute = "";
        let second = "";

        if(days<10){
            day = "0"+days.toString();
        }else{
            day=days.toString();
        }
        if(hours<10){
            hour = "0"+hours.toString();
        }else{
            hour=hours.toString();
        }
        if(minutes<10){
            minute = "0"+minutes.toString();
        }else{
            minute=minutes.toString();
        }
        if(seconds<10){
            second = "0"+seconds.toString();
        }else{
            second=seconds.toString();
        }

        output.textContent = day + " : " + hour + " : " + minute + " : " + second;
    });
});


