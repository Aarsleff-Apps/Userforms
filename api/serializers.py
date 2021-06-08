from rest_framework import serializers
from .models import Users

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('id','employee_id','employee', 'job_id', 'job', 'hours','created_at' )


