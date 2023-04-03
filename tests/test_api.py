import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app import app
import json


def test_submit_new_user():
    with app.test_client() as client:
        test_user_data = {
            "username":"gabyperez",
            "userid":"gp",
            "password":"ece461l"
        }
        response = client.post('/api/submit_new_user', json=test_user_data)
        assert response.status_code == 200

def test_login():
    with app.test_client() as client:
        test_user_data = {
            "username":"gabyperez",
            "password":"ece461l"
        }
        response = client.post('/api/login', json=test_user_data)
        assert response.status_code == 200

        test_user_data = {
            "username": "srd2729",
            "password": "ece"
        }
        response = client.post('/api/login', json=test_user_data)
        assert json.loads(response.data)['success'] == False

def test_remove_user():
    with app.test_client() as client:
        test_user_data = {
            "username":"gabyperez"
        }
        response = client.post('/api/remove_user', json=test_user_data)
        assert json.loads(response.data)['success'] == True

        test_user_data = {
            "username": "srd2729"
        }
        response = client.post('/api/remove_user', json=test_user_data)
        assert json.loads(response.data)['success'] == False
