import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate("/Users/akankshborah/resume_project/repo/ResumeCreator/backend/app/firebase/resume-creator-c6092-firebase-adminsdk-fbsvc-bb43bcdcd9.json")
firebase_app = firebase_admin.initialize_app(cred)
firestore_db = firestore.client()