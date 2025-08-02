from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.

class CantactModel(models.Model):
    phone = PhoneNumberField(verbose_name="شماره تلفن")
    phonee = PhoneNumberField(verbose_name='2 تلفن')  # 'null=True' برای ذخیره مقدار خالی در دیتابیس
    email = models.EmailField(blank=False)
    emaill = models.EmailField(blank=True)
    address = models.CharField(max_length=70, verbose_name='آدرس')
    class Meta:
        verbose_name = 'ارتباط با ما'
        
    def __str__(self):
        return self.email