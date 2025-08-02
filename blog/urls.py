from django.urls import path
from blog.views import PostList,DetailView

app_name = 'blog'

urlpatterns = [
    path('blog/', PostList.as_view(), name='blog'),
    path("post/<int:pk>/",DetailView.as_view(), name="single"),
]
