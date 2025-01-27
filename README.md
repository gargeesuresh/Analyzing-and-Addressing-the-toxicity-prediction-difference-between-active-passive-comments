
# Analyzing and Addressing the toxicity prediction difference between different comments with same semantic meaning  in google's Perspective API

<img src="./img/pr2.png" align="right"
     alt="Perspective API logo by google" width="120" height="120">

In this study, we attempt to analyze the gap in toxicity score predictions between different voices(active/passive forms) of the same sentences. Furthermore, we discuss possible solutions to ovecome this gap and provide a more consistent result. The toxicity scores compared across our study refers to google's Perspective API toxicity scores. 

## Overview

* We have written a **python script** to scrape data from [Grammar websites](https://englishgrammarhere.com/active-passive-voice/100-examples-of-active-and-passive-voice-in-english/) containing examples of active-passive voice sentences
* Using the script, we have built our own **Dataset for Active/Passive voice forms of a sentence**, with 365 lines of Active/Passive voice sentences currently (which we plan to expand in the near future)
* We used Google's **Perspective API** to predict toxicity scores for these sentences. Using these values, we prove the inconsistency of toxic score predictions between Active/Passive voices.
* Furthermore, we propose **4 different approaches** that can be utitlized to overcome this discrepancy and produce more consistent results. 
Namely, 
  * minimum
  * maximum
  * average
  * weighted average

<p align="center">
  <img src="./img/pr1.png" alt="Perspective API" width="738">
</p>

## Demonstrating with examples
* Consider the set of comments under this YouTube [Video](https://www.youtube.com/watch?v=NMHmpB81RTc)
          <p align="center">
            <img src="./img/ss1.PNG" alt="Sample video" width="738">
          </p>
          <p align="center">
            <img src="./img/ss2.PNG" alt="Sample comments" width="738">
          </p>
* Fetching these comments, generating their opposite voice forms(active->passive and vice-versa) using a Data-Augmentation library [TextGenie](https://github.com/hetpandya/textgenie), we create a database. 
         <p align="center">
            <img src="./img/ss3.PNG" alt="Dataframe1" width="738">
          </p>
* Here is what a Sample API call to Perspective API looks like. Using the `attributeScores[TOXICITY[SummaryScore[value]]]` we add the toxicity values to the active/passive voice comments in the database.
    ```
    {
  "attributeScores": {
    "TOXICITY": {
      "spanScores": [
        {
          "begin": 0,
          "end": 12,
          "score": {
            "value": 0.0558327,
            "type": "PROBABILITY"
          }
        }
      ],
      "summaryScore": {
        "value": 0.0558327,
        "type": "PROBABILITY"
      }
    }
  },
  "languages": [
    "en"
  ],
  "detectedLanguages": [
    "en"
  ]
     }
     ```
     <p align="center">
       <img src="./img/ss4.PNG" alt="Perspective API" width="1000">
     </p>
As shown in the Datatbase, the difference in Toxicity scores for the very same sentences with different voice forms(active/passive) varies upto 30% in just this instance of  examples alone.
* In order to maintain consistency over toxicity scores for different voices in sentences, we propose the following methods.
     * **Minimum**
     * **Maximum**
     * **Average**
     * **Weighted Average with word count** 
<p align="center">
  <img src="./img/ss5.PNG" alt="Perspective API" width="700">
</p>
<p align="center">
  <img src="./img/ss6.PNG" alt="Perspective API" width="700">
</p>

 <p align="center">
  <img src="./img/ss7.PNG" alt="Perspective API" width="700">
</p>

<p align="center">
  <img src="./img/ss8.PNG" alt="Perspective API" width="700">
</p>

## References

* [Perspective API](https://perspectiveapi.com/#/home)
* [Grammar websites](https://englishgrammarhere.com/active-passive-voice/100-examples-of-active-and-passive-voice-in-english/)
* [Deceiving Google’s Perspective API Built for
Detecting Toxic Comments](https://arxiv.org/pdf/1702.08138.pdf)


 ## Contributors

* [Gargee Suresh](https://github.com/gargeesuresh)
* [Pranav Bhargav Gopinath](https://github.com/pranavb747)
* [Shridhar Reddy](https://github.com/shridhar007reddy)
* [Anand CR](https://github.com/anand-cr) 

