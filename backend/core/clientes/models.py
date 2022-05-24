"""Models Clientes"""

# Django
from django.db import models
from tarifas.models import Tarifa

class Cliente(models.Model):
    """Modelo de Cliente"""
    nombre_completo = models.CharField(max_length=255)
    telefono = models.CharField(max_length=255)
    direccion = models.CharField(max_length=255)
    tarifa = models.ForeignKey(Tarifa, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre_completo