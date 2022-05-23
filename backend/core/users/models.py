"""Models users"""

# Django
from django.db import models
from django.contrib.auth.models import AbstractUser

"""
Estamos creando una nueva clase llamada User que hereda de AbstractUser.
Entonces estamos anulando los campos de username, nombre y apellido para que sean Ninguno.
También estamos anulando USERNAME_FIELD para que sea un correo electrónico
y REQUIRED_FIELDS para que sea una lista vacía
"""


class User(AbstractUser):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)

    username = None
    first_name = None
    last_name = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
