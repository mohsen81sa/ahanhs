from django.db import models
from django.urls import reverse
from persiantools.jdatetime import JalaliDate
import jdatetime
# Create your models here.

# getting user model object
# User = get_user_model()


class Products(models.Model):
    """
    this is a class to define posts for blog app
    """

    author = models.ForeignKey("accounts.User",on_delete=models.PROTECT)
    image = models.ImageField(null=True, blank=True)
    title = models.CharField(max_length=250)
    content = models.TextField()
    status = models.BooleanField()
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    published_date = models.DateTimeField()

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
