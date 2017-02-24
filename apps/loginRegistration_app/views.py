from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages

def index(request):
    return render(request, 'loginRegistration_app/index.html')

def register(request):
    reg_results = User.objects.Register(request.POST['fname'], request.POST['lname'], request.POST['email'], request.POST['pword'], request.POST['c_pword'])

    if reg_results['status']:
        request.session['user_id'] = reg_results['response'].id
        request.session['fname'] = reg_results['response'].first_name
        request.session['from'] = 'registered'
        return redirect('reglog:success')
    else:
        for error in  reg_results['response']:
            messages.error(request, error)
        return redirect('reglog:index')

def login(request):
    myLogin = User.objects.login(request.POST)

    if myLogin['status']:
        request.session['user_id'] = myLogin['response'].id
        request.session['fname'] = myLogin['response'].first_name
        request.session['from'] = 'logged in'
        return redirect('reglog:success')
    else:
        for error in myLogin['response']:
            messages.error(request, error)
        return redirect('reglog:index')

def success(request):
    if 'user_id' not in request.session:
        return redirect('reglog:index')
    return redirect('courses:index')

def logout(request):
    request.session.clear()
    return redirect('reglog:index')
