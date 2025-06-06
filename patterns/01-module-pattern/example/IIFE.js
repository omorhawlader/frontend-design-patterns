const Counter = (function (){
    // IIFE - Immediately Invoked Function Expression
    // This pattern is used to create a private scope
        let count = 0; //private
        console.log(":: From IIFE Counter Module");

        return {
            getCount(){
                return count;
            },
            increment(){
                count++;
                console.log(count);
            },
            decrement(){
                if(count > 0){
                    count--;
                    console.log(count);
                }else{
                    count = 0;
                    console.log(count,"count must >= 0");
                }
            },
            reset(){
                count = 0;
                console.log("::Reset to", count);
            }
        }
})();