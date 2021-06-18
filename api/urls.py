from django.urls import path
from django.conf.urls import url
from .views import CRUDListView, CRUDView, UserView, CreateView, SalaryView, SalaryListView, CRUDDelete, user_list, user_detail, users_detail, employee_details, EmployeeCreateView, EmployeeListView, EmployeeList, JobCreateView, JobListView, job_details

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
    path('crud/detailview/<int:pk>', users_detail),




    path('employee/add', EmployeeCreateView.as_view()),
    path('employee/list', EmployeeListView.as_view()),
    path('employee/delete/<int:id>', employee_details),
    path('employee/put/<int:id>', employee_details),


    path('job/add', JobCreateView.as_view()),
    path('job/list', JobListView.as_view()),
    path('job/delete/<int:id>', job_details),
    path('job/put/<int:id>', job_details),




]
