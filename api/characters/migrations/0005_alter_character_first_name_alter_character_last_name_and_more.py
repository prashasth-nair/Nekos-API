# Generated by Django 4.2 on 2023-06-04 02:27

from django.db import migrations, models
import django.db.models.functions.text


class Migration(migrations.Migration):
    dependencies = [
        ("characters", "0004_alter_character_gender"),
    ]

    operations = [
        migrations.AlterField(
            model_name="character",
            name="first_name",
            field=models.CharField(db_index=True, max_length=50),
        ),
        migrations.AlterField(
            model_name="character",
            name="last_name",
            field=models.CharField(blank=True, db_index=True, max_length=50, null=True),
        ),
        migrations.AddIndex(
            model_name="character",
            index=models.Index(
                models.OrderBy(
                    django.db.models.functions.text.Lower("first_name"), descending=True
                ),
                models.OrderBy(
                    django.db.models.functions.text.Lower("last_name"), descending=True
                ),
                name="character_name_index",
            ),
        ),
    ]