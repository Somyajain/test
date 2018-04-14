from django.shortcuts import render
from django.conf import settings
from .models import Currencies
from django.contrib.auth.decorators import login_required
from django.shortcuts import render,redirect
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.shortcuts import render, get_object_or_404, redirect
from .models import Comments
from .forms import CommentForm
# from google.cloud import language
# from google.cloud.language import enums
# from google.cloud.language import types

# articles=[]
# sc=[]
# magni=[]
# for i in articles:
#     sentimentAna(i)
# def sentimentAna(detail):
#     document = types.Document(
#             content=detail,
#             type=enums.Document.Type.PLAIN_TEXT)
#     sentiment = client.analyze_sentiment(document=document).document_sentiment
#     score.append(sentiment.score)
#     magnitude.append(sentiment.magnitude)


mydict={
        "Bitcoin":1,
        "Ethereum":2,
        "Ripple":3,
        "Bitcoin Cash":4,
        "Litecoin":5,
        "Cardano":6,
        "NEO":7,
        "Stellar":8,
        "EOS":9,
    }


def curr1(request,*args,**kwargs):
    # print(mydict[kwargs])
    # print(mydict[kwargs])
    shit=kwargs['currencywa']
    print(shit)

    currency_objectwa=Currencies.objects.get(id=mydict[shit])


    commentsinstance = Comments.objects.filter(post=currency_objectwa)

    inititss={
        "user":request.user,
        "post":currency_objectwa,
    }
    myformofcomments=CommentForm(request.POST or None,initial=inititss)
    if myformofcomments.is_valid():
        #userwa=myformofcomments.cleaned_data.get('user')
        #postwa=myformofcomments.cleaned_data.get('post')
        commentdata=myformofcomments.cleaned_data.get("content")

        createdcomment=Comments.objects.create(
            user=request.user,
            post=currency_objectwa,
            content=commentdata

        )
        if createdcomment:
            return HttpResponseRedirect("/currency/"+shit)


    else:
        myformofcomments = CommentForm()


    context = {
    #    "object_list": queryset,
         "comments" : commentsinstance,
         "kwargs": kwargs,
         "myformofcomments": myformofcomments,
    }
    return render(request, "currency.html",context)
