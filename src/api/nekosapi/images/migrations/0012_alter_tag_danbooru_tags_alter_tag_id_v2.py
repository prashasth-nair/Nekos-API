# Generated by Django 4.2.6 on 2024-01-19 06:26

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0011_image_danbooru_processed_tag_danbooru_tags'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tag',
            name='danbooru_tags',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.TextField(), blank=True, db_index=True, default=[], size=None),
        ),
        migrations.AlterField(
            model_name='tag',
            name='id_v2',
            field=models.UUIDField(blank=True, default=None, null=True),
        ),
    ]