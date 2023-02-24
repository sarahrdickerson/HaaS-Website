# make sure you are in the backend folder in cmd
# create myenv or enter existing one (to enter existing one, skip to activate step)
# python -m venv myenv
# install all packages 
# pip install -r requirements.txt
# activate 
# .\myenv\Scripts\activate
# flask run
# http://localhost:5000/userdata to see data

from flask import Flask, jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config['MONGO_URI'] = 'mongodb+srv://gabrielaperezgil:ECE461L@cluster0.5v3hp19.mongodb.net/Existing_Users'
mongo = PyMongo(app)

@app.route('/userdata')
# this is a simple API that returns User Information data
# this will be called by the react front end
def get_data():
    collection = mongo.db.userInfo
    data = []

    for document in collection.find():
        data.append({'username is': document['userName'], 'userID is': document['userID'], 'password is': document['password']})
    return jsonify(data)

if __name__ == '__main__':
    app.run()
