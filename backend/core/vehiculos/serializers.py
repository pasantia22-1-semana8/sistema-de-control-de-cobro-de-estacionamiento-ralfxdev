"""Serializers Vehiculo."""

# Django
from urllib import response
from .models import Vehiculo

# Django Rest Framework
from rest_framework import serializers


class VehiculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehiculo
        fields = ('id', 'placa', 'marca', 'modelo', 'color', 'cliente')
        
