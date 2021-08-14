from datetime import date
from flask import Flask, render_template, request
from data import newData, dataIndia
app = Flask(__name__)

# gets today's date
today = date.today().strftime("%Y-%m-%d")  

# index route
@app.route('/')
def index():
    return render_template('index.html')

#login route
@app.route('/login')
def login():
    return render_template('login.html')

# page to handle get requests for statewise data
@app.route('/handler/state/')
def stateData():
    # state will be passed as parameter    
    state = request.args.get('state')
    # call newData function, gets stateData from data store
    return newData(today, state)

@app.route('/handler/India')
def indiaData(): 
    # gets data for India, on load of app
    #change here to get last refreshed date
    return dataIndia("2021-08-14")
    

if __name__ == '__main__':
    app.run()
