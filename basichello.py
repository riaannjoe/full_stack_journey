from flask import Flask
app = Flask(__name__) #creates flask app

@app.route('/') #defines home rout (/)
def hello(): #creates fn bound with / n return hello when route page accessed
    return 'HELLO'

if __name__ == '__main__':
    app.run(debug=True) #runs app in debug mode
