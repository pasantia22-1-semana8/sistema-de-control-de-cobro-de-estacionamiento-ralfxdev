"""Serializers Clientes."""

# Django
from asyncore import read, write
from .models import Cliente
from tarifas.models import Tarifa
from tarifas.serializers import TarifaSerializer

# Django Rest Framework
from rest_framework import serializers


class ClienteSerializer(serializers.ModelSerializer):
    tarifa = TarifaSerializer(read_only=True)
    tarifa_id = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Tarifa.objects.all(), source='tarifa')
    class Meta:
        model = Cliente
        fields = ('id', 'nombre_completo', 'telefono', 'direccion', 'tarifa', 'tarifa_id')
