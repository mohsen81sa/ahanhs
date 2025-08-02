from django.contrib import admin
from .models import *

# Register your models here.

@admin.register(CantactModel)
class ProductModelAdmin(admin.ModelAdmin):
    list_display = ('phone', 'email', 'address')
