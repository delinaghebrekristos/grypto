from flask import Flask
import requests
import logging
import json
 
app = Flask(__name__)

@app.route("/")
def message():
    logging.basicConfig(level=logging.DEBUG, filename='myapp.log', format='%(asctime)s %(levelname)s:%(message)s')
    url = 'https://rest.coinapi.io/v1/assets'    
    headers = {'X-CoinAPI-Key' : '9E88C467-6CC5-4DD7-AEAF-1DBE2A6B314E'}
    r = requests.get(url, headers=headers)
    logging.debug(r)  
    rStr =  r.text    
    return rStr    
    
if __name__=="__main__":
    app.run(debug=True)