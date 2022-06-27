const dateq = new Date(2021, 1, 1);
const finaldate = dateq.getFullYear();
setInterval(() => {
    document.getElementById("date").innerHTML = finaldate;
}, 3.154e+10);