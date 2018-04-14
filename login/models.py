from django.db import models

from django.db.models.signals import post_save
from django.db import models
from django.conf import settings
from django.contrib.auth.models import User

# Create your models here.
class Userdata(models.Model):
    user        =models.ForeignKey(settings.AUTH_USER_MODEL,default=1)
    #post        =models.ForeignKey(Currencies)
    Bitcoin     =models.IntegerField(default=0)
    Ethereum    =models.IntegerField(default=0)
    Ripple      =models.IntegerField(default=0)
    BitcoinCash=models.IntegerField(default=0)
    Litecoin    =models.IntegerField(default=0)
    Cardano     =models.IntegerField(default=0)
    NEO         =models.IntegerField(default=0)
    Stellar     =models.IntegerField(default=0)
    EOS         =models.IntegerField(default=0)

    def __uniode__(self):
        return self.user.username
    def __str__(self):
        return self.user.username


def create_profile(sender,**kwargs):
    if kwargs['created']:
       Userdata.objects.create(user=kwargs['instance'])

post_save.connect(create_profile,sender=User)
