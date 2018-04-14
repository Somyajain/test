from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.shortcuts import render, get_object_or_404, redirect
from currency.models import Currencies
from currency.models import Comments
#from .models import Currencies

def home2(request):
    #queryset=Currencies.objects.all()
    #b = Currencies(hash=5,Name='shit8me',MarketCap=256,Price=77789.23,Changed24h=12321,PriceGraph7d='HITHERDAMN')
    #b.save()
    #instance = get_objects_or_404(Comments)
    instance = Comments.objects.all()
    context = {
    #    "object_list": queryset,
         "instance" : instance,
    }
    return render(request, "home2.html",context)
