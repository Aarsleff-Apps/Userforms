from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('form', index),
    path('salary', index),
    path('crud', index)
]
