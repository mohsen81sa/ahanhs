from django.urls import path
from . import views

app_name = 'product'

urlpatterns = [
    path('product/', views.PostList.as_view(), name='product'),
    path("product/<int:pk>/",views.DetailView.as_view(), name="product-single"),
]
