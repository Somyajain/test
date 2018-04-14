from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.conf import settings

urlpatterns = [
    # Examples:

    url(r'^$', 'mainpage.views.home2', name='home2'),

    url(r'^signup/', 'signup.views.signup', name='signup'),
    # url(r'^blog/', include('blog.urls')),
    #url(r'^mycommentview/', 'comments.views.mycommentview', name='mycommentnamewa'),
    url(r'^logout/', 'login.views.logout_view', name='logout'),
    url(r'^login/', 'login.views.login_view', name='login'),
    url(r'^currency/(?P<currencywa>[\w|\W]+)/', 'currency.views.curr1', name='curr1'),

    url(r'^userpageinc/(?P<currencywa2>[\w|\W]+)/$', 'login.views.increase', name='increase'),
    url(r'^userpagedec/(?P<currencywa2>[\w|\W]+)/$', 'login.views.decrease', name='decrease'),

    url(r'^userpage/', 'login.views.userpage', name='userpage'),


    url(r'^admin/', include(admin.site.urls)),




] + static(settings.STATIC_URL , document_root=settings.STATIC_ROOT)
