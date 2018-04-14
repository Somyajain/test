from django import forms
#from mainpage.models import User

#from signup.models import allusers1
#from signup.models import allusers3

from django.contrib.auth import (

    authenticate,
    login,
    logout,
    get_user_model,

)

User=get_user_model()


class UserLoginForm(forms.Form):
        # class Meta:
        #     model = User
        #     fields=['username','password']
        #     widgets = {
        #     'password': forms.PasswordInput(),
        #     }
        username=forms.CharField(max_length=40)
        password=forms.CharField(max_length=40,widget=forms.PasswordInput)


        def clean(self,*args,**kwargs):
            username=self.cleaned_data.get("username")
            password=self.cleaned_data.get("password")
            print ("Hey username= "+username)
            print ("Hey password= "+password)
            # user_qs=User.objects.filter(username=username)
            # if user_qs.count() ==1:
            #     user=user_qs.first()


            user_qs = User.objects.filter(username=username)
            if user_qs.count() == 0:
                raise forms.ValidationError("The user does not exist")
            else:
                if username and password:
                     user = authenticate(username=username, password=password)

                     if not user:
                        raise forms.ValidationError("Incorrect password")
                     if not user.is_active:
                         raise forms.ValidationError("This user is no longer active")


            return super(UserLoginForm,self).clean(*args,**kwargs)





                         # if username and password:
                         #     user=authenticate(username=username,password=password)
                         #     if not user:
                         #         raise forms.ValidationError("This user doesn't exist")
                         #     if not user.check_password(password):
                         #         raise forms.ValidationError("Incorrect Passwordt")
                         # if not user.is_active:
                         #     raise forms.ValidationError("User no longer Active")
                         #return self.clean(*args,**kwargs)
                         #return self.cleaned_data

