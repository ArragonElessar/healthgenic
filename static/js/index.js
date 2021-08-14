function GetTodayDate() {
    var tdate = new Date();
    var dd = tdate.getDate(); //yields day
    var MM = tdate.getMonth(); //yields month
    var yyyy = tdate.getFullYear(); //yields year
    var currentDate = yyyy + "-" + (MM + 1) + "-" + dd;

    return currentDate;
}




$(document).ready(function () {
    var date = GetTodayDate();
    console.log(date);
    $.get("https://api.rootnet.in/covid19-in/stats/history", function (data, status) {
        console.log(status);
        console.log(JSON.stringify(data))
    });
})