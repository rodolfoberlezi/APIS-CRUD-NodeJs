from flask import Flask
from flask_restful import Resource, Api

class Setence(Resource):
    def get(self):
        return {
            'title': 'Card title',
            'sentence': 'Read this card dude'
            }
    
    def post(self):
        return 200
    
def init_service():
    app = Flask(__name__)
    api = Api(app)
    api.add_resource(Setence, '/sentence')
    return app