from django.contrib import admin
from .models import Currencies
from .models import Comments
# Register your models here.

admin.site.register(Comments)
admin.site.register(Currencies)

