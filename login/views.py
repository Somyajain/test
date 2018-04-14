from django.shortcuts import render,redirect
from .forms import UserLoginForm
from django.http import HttpResponse, HttpResponseNotFound, Http404,  HttpResponseRedirect
from django.contrib.auth.decorators import login_required

from django.contrib.auth import login as auth_loginwa
#from mainpage.models import User
from .models import Userdata
from django.contrib.auth import (

    authenticate,
    logout,
    get_user_model,

)

def login_view(request):
    if request.user.is_authenticated():
            return redirect("userpage")
    form1=UserLoginForm(request.POST or None)



    if form1.is_valid():
        username=form1.cleaned_data.get("username")
        password=form1.cleaned_data.get("password")
        user=authenticate(username=username,password=password)

        auth_loginwa(request,user)

        if(request.user.is_authenticated()):
            return redirect("userpage")
        else:

            form1 = UserLoginForm()
    context= {
        "form1": form1,


    }

    return render(request, "login.html",context)


def logout_view(request):
    logout(request)

    return HttpResponseRedirect("/")

@login_required(login_url='/login')
def userpage(request):

    object1=Userdata.objects.get(user=request.user)

    context={
        "userdata1":object1
    }
    return render (request,"userpage.html",context)

@login_required(login_url='/login')
def increase(request,*args,**kwargs):

    coinadd=kwargs['currencywa2']
    object1=Userdata.objects.get(user=request.user)
    if(coinadd=='Bitcoin Cash'):
        coinadd='BitcoinCash'
    value=getattr(object1,coinadd)
    value=value+1

    setattr(object1,coinadd,value)
    object1.save()
    return HttpResponseRedirect("/userpage/")
    #return render (request,"userpage.html",{})


@login_required(login_url='/login')
def decrease(request,*args,**kwargs):
    # print("Decreasesd")
    # print(kwargs)
    # print(args)
    coinadd=kwargs['currencywa2']
    object1=Userdata.objects.get(user=request.user)
    if(coinadd=='Bitcoin Cash'):
        coinadd='BitcoinCash'
    value=getattr(object1,coinadd)
    if value==0:
        value=value
    else:
        value=value-1
    #print(value)
    setattr(object1,coinadd,value)
    object1.save()
    return HttpResponseRedirect("/userpage/")
    #return redirect("/")
