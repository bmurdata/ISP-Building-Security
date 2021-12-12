# ISP-Building-Security
Code and files for my presentation on Building Security using Biometric Authentication
# About
This repo holds code, data, and resources related to my presentation on Building Security with Biometrics. My hypothesis was that a machine learning gait analysis model could do better than humans for ensuring building condfidentiality. 

I ran an experiment using a subset of the CASIA-B dataset, where I created GIFs of 25 of their 125 subjects. For the first 24, I used 8 each of a subject walking normally, walking with a bag, and walking with a coat. For the last, I used samples of all three types. This gave me a total of 27 gifs. 

I showed random samples of them to subjects via a HTML/JS frontend, with a Python Flask API backend for data collection. Subjects were shown 6 or 9 gifs, asked to remember them, then asked to identify 10 randomly selected gifs as previously seen(authorized) or not(unauthorized).

I was able to run 20 successful trials. Overall, I found that humans could guess right about 45% of the time, and got wrong about 55%. This, compared to previous work using machine learning models averaging 70-95% accuracy, meant my hypothesis was correct. However, there were some issues.

Full results, and a more detailed description, can be found in the slides and PDF in this repo. The data can be found in the backend surveyapi.


## Code
### Frontend:
HTML,CSS, JS. Fetch API used to communicate with backend.  
Link:https://quizSurvey.brianmurphy11.repl.co
Replit: https://replit.com/@BrianMurphy11/quizSurvey#index.html
### Backend:
Python Flask API to 
Play Link: https://surveyAPI.brianmurphy11.repl.co
Replit: https://replit.com/@BrianMurphy11/surveyAPI#main.py

# Acknowledgements
NYU ISP Professors
* Paola Garcia, MS.
* Brandon Sloane, MS.
* Aspen Olmsted, Ph. D.

ISP TAs:
* Roman Garber
* Kiran Chaudhry
* Alon Hillel-Tuch
* Steven Angulo
* Julio Nunez

Institute of Automation, Chinese Academy of Science, for their CASIA datasets!

The OpenGait team for their work, it helped me tremendously for my paper. One day, I hope to run it myself!
https://github.com/ShiqiYu/OpenGait
Open Gait Team (OGT)
*  Chao Fan (樊超), 12131100@mail.sustech.edu.cn
*  Chuanfu Shen (沈川福), 11950016@mail.sustech.edu.cn
*  Junhao Liang (梁峻豪), 12132342@mail.sustech.edu.cn
