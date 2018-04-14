# from django.conf import settings
# from currency.models import Currencies
# from django.shortcuts import render
# from django.http import HttpResponse, HttpResponseRedirect, Http404
# from django.shortcuts import render, get_object_or_404, redirect
# from .models import Comments
# from .forms import CommentForm
#
# #from .models import Currencies
#
# # Create your views here.
#
#
#
# def mycommentview(request):
#
#     commentsinstance = Comments.objects.all()
#     currency_objectwa=Currencies.objects.get(id=2)
#
#     inititss={
#         "user":request.user,
#         "post":currency_objectwa,
#     }
#     myformofcomments=CommentForm(request.POST or None,initial=inititss)
#     if myformofcomments.is_valid():
#         #userwa=myformofcomments.cleaned_data.get('user')
#         #postwa=myformofcomments.cleaned_data.get('post')
#         commentdata=myformofcomments.cleaned_data.get("content")
#
#         createdcomment=Comments.objects.create(
#             user=request.user,
#             post=currency_objectwa,
#             content=commentdata
#
#         )
#         if createdcomment:
#             print("yeah it worked")
#
#     else:
#         myformofcomments = CommentForm()
#
#
#
#
#
#     context = {
#     #    "object_list": queryset,
#          "comments" : commentsinstance,
#          "myformofcomments": myformofcomments,
#     }
#     return render(request, "currency.html",context)
