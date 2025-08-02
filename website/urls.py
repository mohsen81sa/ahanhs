from django.urls import path
from . import views

app_name = "website"
urlpatterns = [
    path("",views.IndexView.as_view(),name="index"),
    path("contact/",views.ContactView.as_view(),name="contact"),
    path('search/', views.SearchView.as_view(), name='search'),

]