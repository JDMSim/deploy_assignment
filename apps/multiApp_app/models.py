from __future__ import unicode_literals
from django.db import models
from ..loginRegistration_app.models import User

class CourseManager(models.Manager):
    def add_course(self, postData):
        error_list = []
        if not postData['crs_no']:
            error_list.append('Please enter course No.')

        if not postData['title']:
            error_list.append('Please enter course name')
        else:
            if self.filter(title = postData['title']):
                error_list.append('Course already exists')

        if error_list:
            content = {'status':0, 'errors':error_list}
            return content
        else:
            self.create(course_no = postData['crs_no'], title = postData['title'], description = postData['dscrptn'])
            content = {'status':1}
            return content

    def add_user_to_course(self, postData):
        try:
            user = User.objects.get(id = postData.get('user_id', ''))
            course = self.get(id = postData.get('course_id', ''))

            course.users.add(user)
        except:
            content={'status': 0,'errors': 'Select a User and a Course'}
            return content


class Course(models.Model):
    course_no = models.PositiveIntegerField()
    title = models.CharField(max_length = 100)
    description = models.TextField(max_length = 1000)
    users = models.ManyToManyField(User, related_name = 'all_courses')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = CourseManager()
# Create your models here.
