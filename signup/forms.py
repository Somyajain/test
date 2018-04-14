from django import forms
from django import forms
#from django.contrib.auth.models import User
#from mainpage.models import User
from django.contrib.auth.forms import UserCreationForm
#from django.contrib.auth.hashers import make_password

from django.contrib.auth import (

    authenticate,
    login,
    logout,
    get_user_model,

)

User=get_user_model()

# Create your models here.
class allusers1(forms.ModelForm):
    #username=forms.CharField(label = "Username")#="USSSERRNAME",max_length=40)
    password=forms.CharField(label="Password",max_length=40,widget=forms.PasswordInput)
    #phoneno1=forms.CharField(label = "phonewa",max_length=10)
    #otp1=forms.IntegerField(label="OTPP",required=False)


    class Meta:
        model = User

        fields=(
            'username',

            'password',

        )
        # widgets = {
        #     'password': forms.PasswordInput(),
        # }
    # def save(self,commit=True):
    #     user=super(allusers1,self).save(commit=False)
    #     #user=super().save(commit=False)
    #     user.username=self.cleaned_data['username']
    #
    #     #user.password=make_password['password']
    #     user.set_password=self.cleaned_data['password']
    #
    #     #user.phoneno1=self.cleaned_data['phoneno1']
    #     #user.otp1=self.cleaned_data['otp1']
    #
    #     if commit:
    #         user.save()
    #
    #     return user



#
# class allusers1(RegisterForm):
#     class Meta:
#         model = User
#         # widgets = {
#         # 'password': forms.PasswordInput(),
#         # }
#         fields = ['username','password','fullname']
#
