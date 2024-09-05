function countDown(){
    setInterval(function(){
        let des = new Date("Sep 5,  2024 13:20:00").getTime();
        let curr = new Date().getTime();
        let def = des-curr;
        if(def<0) return;
        
        let day = Math.floor(def / (60 * 60 *  24 * 1000));
        console.log(day);
        let hor =Math.floor((def % (60 * 60  * 1000 * 24))/(60 * 60 * 1000));
        console.log(hor);
        let min = Math.floor((def %(60 * 60  *1000))/(60*1000))
        console.log(min);
        let sec =Math.floor((def %(60*1000))/(1000));
        console.log(sec);
        
        document.getElementById("Day").innerHTML = day;
        document.getElementById("hour").innerHTML = hor;
        document.getElementById("minut").innerHTML = min;
        document.getElementById("sec").innerHTML = sec;



        
        },1000)
    };
    countDown()
    
    

