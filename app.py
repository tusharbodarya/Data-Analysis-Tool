from flask import Flask, render_template, jsonify
import pandas as pd

app = Flask(__name__)

data = pd.read_csv('category.csv')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_data')
def get_data():
    processed_data = data.to_dict(orient='records')
    return jsonify(processed_data)

if __name__ == '__main__':
    app.run(debug=True)
