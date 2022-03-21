from flask import Flask, render_template, request
import os
import time
import json
from googleapiclient import discovery
from urllib3 import HTTPResponse

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
        activeSentence = request.form.get("active1")
        passiveSentence = request.form.get("passive1") 
        data=[round(getToxicScore(activeSentence)*100,2),round(getToxicScore(passiveSentence)*100,2)]
        absDiff= round(abs(data[1]-data[0]),2)
        avgToxic= (data[1]+data[0])/2
        data.append(absDiff)
        data.append(round(avgToxic,2))
        return render_template("demonstration.html", data=data)
    else:
        return render_template("demonstration.html", data=[])


if __name__ == '__main__':
    app.run(debug=True)