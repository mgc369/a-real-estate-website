const dateq = new Date(2021, 1, 1);
const finaldate = dateq.getFullYear();
setInterval(() => {
    document.getElementById("date").textContent = finaldate;
}, 3.154e+10);