
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
   return 'hello Flask!'
#启动这个WEB服务
if __name__ == '__main__':
    #默认为5000端口
    app.run()  #app.run(port=8000)
