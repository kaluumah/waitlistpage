from flask import Flask, render_template, request, redirect
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/waitlist', methods=['POST'])
def join_waitlist():
    # Handle email submission
    return {'status': 'success'}

if __name__ in "_main_":
    app.run(debug=True)