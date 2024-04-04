# Generated by Django 4.2.6 on 2024-01-19 05:51

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("images", "0010_alter_image_image_v2_alter_tag_id_v2"),
    ]

    operations = [
        migrations.AddField(
            model_name="image",
            name="danbooru_processed",
            field=models.BooleanField(db_index=True, default=False),
        ),
        migrations.AddField(
            model_name="tag",
            name="danbooru_tags",
            field=django.contrib.postgres.fields.ArrayField(
                base_field=models.TextField(),
                blank=True,
                db_index=True,
                default=list,
                size=None,
            ),
            preserve_default=False,
        ),
    ]