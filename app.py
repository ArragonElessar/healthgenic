from flask import Flask, render_template, request
from data import newData, dataIndia, updateDataStore, topStatesbyNewCases, chartByDays

app = Flask(__name__)

updateDataStore()

# index route
@app.route('/')
def index():
    return render_template('index.html')

# login route
@app.route('/login')
def login():
    return render_template('login.html')

# page to handle get requests for statewise data
@app.route('/handler/state/')
def stateData():
    # state will be passed as parameter
    state = request.args.get('state')
    # date parameter
    today_date = request.args.get('date')[:10]
    # call newData function, gets stateData from data store
    return newData(today_date, state)


@app.route('/handler/India')
def indiaData():
    # data parameter
    date = request.args.get('date')[:10]
    return dataIndia(date)


@app.route('/handler/topStates')
def topStates():
    # recieve date, send top states by number of new cases
    date = request.args.get('date')[:10]
    return topStatesbyNewCases(date, 5)

@app.route('/handler/chartDays')
def chartDays():
    days = int(request.args.get('days'))
    return chartByDays(days, 3)


if __name__ == '__main__':
    app.run(debug=True)
