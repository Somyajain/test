from django.db import models
from django import forms

from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
##UNDELETE IT
# Create your models here.
# class allusers1(UserCreationForm):
#     username=models.CharField(max_length=40)
#     password=models.CharField(max_length=40)
#     phoneno=models.CharField(max_length=10,primary_key=True)
#     otp=models.IntegerField(blank=True,null=True,default=0000)

##UNDELETE IT



    # class Meta:
    #     model=allusers1
    #     fields=(
    #         'username',
    #         'password',
    #         'phoneno',
    #         'otp',
    #     )
    # def save(self,commit=True):
    #     user=super(allusers1,self).save(commit=False)
    #     user.username1=self.cleaned_data['username']
    #     user.password1=self.cleaned_data['password']
    #     user.phoneno1=self.cleaned_data['phoneno']
    #     user.otp1=self.cleaned_data['otp']
    #
    #     if commit:
    #         user.save()
    #
    #     return user
##UNDELETE IT

    # def __str__(self):
    #      return self.username

##UNDELETE IT


# from django.contrib.auth.forms import UserCreationForm
# from django import forms
# from django.contrib.auth.models import User
#
# class RegisterForm(UserCreationForm):
#     email = forms.EmailField(label = "Email")
#     fullname = forms.CharField(label = "First name")
#
#     class Meta:
#         model = User
#         fields = ("username", "fullname",'password', "email", )
#         def save(self, commit=True):
#             user = super(RegisterForm, self).save(commit=False)
#             first_name, last_name = self.cleaned_data["fullname"].split()
#             user.first_name = first_name
#             user.last_name = last_name
#             user.email = self.cleaned_data["email"]
#             if commit:
#                 user.save()
#             return user
#     def __str__(self):
#         return self.username