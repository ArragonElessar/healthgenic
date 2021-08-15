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
    for (let i = 0; i < states.length; i++) {
        $("#state-select").append(`<option value="` + states[i] + `">` + states[i] + `</option>`)
    }

    // get India's data on page ready
    let last_update = ''
    let today_India = {}
    // send request to the API
    $.get("https://api.rootnet.in/covid19-in/stats/latest", function (data) {
        // last origin date is the date for latest data
        last_update = data.lastOriginUpdate
        // add to html
        $("#total-cases").html(data.data.summary.total)
        $("#total-deaths").html(data.data.summary.deaths)
        $('#total-discharged').html(data.data.summary.discharged)
        // now get calculated data for newCases, newDischarged and newDeaths
        $.get('/handler/India?date=' + last_update, function (response) {
            $("#new-deaths").html(response.newDeaths)
            $("#new-cases").html(response.newCases)
            $("#new-discharged").html(response.newDischarged)
            return today_India
        }).then(function (today_India) {
            // top states by cases
            $.get('/handler/topStates?date=' + last_update, function (stateWiseData) {
                console.log(stateWiseData.data)
                for(let i = 0; i < 5; i++){
                    let percent = ((stateWiseData.data[i].newCases / today_India.newCases)*100).toFixed(2)
                    $("#state-name-" + i).html(stateWiseData.data[i].state + `: ` + stateWiseData.data[i].newCases +
                    `<span class="float-end">
                        `+percent+`
                    %</span>`)
                    $("#state-progress-" + i).attr("aria-valuenow", percent)
                    $("#state-progress-" + i).css("width", percent+"%")

                    $("#card-state-name-"+i).html(stateWiseData.data[i].state)
                    $("#card-state-newCases-" + i).html("New Cases: " + stateWiseData.data[i].newCases)
                    $("#card-state-newDeaths-" + i).html("Deaths Today: " + stateWiseData.data[i].newDeaths)
                    $("#card-state-newDischarged-" + i).html("Discharged Today: " + stateWiseData.data[i].newDischarged)
                }

                $("#new-cases-heading").html("New Cases Today: "+today_India.newCases)
            })
        })
        
       
    })




    // on selection of a particular state, send AJAX request to fetch data for that state
    $("#state-select").on("change", function () {
        $.ajax({
            url: "/handler/state?state=" + $("#state-select").val() + "&date=" + last_update
        }).done(response => {
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