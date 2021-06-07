from django.db import models


# Create your models here.

class Users(models.Model):
    username = models.CharField(max_length=10, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)