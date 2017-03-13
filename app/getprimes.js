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
    }
}