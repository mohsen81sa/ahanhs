from django.views.generic import (
    TemplateView,
    ListView,
    DetailView,
    View
)
from .models import Products
# Create your views here.


class PostList(ListView):
    template_name = "product/product-list.html"

    queryset = Products.objects.filter(status=True)
    # model = Post
    context_object_name = "products"
    paginate_by = 2
    ordering = "-id"
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

class DetailView(DetailView):
    template_name = "product/product-single.html"
    queryset = Products.objects.filter(
        status=True)
    context_object_name ='posts'

def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # دریافت ۵ پست اخیر که منتشر شده‌اند
        context['recent_posts'] = Products.objects.filter(
            status=True
        ).order_by('-published_date')[:2]
        return context
