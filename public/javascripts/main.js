

$('#far').click(function (places) {
        let randomDestiny = 0;
        randomDestiny = Math.random() * (places.length - 0);
        console.log(randomDestiny);
        return randomDestiny;
})