"""Serializers Vehiculo."""

# Django
from .models import Vehiculo
from clientes.models import Cliente
from clientes.serializers import ClienteSerializer

# Django Rest Framework
from rest_framework import serializers


class VehiculoSerializer(serializers.ModelSerializer):
    cliente = ClienteSerializer(read_only=True)
    cliente_id = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Cliente.objects.all(), source='cliente')
    class Meta:
        model = Vehiculo
        fields = ('id', 'placa', 'marca', 'modelo', 'color', 'cliente', 'cliente_id')
        
