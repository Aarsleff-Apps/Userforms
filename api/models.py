from django.db import models
from django.core.exceptions import ValidationError

# Create your models here.

class Users(models.Model):
    employee_id = models.IntegerField(null=False, default=0)
    employee = models.CharField(max_length=50,default=0)
    job_id = models.IntegerField(null=False, default=0)
    job = models.CharField(max_length=50,default=0)
    hours = models.DecimalField(max_digits=5, decimal_places=1, default=0)
    created_at = models.DateField(auto_now_add=True)


    # def __str__(self):
    #     return self.hours

    # def clean(self):
    #     if self.hours < 8 or self.hours*10 % 5 != 0:
    #         raise ValidationError(
    #             {'hours': "Hours out of bounds (less than 8 or not ( % 0.5  = 0)"})

    # def save(self, *args, **kwargs):
    #         self.full_clean()
    #         return super().save(*args, **kwargs)