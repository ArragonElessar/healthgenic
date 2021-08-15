from datetime import datetime
import requests
from json import loads, load
# data store, everyday since march 2020
with open('./static/data/data.json', 'r') as myFile:
    global data
    data = load(myFile)



def chartDataByState(n_days, step, state):
    state_index = 0
    for i in range(len(data["data"][-1]["regional"])):
        if data["data"][-1]["regional"][i]["loc"] == state:
            state_index = i
    # return object template
    info = {"dates": [], "newCases": []}

    for i in range(0, int(n_days/step), step):
        change = (data["data"][len(data["data"])-1 - i]["regional"][state_index]["totalConfirmed"] - data["data"][len(data["data"])-2 - i]["regional"][state_index]["totalConfirmed"])
        date = data["data"][len(data["data"])-1 - i]["day"]
        # to remove unruly data
        if change != 0:
            info["newCases"].append(change)
            info["dates"].append(date)
        else:
            n_days += 1
    # reverse the arrays so that earliest data goes first
    info["newCases"].reverse()
    info["dates"].reverse()

    return info

# datetime.strptime(day["day"],'%Y-%m-%d')
# returns data given a date and a state


def newData(date, state):
    # state index, the index of the state in a list
    state_index = 0
    # current date variables
    a_confirmed = 0
    a_deaths = 0
    a_discharged = 0
    # variables to hold data of day before the current day
    b_confirmed = 0
    b_deaths = 0
    b_discharged = 0
    # return dictionary
    return_dict = {}

    # search using date
    for i in range(len(data["data"])):
        if data["data"][i]["day"] == date:
            # given date's values
            for j in range(len(data["data"][i]["regional"])):
                # search using state
                if data["data"][i]["regional"][j]["loc"] == state:
                    # store index of state
                    state_index = j

                    # store data in variables
                    a_confirmed = data["data"][i]["regional"][j]["totalConfirmed"]
                    a_deaths = data["data"][i]["regional"][j]['deaths']
                    a_discharged = data["data"][i]["regional"][j]['discharged']

                    # add data to return dictionary
                    return_dict["totalConfirmed"] = data["data"][i]["regional"][j]["totalConfirmed"]
                    return_dict['deaths'] = data["data"][i]["regional"][j]['deaths']
                    return_dict['discharged'] = data["data"][i]["regional"][j]['discharged']
            # given date-1's values
            # get data for previous day's data
            b_confirmed = data["data"][i -
                                       1]["regional"][state_index]["totalConfirmed"]
            b_deaths = data["data"][i-1]["regional"][state_index]['deaths']
            b_discharged = data["data"][i -
                                        1]["regional"][state_index]['discharged']
            # add the difference to get current days new data
            return_dict['newCases'] = a_confirmed - b_confirmed
            return_dict['newDeaths'] = a_deaths - b_deaths
            return_dict['newDischarged'] = a_discharged - b_discharged
    return(return_dict)

# function to get data for india (all states' sum)


def dataIndia(date):
    # similar process to getData
    for i in range(len(data["data"])):
        if data["data"][i]["day"] == date:
            return {"newCases": data["data"][i]["summary"]["total"]-data["data"][i-1]["summary"]["total"],
                    "newDeaths": data["data"][i]["summary"]["deaths"]-data["data"][i-1]["summary"]["deaths"],
                    "newDischarged": data["data"][i]["summary"]["discharged"]-data["data"][i-1]["summary"]["discharged"]
                    }


# this function returns top states acc to new Cases, and their statistics
def topStatesbyNewCases(date, number):
    # mandatory since there are only 36 states
    if number <= 35:
        newCaseByState = []
        # find our date
        for i in range(len(data["data"])):
            if data["data"][i]["day"] == date:
                # traverse across all states on given data
                for j in range(len(data["data"][i]["regional"])):
                    # for each state, calculate new (current day's) values and append to newCaseByState
                    newCaseByState.append({
                        'state': data["data"][i]["regional"][j]["loc"],
                        'newCases': data["data"][i]["regional"][j]["totalConfirmed"]-data["data"][i-1]["regional"][j]["totalConfirmed"],
                        'newDeaths': data["data"][i]["regional"][j]["deaths"]-data["data"][i-1]["regional"][j]["deaths"],
                        'newDischarged': data["data"][i]["regional"][j]["discharged"]-data["data"][i-1]["regional"][j]["discharged"]
                    })
        # return the first (number) of states with data sorted wrt newCases
        return {"data": sorted(newCaseByState, key=lambda k: k['newCases'], reverse=True)[:number]}
    else:
        return False

# this function returns newCase Data for India going back from the latest available date


def chartByDays(n_days, step):

    # return object template
    info = {"dates": [], "newCases": []}
    # divides n days into steps to reduce data load, whilst sending accurate data
    for i in range(0, int(n_days/step), step):
        change = data["data"][len(data["data"])-1 - i]["summary"]["total"] - \
            data["data"][len(
                data["data"])-2 - i]["summary"]["total"]
        date = data["data"][len(data["data"])-1 - i]["day"]
        # to remove unruly data
        if change != 0:
            info["newCases"].append(change)
            info["dates"].append(date)
        else:
            n_days += 1
    # reverse the arrays so that earliest data goes first
    info["newCases"].reverse()
    info["dates"].reverse()

    return info

def updateDataStore():
    dataStoreLatest = datetime.strptime(
        "2021-08-14T02:30:00.000Z"[:10], '%Y-%m-%d')
    r = requests.get('https://api.rootnet.in/covid19-in/stats/latest')
    response = loads(r.text)
    latestAPI = datetime.strptime(
        response["lastOriginUpdate"][:10], '%Y-%m-%d')
    print(dataStoreLatest, latestAPI)
    if(latestAPI > dataStoreLatest):
        history = requests.get(
            'https://api.rootnet.in/covid19-in/stats/history')
        with open('./static/data/data.json', 'w') as myFile:
            myFile.write(history.text)
            print("updated")
    else:
        print("up to date")