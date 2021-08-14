/*
function GetTodayDate() {
    var tdate = new Date();
    var dd = tdate.getDate(); //yields day
    var MM = tdate.getMonth(); //yields month
    var yyyy = tdate.getFullYear(); //yields year
    var currentDate = yyyy + "-" + (MM + 1) + "-" + dd;

    return currentDate;
}*/
/*
 * $.get("https://api.rootnet.in/covid19-in/stats/history", function (data, status) {
        console.log(status);
        var data_today = JSON.stringify(data["data"][data["data"].length - 1]);
        console.log(data_today);
    });
    $.get("https://api.rootnet.in/covid19-in/stats/latest", function (data, status) {
        console.log(status);
        console.log(JSON.stringify(data))
    })
 */




$(document).ready(function () {
    // send states to populate dropdown
    var states = ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal']
    for(let i = 0; i < states.length; i++){
        $("#state-select").append(`<option value="`+states[i]+`">`+states[i]+`</option>`)
    }

    // get India's data on page ready
    $.ajax({
        url:'/handler/India'
    }).done(response => {
        // contains current day's data
        console.log(response)
        $.get("https://api.rootnet.in/covid19-in/stats/latest", function (data) {
        
        console.log(data); // contains all time data
        // update htmls
        $("#total-cases").html(data.data.summary.total)
            $("#total-deaths").html(data.data.summary.deaths)
            $("#new-deaths").html(response.newDeaths)
            $("#new-discharged").html(response.newDischarged)
            $('#total-discharged').html(data.data.summary.discharged)
            $("#new-cases").html(response.newCases)
    })
    })
    // on selection of a particular state, send AJAX request to fetch data for that state
    $("#state-select").on("change", function(){
        $.ajax({
            url: "/handler/state?state=" + $("#state-select").val()
        }).done(response=>{
            // make html changes
            $("#total-cases").html(response.totalConfirmed)
            $("#total-deaths").html(response.deaths)
            $("#new-deaths").html(response.newDeaths)
            $("#new-discharged").html(response.newDischarged)
            $('#total-discharged').html(response.discharged)
            $("#new-cases").html(response.newCases)
            $('#selected-state').html($("#state-select").val())
        })
    })
    
})