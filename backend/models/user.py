from db import db
import hashlib

class UserModel(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    account = db.Column(db.String(80), nullable=False, unique=True)
    email = db.Column(db.String(50), nullable=False, unique=True)
    category = db.Column(db.Integer)
    password = db.Column(db.String(80), nullable=False)  # sha256

    def __init__(self, account, password, email):
        self.account = account
        self.password = hashlib.sha256(password.encode('utf-8')).hexdigest()
        self.email = email
        self.category = 1

    @classmethod
    def find_by_account(cls, email: str) -> "UserModel":
        return cls.query.filter_by(email=email).first()

    @classmethod
    def find_by_id(cls, _id: int) -> "UserModel":
        return cls.query.filter_by(id=_id).first()

    @classmethod
    def find_all_users(cls) -> ["UserModel"]:
        return cls.query.all()

    @classmethod
    def reset_password(cls, account: str, password: str) -> None:
        user = cls.query.filter_by(email=account).first()
        user.password = password
        db.session.commit()

    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()
