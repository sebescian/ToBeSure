from . import db
from flask_login import UserMixin
from sqlalchemy.sql import func


class Trip(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    start_id = db.Column(db.Integer, db.ForeignKey('location.id'))
    stop_id = db.Column(db.Integer, db.ForeignKey('location.id'))
    date = db.Column(db.DateTime(timezone=True), default=func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.String(150))
    first_name = db.Column(db.String(150))
    last_name = db.Column(db.String(150))
    loc_id = db.Column(db.Integer, db.ForeignKey('loc.id'))
    trips = db.relationship('Trip')

class Location(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    county = db.Column(db.String(150))
    city = db.Column(db.String(150))