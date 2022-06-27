let dateq = new Date(2021, 1, 1);
let finaldate = dateq.getFullYear();
setInterval(() => {
    document.getElementById("date").innerHTML = finaldate;
}, 3.154e+10);