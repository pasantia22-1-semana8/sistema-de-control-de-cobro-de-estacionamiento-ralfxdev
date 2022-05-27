# Generated by Django 4.0.4 on 2022-05-27 04:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registros', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='registro',
            name='tiempo_total',
            field=models.DurationField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='registro',
            name='total_pagar',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True),
        ),
    ]
