# Generated by Django 5.0.2 on 2024-02-26 22:07

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_newdepartment_alter_newuser_start_date'),
    ]

    operations = [
        migrations.DeleteModel(
            name='NewDepartment',
        ),
        migrations.AlterField(
            model_name='newuser',
            name='start_date',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 26, 22, 7, 35, 271802, tzinfo=datetime.timezone.utc)),
        ),
    ]