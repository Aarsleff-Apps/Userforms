from rest_framework import serializers
from .models import CRUD, Users, Salary, EmployeeList, JobList


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

class CRUDSerializers(serializers.ModelSerializer):
    class Meta:
        model = CRUD
        fields = ('id','name','number')

class EmployeeSerializers(serializers.ModelSerializer):
    class Meta:
        model = EmployeeList
        fields = ('id','employee_id','employee', 'department')

class JobSerializers(serializers.ModelSerializer):
    class Meta:
        model = JobList
        fields = ('id','job_id','job')       
