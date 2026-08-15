fetch("https://patrika.xo.je/api.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Kalpesh",
        mobile: "9999999999"
    })
})
.then(res => res.json())
.then(data => console.log(data));
