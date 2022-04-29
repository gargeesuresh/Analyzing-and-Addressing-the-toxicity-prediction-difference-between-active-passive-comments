from flask import Flask, render_template, request
import os
import time
import json
from googleapiclient import discovery
from urllib3 import HTTPResponse
from types import SimpleNamespace

app = Flask(__name__)

def getToxicScore(x):
    API_KEY = 'AIzaSyAxKkTPxGJHwlBerxLT0zm36mPWkmxM9Jc'

    client = discovery.build(
    "commentanalyzer",
    "v1alpha1",
    developerKey=API_KEY,
    discoveryServiceUrl="https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1",
    #static_discovery=False,
    )

    analyze_request = {
    'comment': { 'text': x },
    'requestedAttributes': {'TOXICITY': {}}
    }

    response = client.comments().analyze(body=analyze_request).execute()
    #time.sleep(2.2)
    return float(response['attributeScores']['TOXICITY']['summaryScore']['value'])


@app.route('/', methods =["GET", "POST"])
def getData():
    if request.method == "POST":
        # x = request.get_json()
        # print(x['active'])
        # print('hello')
        # print(request.is_json)
        # print(request)
        # print(request.get_json()['a'])

        # print(request.data.decode)
        print(request.json['active'])
        print(request.json['passive'])

        # json.loads(request.data.decode('UTF-8'))
        # x = json.loads(request.data.decode('UTF-8'), object_hook=lambda d: SimpleNamespace(**d))
        # print(x)
        activeSentence = request.json['active']
        passiveSentence = request.json['passive']
        # activeSentence = request.form.get("active1")
        # passiveSentence = request.form.get("passive1") 
        data=[round(getToxicScore(activeSentence)*100,2),round(getToxicScore(passiveSentence)*100,2)]
        absDiff= round(abs(data[1]-data[0]),2)
        avgToxic= (data[1]+data[0])/2
        data.append(absDiff)
        data.append(round(avgToxic,2))
        minT= min(round(getToxicScore(activeSentence)*100,2),round(getToxicScore(passiveSentence)*100,2)) 
        maxT= max(round(getToxicScore(activeSentence)*100,2),round(getToxicScore(passiveSentence)*100,2))
        activeT=round(getToxicScore(activeSentence)*100,2)

        activeLength=len(activeSentence.split())
        passiveT =round(getToxicScore(passiveSentence)*100,2)
        passiveLength= len(passiveSentence.split())
        weightedAvgT = ((activeT* activeLength) + (passiveT*passiveLength))/(activeLength + passiveLength )

        data_dic = {'activeT': round(getToxicScore(activeSentence)*100,2),
        'passiveT':round(getToxicScore(passiveSentence)*100,2),
        'min': minT,
        'max':maxT,
        "diff" : absDiff,
        'avg': avgToxic,
        'wAvg': weightedAvgT}
        print(data)
        return data_dic
        return render_template("demonstration.html", data=data)
    else:
        return render_template("demonstration.html", data=[])


if __name__ == '__main__':
    app.config['ENV'] = 'development'
    app.config['DEBUG'] = True
    app.config['TESTING'] = True    
    app.run(debug=True)