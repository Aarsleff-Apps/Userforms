from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from rest_framework.views import APIView
from rest_framework.response import Response



from .models import CRUD, Users, Salary, EmployeeList
from .serializers import CRUDSerializers, UserSerializers, SalarySerializers, EmployeeSerializers
from rest_framework import generics

# Create your views here.


class EmployeeCreateView(generics.CreateAPIView):
    queryset = EmployeeList.objects.all()
    serializer_class = EmployeeSerializers

class EmployeeListView(generics.ListAPIView):
    queryset = EmployeeList.objects.all()
    serializer_class = EmployeeSerializers


@api_view(['GET', 'PUT', 'DELETE'])
def employee_details(request, id):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        users = EmployeeList.objects.get(id=id)
    except EmployeeList.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = EmployeeSerializers(users)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = EmployeeSerializers(users, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        users.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)





@api_view(['GET', 'PUT', 'DELETE'])
def users_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        users = CRUD.objects.get(pk=pk)
    except CRUD.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CRUDSerializers(users)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CRUDSerializers(users, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        users.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@csrf_exempt
def testview(request, id):
    try:
        test = CRUD.objects.get(id=id)
    except CRUD.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)

@csrf_exempt
def user_detail(request, id):
    try:
        user = CRUD.objects.get(id=id)
    except CRUD.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        user_serializer = CRUDSerializers(user)
        return JsonResponse(user_serializer.data)

    # elif request.method == 'PATCH':
    #     user_data = JSONParser().parse(request)
    #     user_serializer = CRUDSerializers(user, data=user_data)
    #     if user_serializer.is_valid():
    #         user_serializer.save()
    #         return JsonResponse(user_serializer.data)
    #     return JsonResponse(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        user.delete()
    return HttpResponse(status=status.HTTP_204_NO_CONTENT)

@csrf_exempt
def user_list(request):
    if request.method == 'GET':
        users = CRUD.objects.all()
        users_serializer = CRUDSerializers(users, many=True)
        return JsonResponse(users_serializer.data, safe=False)
        # In order to serialize objects, we must set 'safe=False'

    elif request.method == 'PUT':
        user_data = JSONParser().parse(request)
        users_serializer = CRUDSerializers(data=user_data)
        if users_serializer.is_valid():
            users_serializer.save()
            return JsonResponse(users_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(users_serializer.errors, status=status.HTTP_400_BAD_REQUEST)






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


class CRUDListView(generics.ListAPIView):
    queryset = CRUD.objects.all()
    serializer_class = CRUDSerializers


class CRUDView(generics.CreateAPIView):
    queryset = CRUD.objects.all()
    serializer_class = CRUDSerializers


class CRUDDelete(generics.DestroyAPIView):
    serializer_class = CRUDSerializers
    queryset = CRUD.objects.all()
