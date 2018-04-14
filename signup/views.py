from django.shortcuts import render,redirect
from .forms import allusers1
# Create your views here.

from django.contrib.auth import login as loginwa
from django.contrib.auth import (

    authenticate,

    logout,
    get_user_model,

)

def signup(request):
    # queryset=Currencies.objects.all()
    # b = Currencies(hash=5,Name='shit8me',MarketCap=256,Price=77789.23,Changed24h=12321,PriceGraph7d='HITHERDAMN')
    # b.save()



    form1=allusers1(request.POST or None)
    if form1.is_valid():
        user=form1.save(commit=False)
        username=form1.cleaned_data.get("username")
        password=form1.cleaned_data.get("password")
        user.set_password(password)
        user.save()
        the_user = authenticate(username=username, password=password)
        loginwa(request,the_user)
        return redirect("/userpage")
        #form1.save()


        #print (instance)
    context = {


          "form1": form1,



     }
    return render(request, "signup.html",context)
