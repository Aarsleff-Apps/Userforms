from django.urls import path
from .views import CRUDListView, CRUDView, UserView, CreateView, SalaryView, SalaryListView

urlpatterns = [
    path('users/', UserView.as_view()),
    path('create/', CreateView.as_view()),
    path('salary/', SalaryView.as_view()),
    path('salary/list/', SalaryListView.as_view()),
    path('crud/', CRUDView.as_view()),
    path('crud/list/', CRUDListView.as_view()),

]
