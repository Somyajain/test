# from django.db import models
# from django.conf import settings
# from currency.models import Currencies
# # Create your models here.
# class Comments(models.Model):
#     user        =models.ForeignKey(settings.AUTH_USER_MODEL,default=1)
#     post        =models.ForeignKey(Currencies)
#     content     =models.TextField()
#     timestamp   =models.DateTimeField(auto_now_add=True)
#     def __uniode__(self):
#         return self.user.username
#     def __str__(self):
#         return self.user.username
#
#     class Meta:
#         ordering=['-timestamp']
