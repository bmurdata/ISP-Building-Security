# ISP-Building-Security
Code and files for my presentation on Building Security using Biometric Authentication
## Slides and Paper
Paper: https://drive.google.com/file/d/1l4snA3AZ4EwPRFBhPnPPtM4XjKat9b3Q/view?usp=sharing  
Slides: https://docs.google.com/presentation/d/1psDOE3S1-BtF_uaGYSCe4L5OzNLAhSPrtmzlWvOjusc/edit?usp=sharing  
YouTube presentation: 
# About
This repo holds code, data, and resources related to my presentation on Building Security with Biometrics. My hypothesis was that a machine learning gait analysis model could do better than humans for ensuring building condfidentiality. 

27 gifs using a subset of this dataset were prepared using the first 25 subjects. 8 of each type were made into gifs, while the 25th had all three types used. Regardless of pose, I used the 90 degree angle for all results. I used an online site Imgflip to convert the stills into gifs.

Using a pure HTML/JS frontend, 6 or 9 were randomly shown to human subjects as authorized users. Once subjects felt confident in identification, 10 gifs were randomly selected, including ones not shown to them, and subjects asked to identify which are authorized and which are not. Results were displayed to subjects, then sent to a Python Flask API backend via the JavaScript fetch api. Both systems were implemented on Replit.

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
