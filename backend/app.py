from flask import Flask, jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config['MONGO_URI'] = 'mongodb+srv://gabrielaperezgil:ECE461L@cluster0.5v3hp19.mongodb.net/mydatabase'
mongo = PyMongo(app)

@app.route('/data')
def get_data():
    collection = mongo.db.mycollection
    data = []

    for document in collection.find():
        data.append({'username is': document['userName'], 'userID is': document['userID'], 'password is': document['password']})
    return jsonify(data)

if __name__ == '__main__':
    app.run()
