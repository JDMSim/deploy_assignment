# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-24 00:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('multiApp_app', '0002_auto_20170223_1229'),
    ]

    operations = [
        migrations.RenameField(
            model_name='course',
            old_name='name',
            new_name='title',
        ),
        migrations.AddField(
            model_name='course',
            name='course_no',
            field=models.PositiveIntegerField(default=101),
            preserve_default=False,
        ),
    ]
