function persistence(num) {
   var times = 0;

   num = num.toString();

console.log(num);

   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }


   console.log(times);
   return times;
}
persistence(39);
