import requests
import glob
url = 'https://www.spokenenglish.guru/active-and-passive-voice-rules-tricks-charts-exercises-examples-pdf/'
data = requests.get(url)
htmldata = getdata("url") 
soup = BeautifulSoup(htmldata, 'html.parser') 
data = '' 
for data in soup.find_all("p"): 
    with open('file.txt','w') as out_f:
        out_f.write(data.get_text())




f = open("passive.txt", "w")
f2 = open("active.txt", "w")
cmp="Passive: "
for filename in glob.glob('file.txt'):
    with open(filename, 'r') as infile:
        for tweet in infile.readlines():
            if cmp in tweet:
                f.write(tweet[8:])
            else:
                f2.write(tweet[8:])
f.close()
f2.close()