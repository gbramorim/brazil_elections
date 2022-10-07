from urllib import response
from urllib.request import urlopen
from flask import Flask
from flask_restful import Resource, Api
import sys
import json
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
port = 5100
CORS(app, support_credentials=True)

url = "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json"

response = urlopen(url)

data_json = json.loads(response.read())

if sys.argv.__len__() > 1:
    port = sys.argv[1]
print("Api running on port : {} ".format(port))


class topic_tags(Resource):
    def get(self):
        for i in data_json['cand']:
            test = i['nm'], i['cc'], i['pvap'], i['vap']
            print(type(test))
            return json.dumps(test)


api.add_resource(topic_tags, '/')


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=port)
