from __future__ import unicode_literals
from django.db import models
import re, bcrypt

class RegistrationManager(models.Manager):
    def Register(self, first_name, last_name, email, pword, c_pword):
        error_list = []
        # First name valication
        if len(first_name) < 1:
            error_list.append ('First name cannont be empty')

        #Last name validation
        if len(last_name) < 1:
            error_list.append('Last name cannont be empty')

        #Email validation
        if len(email) < 1:
            error_list.append('Email cannont be empty')
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if EMAIL_REGEX.match(email):
            if self.filter(email = email):
                error_list.append('Email already exists')
        else:
            error_list.append('Invalid email format')

        #Password validation
        if len(pword) < 8:
            error_list.append('Password must at least be 8 characters long')

        if not pword == c_pword:
            error_list.append('Password does not match')

        if len(error_list) < 1:
            en_pword = pword.encode()
            hashed_pw = bcrypt.hashpw(en_pword, bcrypt.gensalt())
            self.create(first_name = first_name, last_name = last_name, email = email, password = hashed_pw)
            userData = self.filter(email = email)
            content = {'status': 1, 'response': userData[0]}
            return content
        else:
            content={'status': 0,'response': error_list}
            return content

    def login(self, postData):
        login_error = []
        userData = self.filter(email = postData['email'])
        print len(userData)
        if not userData:
            login_error.append('Email does not exists')
            content = {'status': 0, 'response': login_error}
            return content
        else:
            if bcrypt.hashpw(postData['pword'].encode(), userData[0].password.encode()) == userData[0].password:
                content = {'status': 1, 'response': userData[0]}
                return content
            else:
                login_error.append('The password is incorrect')
                content ={'status': 0, 'response': login_error}
                return content


class User(models.Model):
    first_name = models.CharField(max_length = 100)
    last_name = models.CharField(max_length = 100)
    email = models.EmailField()
    password = models.CharField(max_length = 100)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = RegistrationManager()
# Create your models here.
