from flask import Blueprint, render_template, request, flash, jsonify, url_for, redirect
from flask_login import login_required, current_user, login_manager
from .models import Trip, Location
from . import db

views = Blueprint('views', __name__)

@views.route('/', methods=['GET', 'POST'])
@login_required
def home():
    if request.method == 'POST':
        sosire_oras = request.form.get('sosire_oras')
        sosire_judet = request.form.get('sosire_judet')
        sosire_id = Location.query.filter_by(city = sosire_oras, county= sosire_judet).first()
        plecare_oras = request.form.get('plecare_oras')
        plecare_judet = request.form.get('plecare_judet')
        plecare_id = Location.query.filter_by(city = plecare_oras, county= plecare_judet)
        new_trip = Trip(start_id =plecare_id, stop_id = sosire_id)
        conetct_info = request.form.get('contectInfo')
        if conetct_info:
            db.session.add(new_trip)
            db.session.commit()

    return render_template("userInterface.html", user=current_user)


