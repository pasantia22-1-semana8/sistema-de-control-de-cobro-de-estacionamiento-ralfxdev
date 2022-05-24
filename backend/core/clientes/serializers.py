"""Serializers Clientes."""

# Django
from .models import Cliente

# Django Rest Framework
from rest_framework import serializers


class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ('id', 'nombre_completo', 'telefono', 'direccion', 'tarifa')
