# make sure you are in the backend folder in cmd
# create myenv or enter existing one (to enter existing one, skip to activate step)
# python -m venv myenv
# install all packages 
# pip install -r requirements.txt
# activate 
# .\myenv\Scripts\activate
# flask run --port=8000
# http://localhost:8000/userdata to see data

from flask import Flask, jsonify, request
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb+srv://gabrielaperezgil:ECE461L@cluster0.5v3hp19.mongodb.net/Users'
mongo = PyMongo(app)

# this is a simple API that returns User Information data
# this will be called by the react front end
@app.route('/userdata')
def get_user_data():
    database = mongo.db['Users']
    collection = database['gabrielaperez']
    data = []

    for document in collection.find():
        data.append({'userid is': document['userid'], 'password is': document['password']})
    return jsonify(data)


# api for submitting new user data
# defining the endpoint for application with HTTP method POST
# @app.route('/api/submit_new_user', methods=['POST'])
# def submit_new_user():
#     # process data
#     user_data = request.get_json()
    
#     # get the username, since the collection will be named after the user as shown in HW 4
#     collection = user_data['username']
#     new_collection = mongo.db
    
# example user_data
#     {
#   "username": "gabrielaperez",
#   "userid": gp,
#   "password": ECE461L
# }

    #database = mongo.db.Existing_users


if __name__ == '__main__':
    app.run(port=8000, debug=True)


