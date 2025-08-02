from django.db import models
from decimal import Decimal
from django.core.validators import MaxValueValidator, MinValueValidator
from django.utils.translation import gettext_lazy as _


class ProductStatusType(models.IntegerChoices):
    publish = 1 ,("نمایش")
    draft = 2 ,("عدم نمایش")



# Create your models here.
class ProductModel(models.Model):
    user = models.ForeignKey("accounts.User",on_delete=models.PROTECT,verbose_name='سازنده')
    title = models.CharField(max_length=255,verbose_name='عنوان')
    thickness = models.PositiveIntegerField(default=0,verbose_name='ضخامت')
    avg_rate = models.CharField(max_length=255,verbose_name='ابعاد')
    stock = models.PositiveIntegerField(default=0,verbose_name='وزن تؤری')
    brief_description = models.TextField(null=True,blank=True,verbose_name='محل تحویل')
    vahed = models.CharField(max_length=255,verbose_name='واحد')
    price = models.DecimalField(default=0,max_digits=10,decimal_places=0,verbose_name='قیمت')
    discount_percent = models.IntegerField(default=0,validators = [MinValueValidator(0),MaxValueValidator(100)],verbose_name='تخفیف')
    time = models.ForeignKey("SimpleDateModel", on_delete=models.SET_NULL, null=True)    
    status = models.IntegerField(choices=ProductStatusType.choices,default=ProductStatusType.draft.value)  
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    
    class Meta:
        ordering = ["-created_date"]
        verbose_name = "افزودن قیمت"
        verbose_name_plural = _("لیست قیمت ها")

    
    
        
    def __str__(self):
        return self.title
    
    def get_price(self):        
        discount_amount = self.price * Decimal(self.discount_percent / 100)
        discounted_amount = self.price - discount_amount
        return '{:,}'.format(round(discounted_amount))
    
    def is_discounted(self):
        return self.discount_percent != 0
    
    def is_published(self):
        return self.status == ProductStatusType.publish.value
    
    
class SimpleDateModel(models.Model):
    title = models.CharField(max_length=100)
    date_string = models.CharField(max_length=20, help_text="تاریخ را وارد کنید (مثلاً: 1403/01/27 یا 2025-04-16)")

    def __str__(self):
        return f"{self.title} - {self.date_string}"