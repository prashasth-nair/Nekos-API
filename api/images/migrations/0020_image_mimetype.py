# Generated by Django 4.1.5 on 2023-04-01 02:36

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("images", "0019_remove_image_primary_color_image_palette"),
    ]

    operations = [
        migrations.AddField(
            model_name="image",
            name="mimetype",
            field=models.CharField(
                blank=True,
                help_text="The image's file format.",
                max_length=11,
                null=True,
            ),
        ),
    ]