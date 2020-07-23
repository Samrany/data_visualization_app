
"""Server for data_vis app."""

from flask import (Flask, render_template, request, 
				   session, redirect, jsonify)
from datetime import datetime

# from model import connect_to_db
# import crud
# from random import sample


app = Flask(__name__)
app.secret_key = "pair_project" 

@app.route('/')
def main_page():
	"""Displays main page."""

	return render_template("index.html")

@app.route('/api/get_data', methods = ['GET'])
def get_sales_info():
	""""""
	location_chosen = request.args.get("locationChosen")
	#DB QUERY TBD
	sales_info = {'labels':['March', 'April', 'May'],
				  'data':[300, 400, 500], 'location': location_chosen}
	#sales_info = {1: 300, 2: 400, 3: 500} #temporary

	return jsonify(sales_info)

@app.route('/api/login', methods = ['GET'])
def login():
	""""""

	email = request.args.get("email")
	password = request.args.get("password")
	#query DB IF EXIST RETURN TRUE
	login_cred = True

	return jsonify(login_cred)



if __name__ == '__main__':
	# connect_to_db(app)
	app.run(host='0.0.0.0', debug=True)
