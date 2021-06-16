from rest_framework import serializers
from .models import Users, Salary


class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('id', 'employee_id', 'employee',
                  'job_id', 'job', 'hours', 'created_at')


class SalarySerializers(serializers.ModelSerializer):
    class Meta:
        model = Salary
        fields = ('id', 'employee_id', 'employee', 'salary_weekly', 'created_at',
                  'leaving_date', 'joining_date', 'car_allowance', 'national_insurance', 'pension')
