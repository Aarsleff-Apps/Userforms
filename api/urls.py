from django.urls import path
from .views import UserView, CreateView

urlpatterns = [
    path('users/', UserView.as_view()),
    path('create/', CreateView.as_view())
]