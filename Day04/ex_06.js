function findAddresses(toFind) {
    addresses.forEach(address => {
        if (address[1].includes(toFind)) {
            console.log(address[0]+" "+address[1]);
        }
    })
}