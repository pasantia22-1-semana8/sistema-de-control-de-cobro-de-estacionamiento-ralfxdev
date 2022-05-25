"""Views Vehiculo"""

# Django
from django.shortcuts import render
from clientes.serializers import ClienteSerializer
from .serializers import VehiculoSerializer
from clientes.models import Cliente
from .models import Vehiculo

# Django Rest Framework
from rest_framework.views import Response
from rest_framework import viewsets


class VehiculoViewSet(viewsets.ModelViewSet):
    queryset = Vehiculo.objects.all()
    serializer_class = VehiculoSerializer

    def create(self, request, *args, **kwargs):
        vehiculo = Vehiculo(
            placa = request.data['placa'],
            marca = request.data['marca'],
            modelo = request.data['modelo'],
            color = request.data['color'],
            cliente = Cliente.objects.get(id=request.data['cliente_id'])
        )
        vehiculo.save()
        return Response({'detail': 'Vehiculo creado'}, status=201)

    def destroy(self, request, *args, **kwargs):
        vehiculo = self.get_object()
        vehiculo.delete()
        return Response({'detail': 'Vehiculo eliminado'}, status=204)

    def update(self, request, *args, **kwargs):
        vehiculo = self.get_object()
        vehiculo.placa = request.data['placa']
        vehiculo.marca = request.data['marca']
        vehiculo.modelo = request.data['modelo']
        vehiculo.color = request.data['color']
        vehiculo.cliente = Cliente.objects.get(id=request.data['cliente_id'])
        vehiculo.save()
        return Response({'detail': 'Vehiculo actualizado'}, status=200)