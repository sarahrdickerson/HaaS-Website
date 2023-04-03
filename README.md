# ECE461L-TeamProject
Team Members: Sarah Dickerson, Aditi Sarlashkar, Gaby Perez, and Suriya Senthilkumar

## To run:
1. Complete the steps in the backend/README.md file
2. Run `flask run --port=8000` in the backend directory
3. Nagivate to the frontend directory
4. Run `npm install`
5. Run `npm start`
Now you should be able to connect to the website at http://localhost:3000

## Setting up
1. Install MongoDB Compass
2. Set the connection string to `mongodb+srv://gabrielaperezgil:ECE461L@cluster0.5v3hp19.mongodb.net/Users`

## How to run backend
1. create your own virtual environment called myenv with `<pythonversion> -m venv myenv` (eg `python3 -m venv myenv`)
2. activate the virtual environment with `source myenv/bin/activate` or `. myenv/bin/activate` (on mac)
3. `pip install -r requirements.txt`
4. `flask run`