# Analyzing and Addressing the toxicity prediction difference between active/passive comments in google's Perspective API

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
       <img src="./img/ss1.png" alt="Sample video" width="738">
     </p>
     <p align="center">
       <img src="./img/ss2.png" alt="Sample comments" width="738">
     </p>
*
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
