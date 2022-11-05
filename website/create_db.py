from .__init__ import db
from models import Location

def create_db():
    db.session.add(Location(city="Cluj-Napoca", county= "Cluj"))
    db.session.add(Location(city="Gherla", county= "Cluj"))
    db.session.add(Location(city="Dej", county= "Cluj"))
    db.session.add(Location(city="Beclean", county= "Bistrita-Nasaud"))
    db.session.add(Location(city="Bistrita", county= "Bistrita-Nasaud"))
    db.session.commit()