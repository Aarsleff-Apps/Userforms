from django.shortcuts import render
from .models import Users, Salary
from .serializers import UserSerializers, SalarySerializers
from rest_framework import generics

# Create your views here.

class UserView(generics.ListAPIView):
    queryset = Users.objects.all()
    serializer_class = UserSerializers

class CreateView(generics.CreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UserSerializers

class SalaryView(generics.CreateAPIView):
    queryset = Salary.objects.all()
    serializer_class = SalarySerializers

class SalaryListView(generics.ListAPIView):
    queryset = Salary.objects.all()
    serializer_class = SalarySerializers

