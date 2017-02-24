from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name = 'index'),
    # url(r'^bind$', views.index, name = 'bind'),
    # url(r'^add_course$', views.add_course, name = 'add_course'),
    url(r'^new_course$', views.new_course, name = 'new_course'),
    url(r'^course_new$', views.adding_course, name = 'course_new'),
    url(r'^bind$', views.bind, name = 'bind')
]
