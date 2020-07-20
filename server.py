
"""Server for data_vis app."""

from flask import (Flask, render_template, request, 
				   session, redirect, jsonify)

# from model import connect_to_db
# import crud
# from random import sample


app = Flask(__name__)
app.secret_key = "pair_project" 

@app.route('/')
def main_page():
	"""Displays main page."""

return render_template("main_page.html")





if __name__ == '__main__':
	# connect_to_db(app)
	app.run()