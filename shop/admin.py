from django.contrib import admin
from .models import *

# Register your models here.

@admin.register(ProductModel)
class ProductModelAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "stock", "status","created_date")
    
   
admin.site.register(SimpleDateModel)
