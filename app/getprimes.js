module.exports = {   

    getPrimes : function(num){
         var primes = [];
        if (num === 0){
            return 'input should be greater than 0';
        }else if(typeof num !== "number"){
            return 'not a number';
        }else{           
            var iter = 2;
            while(iter <= num){
                if(primeCheck(iter)){
                    primes.push(iter);
                }
                iter++;
            }          
           
        }

        return primes;      

        function primeCheck(item){
            // logically, any number greater than half of n can not modular divide n to be 0
            // to reduce itirations, use range;
            var rang = item < 2 ? item : Math.round(item/2);            
            var count = 2;
            while (count <= rang){
                if(item % count === 0){
                    return false;
                }
                count++;
            }
            return true;
        }
    }
}