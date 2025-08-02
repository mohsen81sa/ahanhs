from django import template
from blog.models import Post
from product.models import Products
register = template.Library()

@register.inclusion_tag("includes/latest_single.html")
def show_latest_single():
    latest_single = Post.objects.filter(status=True).distinct().order_by("-created_date")[:8]
    return {"latest_single": latest_single}

@register.inclusion_tag("includes/latest-blog.html")
def show_latest_blog():
    latest_blog = Post.objects.filter(status=True).distinct().order_by("-created_date")[:8]
    return {"latest_blog": latest_blog}

@register.inclusion_tag("includes/latest-products.html")
def show_latest_products():
    latest_products = Products.objects.filter(status=True).distinct().order_by("-created_date")[:8]
    return {"latest_products": latest_products}

@register.filter
def month_name(month_num):
    months = [
        "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور",
        "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"
    ]
    return months[month_num - 1] if 1 <= month_num <= 12 else ""