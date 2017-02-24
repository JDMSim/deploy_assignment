from django.shortcuts import render, redirect
from .models import Course
from ..loginRegistration_app.models import User
from django.db.models import Count
from django.contrib import messages

def index(request):
    user_course_binding = Course.objects.annotate(num_users = Count('users'))
    content = {'users':User.objects.all(), 'courses':Course.objects.all(), 'bindings':user_course_binding}
    return render(request, 'multiApp_app/index.html', content)

def new_course(request):
    return render(request, 'multiApp_app/new_course.html')

def adding_course(request):
    added_course = Course.objects.add_course(request.POST)
    if not added_course['status']:
        for error in added_course['errors']:
            messages.error(request, error)
        return redirect('courses:new_course')
    else:
        return redirect('courses:index')

def bind(request):
    user_course = Course.objects.add_user_to_course(request.POST)
    if not user_course['status']:
        messages.error(request, user_course['errors'])
        return redirect('courses:index')
    else:
        return redirect('courses:index')
