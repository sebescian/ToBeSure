from website import create_app
from . import db
from .website.models import Location
app = create_app()
def create_db():
    db.session.add(Location(city="Cluj-Napoca", county= "Cluj"))
    db.session.add(Location(city="Gherla", county= "Cluj"))
    db.session.add(Location(city="Dej", county= "Cluj"))
    db.session.add(Location(city="Beclean", county= "Bistrita-Nasaud"))
    db.session.add(Location(city="Bistrita", county= "Bistrita-Nasaud"))
    db.session.commit()
if __name__ == '__main__':
    create_db()
    app.run(debug=True)
