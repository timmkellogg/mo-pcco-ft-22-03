function counterdown(num) {
    if (num > 0) {
        console.log(num);
        counterdown(num - 1);
    }
}

counterdown(10000);