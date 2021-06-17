from django.urls import path
from django.conf.urls import url 
from .views import CRUDListView, CRUDView, UserView, CreateView, SalaryView, SalaryListView, CRUDDelete, user_list, user_detail, users_detail

urlpatterns = [
    path('users/', UserView.as_view()),
    path('create/', CreateView.as_view()),
    path('salary/', SalaryView.as_view()),
    path('salary/list/', SalaryListView.as_view()),
    path('crud/', CRUDView.as_view()),
    path('crud/list/', CRUDListView.as_view()),
    path('crud/delete/<str:id>', CRUDDelete.as_view()),
    path('crud/del/', user_list),
    path('crud/del/<str:id>', user_detail),
    path('crud/detailview/<int:pk>', users_detail)

]
