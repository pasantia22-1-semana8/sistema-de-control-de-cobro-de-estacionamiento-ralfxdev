# Generated by Django 4.0.4 on 2022-05-27 04:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('vehiculos', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Registro',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_ingreso', models.DateTimeField(auto_now_add=True)),
                ('fecha_salida', models.DateTimeField(blank=True, null=True)),
                ('Vehiculo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='vehiculos.vehiculo')),
            ],
        ),
    ]
