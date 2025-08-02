from django.shortcuts import render
from django.views.generic import TemplateView,ListView
from .models import CantactModel
from blog.models import Post
# Create your views here.
class IndexView(TemplateView):
    template_name = "website/index.html" 

class ContactView(ListView):
    template_name = "website/contact.html"
    queryset = CantactModel.objects.all()
    context_object_name = 'posts'
    
class SearchView(ListView):
    template_name = "blog/blog.html"
    def get_queryset(self):
        queryset = Post.objects.filter(status=True)
        if search_q := self.request.GET.get("q"):
            queryset = queryset.filter(title__icontains=search_q)
        return queryset 