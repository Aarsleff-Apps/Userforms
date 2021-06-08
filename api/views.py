from django.shortcuts import render
from .models import Users
from .serializers import UserSerializers
from rest_framework import generics

# Create your views here.

class UserView(generics.ListAPIView):
    queryset = Users.objects.all()
    serializer_class = UserSerializers