from django.shortcuts import render
from django.views.generic import ListView,DetailView
from .models import ProductModel,ProductStatusType
# Create your views here.


class ShopProductGridView(ListView):
    template_name = "shop/product-grid.html"
    queryset = ProductModel.objects.filter(status=ProductStatusType.publish.value)
    context_object_name = 'posts'  # نام متغیری که در تمپلیت استفاده می‌شود
    paginate_by = 10    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["total_item"] = self.get_queryset().count()
        return context
