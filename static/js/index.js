// function to draw chart for All India Data
function indiaChart(past_days) {
    // set heading of chart
    $("#chart-heading").html('New Cases: India      Past: ' + (past_days / 3).toFixed(0) + ' days')
    // GET Request
    $.get('/handler/chartDays?days=' + past_days, function (data) {
        updateChart(data)
    })
}

// function to draw chart with given x and y arrays
function updateChart(data) {
    // emptys the previous chart
    $("#chart-area").empty();
    $("#chart-area").append('<canvas id="chart"></canvas>')
    // holds data of x and y axis
    y_labels = data.newCases
    x_labels = data.dates

    // chart settings for styling etc
    chart_data = { "type": "line", "data": { "labels": x_labels, "datasets": [{ "label": "Cases", "fill": true, "data": y_labels, "backgroundColor": "rgba(78, 115, 223, 0.05)", "borderColor": "rgba(78, 115, 223, 1)" }] }, "options": { "maintainAspectRatio": false, "legend": { "display": false, "labels": { "fontStyle": "normal" } }, "title": { "fontStyle": "normal" }, "scales": { "xAxes": [{ "gridLines": { "color": "rgb(234, 236, 244)", "zeroLineColor": "rgb(234, 236, 244)", "drawBorder": false, "drawTicks": false, "borderDash": ["2"], "zeroLineBorderDash": ["2"], "drawOnChartArea": false }, "ticks": { "fontColor": "#858796", "padding": 20 } }], "yAxes": [{ "gridLines": { "color": "rgb(234, 236, 244)", "zeroLineColor": "rgb(234, 236, 244)", "drawBorder": false, "drawTicks": false, "borderDash": ["2"], "zeroLineBorderDash": ["2"] }, "ticks": { "fontColor": "#858796", "padding": 20 } }] } } }

    // draw our new chart
    new Chart("chart", chart_data)
}

//---------------------------------------------------- Document Ready----------------------------------------
$(document).ready(function () {
    // link for my LinkedIn
    $("#PranavRuparel").click(function () {
        window.open('https://www.linkedin.com/in/pranav-ruparel/', _blank)
    })
    // sidebar collapse
    $("#sidebarToggle").trigger("click")

    // send states to populate dropdown
    var states = ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal']
    for (let i = 0; i < states.length; i++) {
        $("#state-select").append(`<option value="` + states[i] + `">` + states[i] + `</option>`)
    }

    // Global Variables
    let last_update = "2021-08-13T02:30:00.000Z" // hardcoded for now
    let today_India = {}

    // -------------------------ALL INDIA VALUES------------------------------------------
    // send request to the API
    $.get("https://api.rootnet.in/covid19-in/stats/latest", function (data) {
        // last origin date is the date for latest data
        // last_update = data.lastOriginUpdate
        //console.log("last update: " + last_update)
        // add to html
        $("#total-cases").html(data.data.summary.total.toLocaleString())
        $("#total-deaths").html(data.data.summary.deaths.toLocaleString())
        $('#total-discharged').html(data.data.summary.discharged.toLocaleString())
        $("#total-active").html((data.data.summary.total - data.data.summary.deaths - data.data.summary.discharged).toLocaleString())
        // now get calculated data for newCases, newDischarged and newDeaths
        $.get('/handler/India?date=' + last_update, function (response) {
            $("#new-deaths").html(response.newDeaths.toLocaleString())
            $("#new-cases").html(response.newCases.toLocaleString())
            $("#new-discharged").html(response.newDischarged.toLocaleString())
            $("#new-active").html((response.newCases - response.newDischarged - response.newDeaths).toLocaleString())
            return today_India
        }).then(function (today_India) {

            // -----------------------------------------TOP 5 STATES--------------------------------------------
            // top states by cases
            $.get('/handler/topStates?date=' + last_update, function (stateWiseData) {
                for (let i = 0; i < 5; i++) {
                    // calculate percentage contribution
                    let percent = ((stateWiseData.data[i].newCases / today_India.newCases) * 100).toFixed(1)
                    // style changes to progress bars and cards, color coded
                    $("#state-name-" + i).html(stateWiseData.data[i].state + `: ` + stateWiseData.data[i].newCases +
                        `<span class="float-end">
                        `+ percent + `
                    %</span>`)
                    $("#state-progress-" + i).attr("aria-valuenow", percent)
                    $("#state-progress-" + i).css("width", percent + "%")

                    $("#card-state-name-" + i).html(stateWiseData.data[i].state)
                    $("#card-state-newCases-" + i).html("New Cases: " + stateWiseData.data[i].newCases)
                    $("#card-state-newDeaths-" + i).html("Deaths Today: " + stateWiseData.data[i].newDeaths)
                    $("#card-state-newDischarged-" + i).html("Discharged Today: " + stateWiseData.data[i].newDischarged)
                }
                $("#new-cases-heading").html("New Cases Today: " + today_India.newCases)
            })
        })
    })
    // chart functions
    // request to fetch new case data of past 200 days
    var past_days = 600
    $('[name="days-past"]').click(function (event) {
        event.preventDefault()
        past_days = $(this).html() * 3
        indiaChart(past_days)
    })
    indiaChart(1200)
    // -------------------------------------------DATA BY STATE--------------------------------------------------------
    // on selection of a particular state, send AJAX request to fetch data for that state
    $("#state-select").on("change", function () {
        if ($("#state-select").val() == "India") {
            indiaChart(1200)
            $.get("https://api.rootnet.in/covid19-in/stats/latest", function (data) {
                $("#total-cases").html(data.data.summary.total.toLocaleString())
                $("#total-deaths").html(data.data.summary.deaths.toLocaleString())
                $('#total-discharged').html(data.data.summary.discharged.toLocaleString())
                $("#total-active").html((data.data.summary.total - data.data.summary.deaths - data.data.summary.discharged).toLocaleString())
                // now get calculated data for newCases, newDischarged and newDeaths
                $.get('/handler/India?date=' + last_update, function (response) {
                    $("#new-deaths").html(response.newDeaths.toLocaleString())
                    $("#new-cases").html(response.newCases.toLocaleString())
                    $("#new-discharged").html(response.newDischarged.toLocaleString())
                    $("#new-active").html((response.newCases - response.newDischarged - response.newDeaths).toLocaleString())
                    $('#selected-state').html("India")
                })
            })
        }
        else {
            $.ajax({
                url: "/handler/state?state=" + $("#state-select").val() + "&date=" + last_update
            }).done(response => {
                // make html changes
                $("#total-cases").html(response.totalConfirmed.toLocaleString())
                $("#total-deaths").html(response.deaths.toLocaleString())
                $("#new-deaths").html(response.newDeaths.toLocaleString())
                $("#new-discharged").html(response.newDischarged.toLocaleString())
                $('#total-discharged').html(response.discharged.toLocaleString())
                $("#new-cases").html(response.newCases.toLocaleString())
                $("#new-active").html((response.newCases - response.newDischarged - response.newDeaths).toLocaleString())
                $("#total-active").html((response.totalConfirmed - response.deaths - response.discharged).toLocaleString())
                $('#selected-state').html($("#state-select").val())
            })
            $.get({
                url: '/handler/chartByState?state='+ $("#state-select").val()
            }).done(data=>{
                updateChart(data)
                $("#chart-heading").html('New Cases: '+$("#state-select").val())
            })
        }
    })
})
