var arr = []
for (i = 0; i<=999; i++){
    arr[i]=true
}

for (i = 2; i <= 999; i++){
    if(arr[i]==true){
        for(ii = i; i * ii <= 999; ii++){
            arr[i*ii] = false
        }
        console.log(i)
    }
}