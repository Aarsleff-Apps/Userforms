from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('form', index),
    path('salary', index),

    path('employee',index),
    path('employee/add',index),
    path('employee/edit/<str:id>',index),

    path('job',index),
    path('job/add',index),
    path('job/edit/<str:id>',index),

    path('crud', index),
    path('crud/add', index),
    path('crud/edit/<str:id>', index)
]
