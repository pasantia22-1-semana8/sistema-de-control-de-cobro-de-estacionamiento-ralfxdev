"""Views Clientes"""

# Django
from django.shortcuts import render
from tarifas.serializers import TarifaSerializer
from .serializers import ClienteSerializer
from tarifas.models import Tarifa
from .models import Cliente

# Django Rest Framework
from rest_framework.views import Response
from rest_framework import viewsets


class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer


    def create(self, request, *args, **kwargs):
        cliente = Cliente(
            nombre_completo = request.data['nombre_completo'],
            telefono = request.data['telefono'],
            direccion = request.data['direccion'],
        )
        tarifa = Tarifa.objects.get(id=request.data['tarifa_id'])
        cliente.tarifa = tarifa
        cliente.save()
        return Response({'detail': 'Cliente creado'}, status=201)

    def destroy(self, request, *args, **kwargs):
        cliente = self.get_object()
        cliente.delete()
        return Response({'detail': 'Cliente eliminado'}, status=204)

    def update(self, request, *args, **kwargs):
        cliente = self.get_object()
        cliente.nombre_completo = request.data['nombre_completo']
        cliente.telefono = request.data['telefono']
        cliente.direccion = request.data['direccion']
        tarifa = Tarifa.objects.get(id=request.data['tarifa_id'])
        cliente.tarifa = tarifa
        cliente.save()
        return Response({'detail': 'Cliente actualizado'}, status=200)