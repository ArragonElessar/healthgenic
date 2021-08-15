from flask import Flask, render_template, request
from data import newData, dataIndia, updateDataStore, topStatesbyNewCases, chartByDays, chartDataByState

app = Flask(__name__)

# index route
@app.route('/')
def index():
    return render_template('index.html')

@app.errorhandler(404)
def page_not_found():
    return render_template('404.html')

# page to handle get requests for statewise data
@app.route('/handler/state/')
def stateData():
    # state will be passed as parameter
    state = request.args.get('state')
    # date parameter
    today_date = request.args.get('date')[:10]
    # call newData function, gets stateData from data store
    return newData(today_date, state)

# route to provide data for India
@app.route('/handler/India')
def indiaData():
    # data parameter
    date = request.args.get('date')[:10]
    return dataIndia(date)

#route to provide the top 5 contributing states by New Cases
@app.route('/handler/topStates')
def topStates():
    # recieve date, send top states by number of new cases
    date = request.args.get('date')[:10]
    return topStatesbyNewCases(date, 5)

# route to send data to make a chart (INDIA)
@app.route('/handler/chartDays')
def chartDays():
    days = int(request.args.get('days'))
    return chartByDays(days, 3)

# route to send data for chart given a state
@app.route('/handler/chartByState')
def chartByState():
    state = request.args.get('state')
    return chartDataByState(900, 3, state)

# function to compare dates and update datastore
#updateDataStore()

if __name__ == '__main__':
    app.run(debug=True)
