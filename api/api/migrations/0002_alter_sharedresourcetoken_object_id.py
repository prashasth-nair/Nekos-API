# Generated by Django 4.2.1 on 2023-06-05 03:17

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="sharedresourcetoken",
            name="object_id",
            field=models.CharField(max_length=1000),
        ),
    ]