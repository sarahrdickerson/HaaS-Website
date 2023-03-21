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

