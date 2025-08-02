from django.db import models
from django.urls import reverse
from persiantools.jdatetime import JalaliDate
import jdatetime
from django.utils.translation import gettext_lazy as _

# Create your models here.

# getting user model object
# User = get_user_model()


class Post(models.Model):
    """
    this is a class to define posts for blog app
    """

    author = models.ForeignKey("accounts.User",on_delete=models.PROTECT)
    image = models.ImageField(null=True, blank=True)
    title = models.CharField(max_length=250)
    content = models.TextField()
    content_b = models.TextField()
    status = models.BooleanField()
    category = models.ForeignKey("Category", on_delete=models.SET_NULL, null=True)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    published_date = models.DateTimeField()
    
    
    class Meta:
        verbose_name = _("پست")
        verbose_name_plural = _("پست ها")
        
    def __str__(self):
        return self.title

    @property
    def jalali_published_date(self):
        if self.published_date:
            jalali_date = jdatetime.date.fromgregorian(date=self.published_date)
            return jalali_date
        return None
    def get_snippet(self):
        return self.content[0:5]

    def get_absolute_api_url(self):
        return reverse("blog:api-v1:post-detail", kwargs={"pk": self.pk})


class Category(models.Model):
    """
    this is a class to define categories for blog table
    """

    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = _("دسته بندی")
        verbose_name_plural = _("دسته بندی ها")
