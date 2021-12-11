from flask import Flask, request
from flask_cors import CORS
from flask import jsonify
from datetime import datetime
from pytz import timezone
app = Flask('app')
cors=CORS(app)
app.config['CORS_HEADERS']='Content-Type'

@app.route('/')
def hello_world():
  return '<h1>Hello, World!</h1>'
@app.route('/write')
def writeData():
  # Guess, Actual, image, type, seq, timestamp, number
  guess  =request.args.get('g') if request.args.get('g') != None else "Not Provided"
  # actual =request.args.get('a') if request.args.get('a') != None else "Not Provided"
  # imgPath=request.args.get('i') if request.args.get('i') != None else "Not Provided"
  # imgType=request.args.get('t') if request.args.get('t') != None else "Not Provided"
  # seq    =request.args.get('s') if request.args.get('s') != None else "Not Provided"
  # num    =request.args.get('num') if request.args.get('num') != None else "Not Provided"
  est=timezone('US/Eastern')
  date_time=datetime.now(est).strftime("%m/%d/%Y,%H:%M:%S")
  
  with open("results.csv","a") as of:
    # of.write(num+","+date_time+","+guess+","+actual+","+imgPath+","+imgType+","+seq+"\n")
    of.write(date_time+", "+guess+"\n")
  data = {'status': 'All Good'}
  return jsonify(data), 200
app.run(host='0.0.0.0', port=8080)