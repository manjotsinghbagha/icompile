from django.urls import path, re_path
from django.contrib import admin
from api import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.run , name='runcode'), # GET API
]
