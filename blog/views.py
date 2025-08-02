from django.views.generic import (
    TemplateView,
    ListView,
    DetailView,
    View
)
from .models import Post,Category
# Create your views here.


class PostList(ListView):
    template_name = "blog/blog.html"
    queryset = Post.objects.filter(status=True)
    context_object_name = "posts"
    paginate_by = 2
    ordering = "-id"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

class DetailView(DetailView):
    template_name = "blog/single-blog.html"
    queryset = Post.objects.filter(
        status=True)
    context_object_name ='posts'

def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # دریافت ۵ پست اخیر که منتشر شده‌اند
        context['recent_posts'] = Post.objects.filter(
            status=True
        ).order_by('-created_date')[:2]
        return context
